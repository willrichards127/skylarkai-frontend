/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import {
  IChat,
  IEdgarFile,
  IFeatureInstance,
  ITransaction,
  ITranscript,
  ITopic,
  ICompany,
  IChatResponse,
  IFetchFileResponse,
  IExecutionReportDetail,
} from "../interfaces";
import { parseTransaction } from "../../shared/utils/string";
import { handleCatchError } from "./helper";

export const transcriptApi = createApi({
  reducerPath: "transcriptApi",
  baseQuery: baseQuery,
  tagTypes: ["FeatureInstance", "FetchFileLog"],
  endpoints: (builder) => ({
    createFeatureInstance: builder.mutation<
      IFeatureInstance,
      {
        feature_id: number;
        company_name: string;
        ticker: string;
        instance_name: string;
        instance_metadata: Record<string, any>;
      }
    >({
      query: ({
        feature_id,
        company_name,
        ticker,
        instance_name,
        instance_metadata,
      }) => ({
        url: "feature_instances",
        method: "POST",
        body: {
          feature_id,
          company_name,
          ticker,
          instance_name,
          instance_metadata,
        },
      }),
    }),
    updateFeatureInstance: builder.mutation<
      IFeatureInstance,
      {
        id: number;
        instance_metadata: Record<string, any>;
      }
    >({
      query: ({ id, instance_metadata }) => ({
        url: `feature_instances/${id}`,
        method: "PUT",
        data: instance_metadata,
      }),
    }),
    deleteFeatureInstance: builder.mutation<
      void,
      {
        id: number; // instance_id
      }
    >({
      query: ({ id }) => ({
        url: `feature_instances/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FeatureInstance"],
    }),
    getFeatureInstances: builder.query<
      IFeatureInstance[],
      { feature_id: number }
    >({
      query: ({ feature_id }) => ({
        url: `feature_instances/${feature_id}`,
        method: "get",
      }),
      providesTags: ["FeatureInstance"],
      keepUnusedDataFor: 0,
    }),
    getFeatureInstance: builder.query<
      IFeatureInstance,
      { instance_id: number }
    >({
      query: ({ instance_id }) => ({
        url: `feature_instance/${instance_id}`,
        method: "get",
      }),
    }),
    // download SEC filings or transcript files
    fetchFiles: builder.mutation<
      void,
      {
        company_name: string;
        ticker: string;
        start_year: string;
        number_of_years?: number;
        analysis_type: "edgar" | "transcript";
      }
    >({
      async queryFn(
        {
          company_name,
          ticker,
          start_year,
          analysis_type,
          number_of_years = 3,
        },
        api,
        _,
        apiBaseQuery
      ) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          let url: string;
          if (analysis_type === "edgar") {
            url = `fetch_edgar/${graph_id}?company_name=${company_name}&ticker=${ticker}&start_year=${start_year}-01-01`;
          } else {
            url = `fetch_transcripts/${graph_id}?company_name=${company_name}&ticker=${ticker}&end_year=${+start_year}&number_of_years=${number_of_years}`;
          }
          const response: any = await apiBaseQuery({
            url,
            method: "POST",
          });
          return {
            data: response.data,
          };
        } catch (e) {
          return handleCatchError(e, "fetchFiles");
        }
      },
    }),
    // get SEC filings or transcript or transaction files
    getFiles: builder.query<
      any,
      {
        company_name: string;
        ticker: string;
        analysis_type: "edgar" | "transcript" | "transaction";
      }
    >({
      async queryFn(
        { company_name, ticker, analysis_type },
        api,
        _,
        apiBaseQuery
      ) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: `${analysis_type === "edgar"
                ? "edgar_files"
                : analysis_type === "transcript"
                  ? "transcript_files"
                  : "insider_transaction"
              }/${graph_id}?company_name=${company_name}&ticker=${ticker}`,
            method: "GET",
          });
          if (!response.data || response.data[1] === 400) {
            return {
              data: [],
            };
          }
          return {
            data: response.data,
          };
        } catch (e) {
          return handleCatchError(e, "getFiles");
        }
      },
      keepUnusedDataFor: 0,
    }),
    getEdgars: builder.query<
      IEdgarFile[],
      {
        company_name: string;
        ticker: string;
      }
    >({
      async queryFn({ company_name, ticker }, api, _, apiBaseQuery) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          // get file names for edgars
          const responseFilenames: any = await apiBaseQuery({
            method: "GET",
            url: `edgar_files/${graph_id}?company_name=${company_name}&ticker=${ticker}`,
          });
          return {
            data: [...responseFilenames.data].sort(
              (a, b) =>
                new Date(b.filing_date).getTime() -
                new Date(a.filing_date).getTime()
            ),
          };
        } catch (e) {
          return handleCatchError(e, "getEdgars");
        }
      },
    }),
    // Transcripts
    getTranscripts: builder.query<
      ITranscript[],
      { company_name: string; ticker: string }
    >({
      async queryFn({ company_name, ticker }, api, _, apiBaseQuery) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: `transcript_files/${graph_id}?company_name=${company_name}&ticker=${ticker}`,
            method: "GET",
          });

          return {
            data: response.data,
          };
        } catch (e) {
          return handleCatchError(e, "getTranscripts");
        }
      },
    }),
    getTransactions: builder.query<
      ITransaction[],
      {
        company_name: string;
        ticker: string;
      }
    >({
      async queryFn({ company_name, ticker }, api, __, apiBaseQuery) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const responseEdgars: any = await apiBaseQuery({
            url: `edgar_files/${graph_id}?company_name=${company_name}&ticker=${ticker}`,
            method: "GET",
          });
          const responseTransactions: any = await apiBaseQuery({
            url: `insider_transaction/${graph_id}?company_name=${company_name}&ticker=${ticker}`,
            method: "GET",
          });

          const finalResult = responseTransactions.data.map(
            (transaction: any) => {
              const matchedEdgar = responseEdgars.data.find(
                (edgar: any) => edgar.file_name === transaction.file_name
              );
              return {
                ...transaction,
                url: matchedEdgar ? matchedEdgar.url : "",
              };
            }
          );

          return {
            data: finalResult
              .map((record: any) => parseTransaction(record))
              .sort(
                (a: any, b: any) =>
                  new Date(b.reported_date).getTime() -
                  new Date(a.reported_date).getTime()
              ),
          };
        } catch (e) {
          return handleCatchError(e, "getTransactions");
        }
      },
      keepUnusedDataFor: 0,
    }),
    updateFeedback: builder.mutation<
      any,
      {
        graph_id: number;
        question_text: string;
        user_feedback: any;
        system_feedback: any;
      }
    >({
      async queryFn(
        { graph_id, question_text, user_feedback, system_feedback },
        api,
        __,
        apiBaseQuery
      ) {
        const user = (api.getState() as any).userAuthSlice.user;

        try {
          const response = await apiBaseQuery({
            url: "update-feedback",
            method: "POST",
            data: {
              graph_id,
              user_id: user.id,
              question_text,
              user_feedback,
              system_feedback,
            },
          });

          if (response.error) {
            return {
              error: response.error,
            };
          } else if (response.data) {
            return {
              data: {
                message: (response.data as any).status,
              },
            };
          }

          throw new Error("Fetch error");
        } catch (e) {
          return handleCatchError(e, "updateFeedback");
        }
      },
    }),
    customQuery: builder.mutation<
      IChat,
      {
        graph_id?: number;
        question: string;
        company_name?: string;
        filenames: string[];
        analysis_type?: string;
        llm?: string;
        recursion?: number;
        chatmode?: boolean;
        insider_transaction?: boolean;
      }
    >({
      async queryFn(
        {
          graph_id,
          question,
          filenames,
          company_name,
          recursion = 5,
          analysis_type = "transcript",
          chatmode = false,
          llm = "OpenAI",
          insider_transaction = false,
        },
        api,
        __,
        apiBaseQuery
      ) {
        const sys_graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        const current_graph_id = graph_id || sys_graph_id;
        try {
          const response = await apiBaseQuery({
            url: `customquery/${current_graph_id}?llm=${llm}&recursion=${recursion}&analysis_type=${analysis_type}&company_name=${company_name}&${insider_transaction
                ? "&insider_transaction=" + insider_transaction
                : ""
              }`,
            method: "POST",
            body: {
              company_name,
              question,
              filenames,
              chatmode,
              llm,
            },
          });

          if (response.error) {
            return {
              error: response.error,
            };
          } else if (response.data) {
            return {
              data: {
                type: "answer",
                content: (response.data as any).answer,
                reference: (response.data as any).reference,
                rating: (response.data as any).rating,
                rating_response: (response.data as any).rating_response,
              },
            };
          }

          throw new Error("Fetch error");
        } catch (e) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: "Error in customQuery API",
              data: e,
            },
          };
        }
      },
    }),
    bulkCustomQuery: builder.mutation<
      any[],
      {
        graph_id?: number;
        questions: string[];
        company_name?: string;
        filenames: string[];
        analysis_type?: string;
        llm?: string;
        recursion?: number;
        chatmode?: boolean;
        insider_transaction?: boolean;
      }
    >({
      async queryFn(
        {
          graph_id,
          questions,
          filenames,
          company_name,
          recursion = 5,
          analysis_type = "transcript",
          chatmode = false,
          llm = "OpenAI",
          insider_transaction = false,
        },
        api,
        __,
        apiBaseQuery
      ) {
        const sys_graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        const current_graph_id = graph_id || sys_graph_id;
        try {
          const promises: any[] = [];
          for (const question of questions) {
            const promise = Promise.resolve(
              apiBaseQuery({
                url: `customquery/${current_graph_id}?llm=${llm}&recursion=${recursion}&analysis_type=${analysis_type}&company_name=${company_name}&${
                  insider_transaction
                    ? "&insider_transaction=" + insider_transaction
                    : ""
                }`,
                method: "POST",
                body: {
                  company_name,
                  question,
                  filenames,
                  chatmode,
                  llm,
                },
              })
            );
            promises.push(promise);
          }

          const responses: any = await Promise.all(promises);
          const answers = responses.map((res: any) => res.data.answer);
          return {
            data: answers,
          } as any;
        } catch (e) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: "Error in customQuery API",
              data: e,
            },
          };
        }
      },
    }),
    reportSectionTemplate: builder.mutation<
      any,
      {
        graph_id?: number;
        template: string;
        question: string;
        analysis_type: string;
        company_name: string;
        sub_question: string[];
        is_file_with_content?: boolean;
        is_template_with_content?: boolean;
        all_files?: boolean;
        llm?: string;
      }
    >({
      async queryFn(
        {
          graph_id,
          analysis_type,
          template,
          question,
          is_file_with_content = false,
          is_template_with_content = true,
          company_name,
          all_files = true,
          sub_question,
          llm = "OpenAI",
        },
        api,
        __,
        apiBaseQuery
      ) {
        const sys_graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        const current_graph_id = graph_id || sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: "reports/section_template",
            method: "POST",
            data: {
              graph_id: current_graph_id,
              question,
              analysis_type,
              template,
              sub_question,
              is_file_with_content,
              is_template_with_content,
              company_name,
              all_files,
              llm,
            },
          });

          if (response.error) {
            return {
              error: response.erorr,
            };
          }
          return response;
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              msg: "Error in reports/section_template API",
            },
          };
        }
      },
    }),
    createReport: builder.mutation<
      any,
      {
        company_name: string;
        report_name: string;
        data: string;
        template: string;
      }
    >({
      async queryFn(args, api, ___, apiBaseQuery) {
        const { company_name, report_name, data, template } = args;
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const reportResponse: any = await apiBaseQuery({
            url: `reports`,
            method: "POST",
            data: {
              data,
              graph_id,
              report_name,
              execute_query: true,
              template,
              company_name,
            },
          });
          const generatedId: number = reportResponse.data.new_id;

          return {
            data: generatedId,
          };
        } catch (e) {
          return handleCatchError(e, "createReport");
        }
      },
    }),
    generateSentimentAnalysis: builder.mutation<
      any,
      {
        sentiments: string[];
        filenames: { graph_id: number; id?: number; file_name: string }[];
        is_report?: boolean;
        analysis_type: string;
        llm?: string;
      }
    >({
      async queryFn(
        {
          sentiments,
          is_report = false,
          analysis_type,
          filenames,
          llm = "OpenAI",
        },
        _,
        __,
        apiBaseQuery
      ) {
        try {
          const response: any = await apiBaseQuery({
            url: `sentimentanalysis?llm=${llm}&is_report=${is_report}&analysis_type=${analysis_type}`,
            method: "POST",
            body: {
              sentiments,
              filenames,
            },
          });

          return {
            data: {
              type: "answer",
              content: response.data.answer,
              reference: response.data.reference,
            },
          };
        } catch (e) {
          return handleCatchError(e, "generateSentimentAnalysis");
        }
      },
    }),
    cloneFeatureReport: builder.mutation<
      any,
      { report_name: string; content: string; unit_id: number }
    >({
      query: ({ report_name, content, unit_id }) => ({
        url: "feature_report",
        method: "POST",
        body: {
          report_name,
          content,
          company_id: unit_id,
        },
      }),
    }),
    getFilesData: builder.query<
      any,
      { docs: { name: string; analysis_type: string }[] }
    >({
      async queryFn({ docs }, api, ___, apiBaseQuery) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const promises = [];
          for (const doc of docs) {
            const promise = Promise.resolve(
              apiBaseQuery({
                method: "get",
                url: `file_data/${graph_id}?file_name=${doc.name.replace(
                  ".pdf",
                  ""
                )}&analysis_type=${doc.analysis_type}`,
              })
            );
            promises.push(promise);
          }
          const responses = await Promise.all(promises);
          const merged = [].concat(
            ...responses
              .filter((response) => !!response.data)
              .map((response) => response.data as any)
          );
          return {
            data: merged,
          };
        } catch (e) {
          return handleCatchError(e, "getFilesData");
        }
      },
      keepUnusedDataFor: 0,
    }),
    compareDocuments: builder.mutation<
      any,
      {
        document1: string;
        document2: string;
        template: string;
        is_file_with_content?: boolean;
        is_template_with_content?: boolean;
        llm?: string;
        analysis_type?: string;
      }
    >({
      async queryFn(
        {
          document1,
          document2,
          template = "",
          llm = "Gemini",
          is_file_with_content = false,
          is_template_with_content = false,
          analysis_type = "compare",
        },
        api,
        _,
        apiBaseQuery
      ) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: `compare_document/${graph_id}?analysis_type=${analysis_type}`,
            method: "POST",
            body: {
              document1,
              document2,
              template,
              is_file_with_content,
              is_template_with_content,
              llm,
            },
          });

          return {
            data: response.data.compared_document,
          };
        } catch (e) {
          return handleCatchError(e, "compareDocuments");
        }
      },
    }),
    ingestFiles: builder.mutation<
      any,
      {
        files: File[];
        company_name?: string;
        analysis_type: string;
      }
    >({
      async queryFn(
        { company_name = "Skylark", files, analysis_type },
        api,
        __,
        apiBaseQuery
      ) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const formdata = new FormData();
          formdata.append("analysis_type", analysis_type);
          files.forEach((file) => {
            formdata.append("files", file, file.name);
          });

          const response: any = await apiBaseQuery({
            url: `ingestfiles?graph_id=${graph_id}&company_name=${company_name}`,
            method: "POST",
            body: formdata,
          });

          return {
            data: response.data,
          };
        } catch (e) {
          return handleCatchError(e, "ingestFiles");
        }
      },
    }),
    getSiteContent: builder.mutation<any, { website_url: string }>({
      query: ({ website_url }) => ({
        url: "crawler",
        method: "POST",
        data: {
          url: website_url,
        },
      }),
    }),
    generateInvestmentReport: builder.mutation<
      any,
      {
        report_name?: string;
        template: string;
        data: string;
        is_file_with_content?: boolean;
        is_template_with_content?: boolean;
        llm?: string;
        company_name: string;
        execute_query?: boolean;
      }
    >({
      async queryFn(
        {
          execute_query = true,
          report_name = "Investment Memo Report",
          template,
          data,
          is_file_with_content = true,
          is_template_with_content = true,
          company_name,
          llm = "OpenAI",
        },
        api,
        __,
        apiBaseQuery
      ) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: `reports`,
            method: "POST",
            data: {
              graph_id: graph_id,
              execute_query,
              report_name,
              template,
              data: JSON.stringify({
                answer: data,
              }),
              company_name,
              is_file_with_content,
              is_template_with_content,
              llm,
            },
          });

          return {
            data: response.data.new_id,
          };
        } catch (e) {
          return handleCatchError(e, "generateInvestmentReport");
        }
      },
    }),
    getSuggestions: builder.query<
      ITopic[],
      {
        analysis_type: string;
      }
    >({
      async queryFn({ analysis_type }, api, ___, apiBaseQuery) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response = await apiBaseQuery({
            method: "get",
            url: `analysis_type_queries/${graph_id}?analysis_type=${analysis_type}`,
          });

          return {
            data: response.data as ITopic[],
          };
        } catch (e) {
          return handleCatchError(e, "getSuggestions");
        }
      },
      keepUnusedDataFor: 0,
    }),
    getEnabledCompanies: builder.query<ICompany[], { analysis_type: string }>({
      query: ({ analysis_type }) => ({
        method: "GET",
        url: `company_names?analysis_type=${analysis_type}`,
      }),
      keepUnusedDataFor: 0,
    }),
    getChatHistory: builder.query<
      IChatResponse[],
      { feature_instance_id: number }
    >({
      query: ({ feature_instance_id }) => ({
        method: "GET",
        url: `chat_history/${feature_instance_id}`,
      }),
      keepUnusedDataFor: 0,
    }),
    addChat: builder.mutation<
      void,
      { feature_instance_id: number; answer: string; question: string }
    >({
      query: ({ feature_instance_id, question, answer }) => ({
        method: "POST",
        url: "chat_history",
        body: {
          feature_instance_id,
          answer,
          question,
        },
      }),
    }),
    getTaskExecutionResultStatus: builder.query<
      { state: string; status: string; result: any },
      { task_id: string }
    >({
      query: ({ task_id }) => ({
        method: "GET",
        url: `task/${task_id}`,
      }),
      keepUnusedDataFor: 0,
    }),
    getTaskExecutionTimeStatus: builder.query<
      IExecutionReportDetail,
      { task_id: string }
    >({
      query: ({ task_id }) => ({
        method: "GET",
        url: `admin/report_execution_time?task_id=${task_id}`,
      }),
      keepUnusedDataFor: 0,
    }),
    getFetchFileLogs: builder.query<IFetchFileResponse[], void>({
      query: () => ({
        method: "GET",
        url: "fetch_file_logs",
      }),
      keepUnusedDataFor: 0,
      providesTags: ["FetchFileLog"],
    }),
    updateFetchFileLog: builder.mutation<
      void,
      {
        id: number;
      }
    >({
      query: ({ id }) => ({
        url: `fetch_file_logs/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["FetchFileLog"],
    }),
    sendReportsViaEmails: builder.mutation<
      any,
      {
        base64str?: string;
        template: string;
        emails: string[];
        subject: string;
        file_name?: string;
      }
    >({
      async queryFn(
        { base64str, template, emails, file_name, subject = "Report" },
        _,
        __,
        apiBaseQuery
      ) {
        try {
          const formdata = new FormData();
          if (base64str) {
            formdata.append("file_content_base64", base64str);
          }
          if (file_name) {
            formdata.append("file_name", file_name);
          }
          formdata.append("html_template", template);
          formdata.append("subject", subject);
          emails.forEach((email) => {
            formdata.append("email_addresses", email);
          });

          const response: any = await apiBaseQuery({
            url: `send_email`,
            method: "POST",
            body: formdata,
          });
          console.log(response, "email: response");

          return {
            data: response.data,
          };
        } catch (e) {
          return handleCatchError(e, "sendReportsViaEmails");
        }
      },
    }),
  }),
});

export const {
  // instance management
  useCreateFeatureInstanceMutation,
  useUpdateFeatureInstanceMutation,
  useGetFeatureInstancesQuery,
  useGetFeatureInstanceQuery,
  useDeleteFeatureInstanceMutation,

  // upload and ingest files
  useIngestFilesMutation,

  // get file data
  useGetFilesDataQuery,
  useLazyGetFilesDataQuery,
  // compare documents
  useCompareDocumentsMutation,

  // feedback
  useUpdateFeedbackMutation,
  // chatbot
  useCustomQueryMutation,
  useBulkCustomQueryMutation,

  // fetch SEC filings or transcript files
  useFetchFilesMutation,
  // get SEC filings or transcript files
  useGetFilesQuery,
  // get edgars files
  useGetEdgarsQuery,

  // get transcripts
  useGetTranscriptsQuery,

  // insider transactions
  useGetTransactionsQuery,
  // sentiment analysis
  useGenerateSentimentAnalysisMutation,

  useCloneFeatureReportMutation,

  // create investment memo
  useGetSiteContentMutation,
  useGenerateInvestmentReportMutation,
  useReportSectionTemplateMutation,
  useCreateReportMutation,

  // get suggestions
  useGetSuggestionsQuery,

  // get ingested companies
  useGetEnabledCompaniesQuery,
  useLazyGetEnabledCompaniesQuery,
  // chat history
  useGetChatHistoryQuery,
  useAddChatMutation,

  //get fetched file logs
  useGetTaskExecutionResultStatusQuery,
  useLazyGetTaskExecutionResultStatusQuery,
  useGetTaskExecutionTimeStatusQuery,
  useLazyGetTaskExecutionTimeStatusQuery,
  useGetFetchFileLogsQuery,
  useLazyGetFetchFileLogsQuery,
  useUpdateFetchFileLogMutation,

  // send email
  useSendReportsViaEmailsMutation,
} = transcriptApi;
