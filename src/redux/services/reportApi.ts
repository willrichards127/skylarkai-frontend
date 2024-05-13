import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { IResponseAnswer } from "../interfaces";
import { ITemplate } from "../../shared/models/interfaces";
import { REPORTS_DICT } from "../../shared/models/constants";
import { groupBy } from "../../shared/utils/base";
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
        content: string;
        custom: Record<string, any>;
      }
    >({
      query: ({ reportId, content, custom }) => ({
        url: `reports/${reportId}`,
        method: "PUT",
        body: {
          data: content,
          custom,
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
      }
    >({
      query: ({ setupId, reportName, data, template }) => ({
        url: `reports`,
        method: "POST",
        body: {
          graph_id: setupId,
          report_name: reportName,
          data,
          ...(template ? { template } : { is_template_with_content: false }),
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
        `${report}?companycode=${companyCode}&companyname=${companyName}${
          question ? "&question=" + question : ""
        }`,
    }),

    getChatWithData: builder.mutation<
      any,
      { setupId: number; content: string; question: string }
    >({
      query: ({ setupId, question, content = "" }) => ({
        url: `chatwithdata/${setupId}`,
        method: "POST",
        body: {
          question,
          data: content,
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
    getReportsByUnit: builder.query<any, { unitId: number; viewMode?: string }>(
      {
        async queryFn({ unitId, viewMode = "active" }, __, ___, apiBaseQuery) {
          try {
            const reportsReponse = await apiBaseQuery({
              url: `reports/company/${unitId}?view_mode=${viewMode}`,
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

    getChatHistory: builder.query<any, { setupId: number }>({
      query: ({ setupId }) => ({
        url: `chat_history/${setupId}`,
      }),
      transformResponse: (response: any) => {
        if (!response.length) return null;

        const updated = response
          .sort(
            (a: any, b: any) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
          )
          .map((record: any) => ({
            ...record,
            created_at: record.created_at.split("T")[0],
          }));

        // group by date
        const groups = groupBy("created_at")(updated);

        return groups;
      },
      keepUnusedDataFor: 0,
      providesTags: ["Report"],
    }),

    executeReportBackground: builder.mutation<
      any,
      {
        unitName: string;
        setupId: number;
        analysisType: string;
        llm?: string;
        rating?: number;
        report: ITemplate;
      }
    >({
      query: ({ unitName, setupId, analysisType, llm, rating, report }) => ({
        url: `execute_report_background/${setupId}`,
        method: "POST",
        body: {
          analysis_type: analysisType,
          llm,
          rating,
          report,
          company_name: unitName,
        },
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
  useUpdateReportMutation,
  useMarkReportMutation,
  useUpdateReportReviewStatusMutation,
  useExecuteReportBackgroundMutation
} = reportApi;
