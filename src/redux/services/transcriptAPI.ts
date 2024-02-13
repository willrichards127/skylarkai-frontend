/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQueryWithReauth } from "./base";
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
} from "../interfaces";
import { parseTransaction } from "../../shared/utils/string";

export const transcriptApi = createApi({
  reducerPath: "transcriptApi",
  baseQuery: axiosBaseQueryWithReauth({
    baseUrl: import.meta.env.VITE_PREMIUM_API_URL,
    isGuarded: true,
  }),
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
        data: {
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in fetch_edgar/fetch_transcript API",
            },
          };
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
            url: `${
              analysis_type === "edgar"
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in edgar_files/transcript_files/insider_transaction API",
            },
          };
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in edgar_files API",
            },
          };
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in transcript_files API",
            },
          };
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
          const responseTransactions: any = await apiBaseQuery({
            url: `insider_transaction/${graph_id}?company_name=${company_name}&ticker=${ticker}`,
            method: "get",
          });

          return {
            data: responseTransactions.data
              .map((record: any) => parseTransaction(record))
              .sort(
                (a: any, b: any) =>
                  new Date(b.reported_date).getTime() -
                  new Date(a.reported_date).getTime()
              ),
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in insider_transaction API",
            },
          };
        }
      },
    }),
    customQuery: builder.mutation<
      IChat,
      {
        question: string;
        filenames: string[];
        analysis_type?: string;
        llm?: string;
        chatmode?: boolean;
        insider_transaction?: boolean;
      }
    >({
      async queryFn(
        {
          question,
          filenames,
          analysis_type = "transcript",
          chatmode = false,
          llm = "OpenAI",
          insider_transaction = false,
        },
        api,
        __,
        apiBaseQuery
      ) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: `customquery/${graph_id}?${
              insider_transaction
                ? "&insider_transaction=" + insider_transaction
                : ""
            }`,
            method: "POST",
            data: {
              question,
              filenames,
              analysis_type,
              chatmode,
              llm,
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in customquery API",
            },
          };
        }
      },
    }),
    generateSentimentAnalysis: builder.mutation<
      IChat,
      {
        sentiments: string[];
        filenames: string[];
      }
    >({
      async queryFn({ sentiments, filenames }, api, __, apiBaseQuery) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: `sentimentanalysis/${graph_id}?llm=${"Anthropic"}`,
            method: "POST",
            data: {
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in sentimentanalysis API",
            },
          };
        }
      },
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
              .map((response) => (response.data as any)[0].text_content)
          );
          return {
            data: merged,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in file_data API",
            },
          };
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
          llm = "OpenAI",
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
            data: {
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in compare_document API",
            },
          };
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
            data: formdata,
          });

          return {
            data: response.data,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in ingestfiles API",
            },
          };
        }
      },
    }),
    getSiteContent: builder.mutation<any, { website_url: string }>({
      query: ({ website_url }) => ({
        url: "crawler",
        method: "POST",
        data: {
          url: "https://" + website_url,
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
          llm = "OpenAI",
        },
        api,
        __,
        apiBaseQuery
      ) {
        const graph_id = (api.getState() as any).userAuthSlice.sys_graph_id;
        try {
          const response: any = await apiBaseQuery({
            url: `generate_report/${graph_id}`,
            method: "POST",
            data: {
              execute_query,
              report_name,
              template,
              data,
              is_file_with_content,
              is_template_with_content,
              llm,
            },
          });

          return {
            data: response.data.filled_template,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in sentimentanalysis API",
            },
          };
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
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in analysis_type_queries API",
            },
          };
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
        data: {
          feature_instance_id,
          answer,
          question,
        },
      }),
    }),
    getTaskStatus: builder.query<
      { status: string; file_names?: string[] },
      { task_id: string }
    >({
      query: ({ task_id }) => ({
        method: "GET",
        url: `task/${task_id}`,
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

  // chatbot
  useCustomQueryMutation,

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

  // create investment memo
  useGetSiteContentMutation,
  useGenerateInvestmentReportMutation,

  // get suggestions
  useGetSuggestionsQuery,

  // get ingested companies
  useGetEnabledCompaniesQuery,
  useLazyGetEnabledCompaniesQuery,
  // chat history
  useGetChatHistoryQuery,
  useAddChatMutation,

  //get fetched file logs
  useGetTaskStatusQuery,
  useLazyGetTaskStatusQuery,
  useGetFetchFileLogsQuery,
  useLazyGetFetchFileLogsQuery,
  useUpdateFetchFileLogMutation,
} = transcriptApi;
