import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { IResponseAnswer } from "../interfaces";
import { ITemplate } from "../../shared/models/interfaces";
import { REPORTS_DICT } from "../../shared/models/constants";
// import { groupBy } from "../../shared/utils/base";
import { handleCatchError } from "./helper";

export const reportApi = createApi({
  reducerPath: "reportApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["Report"],
  endpoints: (builder) => ({
    getReport: builder.query<
      any,
      {
        reportId: number;
      }
    >({
      query: ({ reportId }) => `reports/${reportId}`,
      keepUnusedDataFor: 0,
      providesTags: ["Report"],
    }),

    updateReport: builder.mutation<
      any,
      {
        reportId: number;
        content?: string;
        custom?: Record<string, any>;
        name?: string;
      }
    >({
      query: ({ reportId, content, custom, name }) => ({
        url: `reports/${reportId}`,
        method: "PUT",
        body: {
          content,
          custom,
          name,
        },
      }),
      invalidatesTags: ["Report"],
    }),

    saveReport: builder.mutation<
      any,
      {
        setupId: number;
        reportName: string;
        data: string;
        template?: string;
        reportType?: number;
      }
    >({
      query: ({ setupId, reportName, data, template, reportType = 1 }) => ({
        url: `reports`,
        method: "POST",
        body: {
          graph_id: setupId,
          report_name: reportName,
          data,
          ...(template ? { template } : { is_template_with_content: false }),
          report_type: reportType,
        },
      }),
      invalidatesTags: ["Report"],
    }),

    getAnswer: builder.query<
      IResponseAnswer,
      {
        report: string;
        companyCode: string;
        companyName: string;
        question?: string;
      }
    >({
      query: ({ report, companyCode, companyName, question }) =>
        `${report}?companycode=${companyCode}&companyname=${companyName}${question ? "&question=" + question : ""
        }`,
    }),

    getChatWithData: builder.mutation<
      any,
      { setupId: number; content: string; question: string; llm: string; }
    >({
      query: ({ setupId, question, llm, content = "" }) => ({
        url: `chatwithdata/${setupId}`,
        method: "POST",
        body: {
          question,
          data: content,
          llm,
        },
      }),
    }),

    createReportTemplate: builder.mutation<
      any,
      { setupId: number; queryType: string; llm: string; formatJson?: any }
    >({
      query: ({ setupId, queryType, llm, formatJson }) => ({
        url: `${queryType}/${setupId}?llm=${llm}`,
        method: "POST",
        ...(!!formatJson && {
          body: {
            format_json: formatJson,
          },
        }),
      }),
    }),

    generateReport: builder.mutation<
      any,
      { setupId: number; queryType: string; template?: string; data?: string }
    >({
      async queryFn(args, queryApi) {
        const { setupId, queryType, template, data } = args;
        let dataContent: string;
        try {
          if (!data) {
            const jsonResponse = await queryApi.dispatch(
              reportApi.endpoints.createReportTemplate.initiate({
                setupId,
                queryType,
                llm: "OpenAI",
              })
            );
            if ("error" in jsonResponse) {
              throw jsonResponse.error;
            }

            dataContent = JSON.stringify({
              answer: jsonResponse.data.answer,
              data: jsonResponse.data.data,
            });
          } else {
            dataContent = data;
          }
          const templateResponse = await queryApi.dispatch(
            reportApi.endpoints.saveReport.initiate({
              data: dataContent,
              setupId,
              reportName: queryType,
              ...(template && {
                template: `<h1>${REPORTS_DICT[queryType].label} Report</h1>${template}`,
              }),
            })
          );
          if ("error" in templateResponse) {
            throw templateResponse.error;
          }
          const generatedId: number = templateResponse.data.new_id;

          return {
            data: generatedId,
          };
        } catch (err) {
          return handleCatchError(err, "generateReport");
        }
      },
    }),
    reGenerateReport: builder.mutation<
      any,
      { reportId: number; setupId: number; queryType: string; template: string }
    >({
      async queryFn(args, queryApi, _, apiBaseQuery) {
        const { reportId, setupId, queryType, template } = args;
        try {
          const jsonResponse = await queryApi.dispatch(
            reportApi.endpoints.createReportTemplate.initiate({
              setupId,
              queryType,
              llm: "OpenAI",
            })
          );
          if ("error" in jsonResponse) {
            throw jsonResponse.error;
          }

          const templateResponse = await apiBaseQuery({
            url: `reports/${reportId}/regenerate`,
            method: "POST",
            body: {
              data: JSON.stringify({
                answer: jsonResponse.data.answer,
                data: jsonResponse.data.data,
              }),
              template: `
                  <h1>${REPORTS_DICT[queryType].label} Report</h1>
                  ${template}`,
            },
          });
          if (templateResponse.error) {
            throw templateResponse.error;
          } else {
            const filledTemplate: string = (templateResponse.data as any)
              .filled_template;

            return {
              data: filledTemplate,
            };
          }
        } catch (err) {
          return handleCatchError(err, "reGenerateReport");
        }
      },
    }),
    generateCustomReport: builder.mutation<
      string,
      { setupId: number; template: string; data: string }
    >({
      query: ({ setupId, template, data }) => ({
        url: `reports/custom`,
        method: "POST",
        body: {
          graph_id: setupId,
          data,
          template,
        },
      }),
    }),

    markReport: builder.mutation<any, { reportId: number }>({
      query: ({ reportId }) => ({
        url: `reports/${reportId}/marked`,
        method: "PUT",
      }),
      invalidatesTags: ["Report"],
    }),
    updateReportReviewStatus: builder.mutation<
      any,
      { reportId: number; review_status: number }
    >({
      query: ({ reportId, review_status }) => ({
        url: `reports/${reportId}/update_review_status`,
        method: "PUT",
        body: {
          review_status,
        },
      }),
      invalidatesTags: ["Report"],
    }),
    deleteReport: builder.mutation<any, { reportId: number; viewMode: string }>(
      {
        query: ({ reportId }) => ({
          url: `reports/${reportId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Report"],
      }
    ),
    getReportsByTenant: builder.query<any, { viewMode?: string }>({
      async queryFn({ viewMode }, __, ___, apiBaseQuery) {
        try {
          const reportsReponse = await apiBaseQuery({
            url: viewMode
              ? `reports_tenant?view_mode=${viewMode}`
              : "reports_tenant",
          });

          if (reportsReponse.error) {
            throw reportsReponse.error;
          }

          return {
            data: reportsReponse.data,
          };
        } catch (err) {
          return handleCatchError(err);
        }
      },
      keepUnusedDataFor: 0,
      providesTags: ["Report"],
    }),
    getReportsByUnit: builder.query<any, { unitId: number; reportType: number; viewMode?: string }>(
      {
        async queryFn({ unitId, reportType, viewMode = "active" }, __, ___, apiBaseQuery) {
          try {
            const reportsReponse = await apiBaseQuery({
              url: `reports/company/${unitId}?view_mode=${viewMode}&report_type=${reportType}`,
            });

            if (reportsReponse.error) {
              throw reportsReponse.error;
            }

            return {
              data: reportsReponse.data,
            };
          } catch (err) {
            return handleCatchError(err);
          }
        },
        keepUnusedDataFor: 0,
        providesTags: ["Report"],
      }
    ),
    getReportsBySetup: builder.query<
      any,
      { viewMode?: string; setupId?: number }
    >({
      async queryFn({ setupId, viewMode = "active" }, __, ___, apiBaseQuery) {
        try {
          const reportsReponse: any = await apiBaseQuery({
            url: `reports?view_mode=${viewMode}`,
          });

          if (reportsReponse.error) {
            throw reportsReponse.error;
          }

          return {
            data: reportsReponse.data.filter(
              (report: any) => report.graph_id === setupId
            ),
          };
        } catch (err) {
          return handleCatchError(err);
        }
      },
      keepUnusedDataFor: 0,
      providesTags: ["Report"],
    }),

    getCustomQuery: builder.mutation<
      string,
      { setupId: number; question: string; chatMode?: boolean }
    >({
      query: ({ setupId, question, chatMode }) => ({
        url: `customquery/${setupId}?chatmode=${chatMode}&llm=Anthropic`,
        method: "POST",
        body: { question },
      }),
      transformResponse: (response: any) => {
        const regex = /```[^`]+```/g;
        const finalResult: string = response.data.answer.replace(regex, "");
        return finalResult;
      },
    }),
    generateWarrantReport: builder.mutation<
      string,
      {
        setupId: number;
        question: string;
        reportName: string;
        chatMode?: boolean;
      }
    >({
      query: ({ setupId, reportName }) => ({
        url: `generate_report/${setupId}`,
        method: "POST",
        body: {
          data: JSON.stringify({
            answer: "",
            data: "",
          }),
          report_name: reportName,
          template: ``,
        },
      }),
      transformResponse: (response: any) => {
        return response.data.filled_template;
      },
    }),

    getChatHistory: builder.query<any, { reportId: number }>({
      query: ({ reportId }) => ({
        url: `chat_history_report/${reportId}`,
      }),
      keepUnusedDataFor: 0,
    }),
    addChat: builder.mutation<
      void,
      { reportId: number; answer: string; question: string }
    >({
      query: ({ reportId, question, answer }) => ({
        method: "POST",
        url: "chat_history_report",
        body: {
          report_id: reportId,
          answer,
          question,
        },
      }),
    }),
    executeReportBackground: builder.mutation<
      any,
      {
        unitName: string;
        setupId: number;
        analysisType: string;
        reportType: number;
        llm?: string;
        rating?: number;
        report: ITemplate;
      }
    >({
      query: ({ unitName, setupId, analysisType, reportType, llm, rating, report }) => ({
        url: `execute_report_background/${setupId}`,
        method: "POST",
        body: {
          analysis_type: analysisType,
          report_type: reportType,
          llm,
          rating,
          report,
          company_name: unitName,
        },
      }),
    }),
    getIngestedFiles: builder.query<any, { setupId: number; analysis_type?: string; }>({
      query: ({ setupId, analysis_type = 'financial_diligence' }) => ({
        url: `files/${setupId}?analysis_type=${analysis_type}`,
      }),
    }),
    getExecutionDetail: builder.query<any, { baseQeuryId: number; }>({
      query: ({ baseQeuryId }) => ({
        url: `reports/${baseQeuryId}/execution_detail`,
      }),
    }),
    deleteExecuting: builder.mutation<
      any,
      {
        taskId: string;
      }
    >({
      query: ({ taskId }) => ({
        url: `fetch_file_logs?task_id=${taskId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLazyGetAnswerQuery,
  useGetCustomQueryMutation,
  useCreateReportTemplateMutation,
  useGenerateReportMutation,
  useReGenerateReportMutation,
  useGenerateCustomReportMutation,
  useGetReportsByTenantQuery,
  useGetReportsByUnitQuery,
  useGetReportsBySetupQuery,
  useGetReportQuery,
  useLazyGetReportQuery,
  useDeleteReportMutation,
  useGetChatWithDataMutation,
  useGenerateWarrantReportMutation,
  useGetChatHistoryQuery,
  useAddChatMutation,
  useUpdateReportMutation,
  useMarkReportMutation,
  useUpdateReportReviewStatusMutation,
  useExecuteReportBackgroundMutation,
  useGetIngestedFilesQuery,
  useGetExecutionDetailQuery,
  useLazyGetExecutionDetailQuery,
  useSaveReportMutation,
  useDeleteExecutingMutation,
} = reportApi;
