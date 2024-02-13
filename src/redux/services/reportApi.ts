import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { IResponseAnswer } from "../interfaces";
import { ISetup } from "../../shared/models/interfaces";
import { REPORTS_DICT } from "../../shared/models/constants";
import { groupBy } from "../../shared/utils/base";

const removeRegexes = [
  /Based on the available data,/i,
  /Based on the given information, the company overview is as follows:/i,
  /Based on the provided information,/,
  /Here is a professional and presentable markdown report for .+ using the provided data:/i,
  /Here is the generated professional report for .+ using the provided data:/i,
  /Generated today [^:]+/,
  /Here is the generated professional report for .+ using the provided data:/i,
  /Here is a professional and presentable markdown report for .+ based on the provided data:/i,
  /Based on the provided information, the company overview is as follows:/i,
  /Based on the data provided, here is an executive summary for a commercial due diligence report on .+:/i,
  /However, a comprehensive market analysis is not possible without additional financial and market data./i,
  /This report was prepared by \[Your Name\] on for .+?\.\s*/,
  /Here is the generated professional and presentable report for .+ using the provided data:/i,
  /This report provides a financial analysis for .+ based on the company's annual report data./i,
  /Here is the generated professional report for .+ based on the provided data:/i,
  /Prepared by: \[Your name\]/i,
  /This report was generated by AI assistant for .+ on . The data used for analysis was provided by the company./i,
  /Here is the generated professional report for .+ based on the provided data:/i,
  /Here is a draft executive summary for a [^:]+:/,
  /Here is a draft executive summary for a [^:]+:/,
  /Here is an executive summary for a [^:]+:/,
  /Unfortunately I do not have enough context to provide an executive summary for a full commercial due diligence report based on the limited data provided./,
  /Based on the provided data, here is an executive summary for a [^:]+:/,
  /This report was generated on for .+ based on provided data./,
  /Report generated on for .+ by \[your name\]/,
  /Unfortunately the data provided does not contain enough information to generate a full executive summary for a financial due diligence report. However, here is a high-level overview based on the analysis reports provided:/,
  /Here is a draft financial analysis report for STAF 7 using the provided data:/,
  /Prepared by: Financial Analyst Date:/,
  "*This report was prepared for STAF 7 on *",
];

export const reportApi: any = createApi({
  reducerPath: "reportApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["Report"],
  endpoints: (builder) => ({
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

    getReportTemplate: builder.query<
      any,
      {
        queryType?: string;
        question?: string;
        setupId: number;
      }
    >({
      query: ({ setupId, queryType, question }) =>
        queryType
          ? `${queryType}/${setupId}`
          : `customquery/${setupId}?question=${question}`,
    }),
    createReportTemplate: builder.mutation<
      any,
      { setupId: number; queryType: string; formatJson?: any }
    >({
      query: ({ setupId, queryType, formatJson }) => ({
        url: `${queryType}/${setupId}`,
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
      { setupId: number; queryType: string; template: string }
    >({
      async queryFn(args, __, ___, apiBaseQuery) {
        const { setupId, queryType, template } = args;
        const DDDict: Record<string, string[]> = {
          commercialduediligence: [
            "marketanalysis",
            "competitoranalysis",
            "customeranalysis",
            "productserviceanalysis",
            "regulatoryfinancialduediligence",
          ],
          financialduediligence: [
            "financials",
            "cashflow",
            "historicalfinancialperformance",
            "financials_ratio",
            "growth",
            "profitability",
            "projectionsandassumptions",
            "offbalancesheetitems",
            "taxation",
          ],
          qualityofearnsanalysis: [
            "nonrecurringrevenuestreams",
            "revenuerecognitionpolicies",
            "unusualexpenseitems",
            "earningmanipulationindicators",
            "adjustmentstoreportedearnings",
          ],
          workingcapitalanalysis: [
            "inventoryturnover",
            "dayssalesofinventory",
            // "customquery:Accounts Receivable & Collection Period",
            // "customquery:Accounts Payable & Payment Period",
            "cashconversioncycle",
            "seasonalvariationsinworkingcapital",
          ],
          esgduediligence: [
            "environmentalimpactassessment",
            "socialresponsibilitypractices",
            "corporategovernance",
            "ethicalsupplychainanalysis",
            "energyandcarbonfootprint",
          ],
        };
        try {
          if (DDDict[queryType]) {
            const reportsReponse: any = await apiBaseQuery({
              url: "reports",
            });
            console.log(reportsReponse, "reportsReponse---");
            const reportsForSetupId = reportsReponse.data.filter(
              (report: any) =>
                report.graph_id === setupId &&
                DDDict[queryType].includes(report.report_name)
            );

            const promises: Promise<unknown>[] = [];
            for (const { id } of reportsForSetupId) {
              const promise = new Promise((resolve) =>
                resolve(
                  apiBaseQuery({
                    url: `reports/${id}`,
                  })
                )
              );
              promises.push(promise);
            }

            const responses = await Promise.all(promises);
            const pairs: Record<string, any> = {};
            for (const query of DDDict[queryType]) {
              const matched: any = responses.find(
                (response: any) => response.data.report_name === query
              );
              if (matched) {
                pairs[query] = matched.data.report_data;
              }
            }

            const finalPromises: Promise<unknown>[] = [];
            for (const [query, { data, answer }] of Object.entries(pairs)) {
              const promise = new Promise((resolve) =>
                resolve(
                  apiBaseQuery({
                    url: `generate_report/${setupId}`,
                    method: "POST",
                    body: {
                      data: JSON.stringify({
                        answer,
                        data,
                      }),
                      report_name: query,
                      template: "",
                    },
                  })
                )
              );
              finalPromises.push(promise);
            }
            const finalResponses = await Promise.all(finalPromises);
            console.log(finalResponses, "finalResponses---");

            const finalResult = finalResponses.reduce((cv, pv: any) => {
              cv += pv.data.filled_template;
              return cv;
            }, "");

            console.log("finalResult: ", finalResult);
            const summaryReponse: any = await apiBaseQuery({
              url: `chatwithdata/${setupId}`,
              method: "POST",
              body: {
                data: finalResult,
                question: `Executive summary for ${REPORTS_DICT[queryType].label}.`,
              },
            });

            console.log("summaryReponse: ", summaryReponse);
            let reportFinal: string = "";
            reportFinal += `
              <h1>${REPORTS_DICT[queryType].label}</h1>
              <p>Created: ${new Date().toDateString()}</p>

              <h2>Company Overview</h2>
              <p>STAF 7 is a technology company headquartered in San Francisco. It was founded in 2010 and currently employs around 5000 people.
              The company generated $2.5 billion in revenue in 2020. In 2021, STAF 7's revenue grew to $3 billion.</p>
              <h2>Executive Summary</h2>
              ${summaryReponse.data.answer}
              ${finalResult}
            `;
            for (const removeRegex of removeRegexes) {
              reportFinal = reportFinal.replace(removeRegex, "");
            }
            return {
              data: reportFinal,
            };
          } else {
            const jsonResponse: any = await apiBaseQuery({
              // url: `${queryType}/${setupId}`,
              url: `${queryType}/${setupId}?llm=${"BOTH"}`,
              method: "POST",
            });
            console.log(jsonResponse, "jsonresponse for individual report ---");

            const templateResponse: any = await apiBaseQuery({
              url: `generate_report/${setupId}`,
              method: "POST",
              body: {
                data: JSON.stringify({
                  answer: jsonResponse.data.answer,
                  data: jsonResponse.data.data,
                }),
                report_name: queryType,
                execute_query: true,
                template: `
                  <h1>${REPORTS_DICT[queryType].label} Report</h1>
                  ${template}`,
              },
            });
            console.log(templateResponse, "templateResponse---");
            let reportFinal: string = templateResponse.data.filled_template;
            for (const removeRegex of removeRegexes) {
              reportFinal = reportFinal.replace(removeRegex, "");
            }
            console.log(reportFinal, "reportFinal---");
            return {
              data: reportFinal,
            };
          }
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in generateReport API",
            },
          };
        }
      },
    }),
    getReport: builder.mutation<
      any,
      {
        reportId: number;
        queryType: string;
        template: string;
        viewMode: string;
      }
    >({
      async queryFn(args, __, ___, apiBaseQuery) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { reportId, viewMode = "active", queryType, template } = args;

        try {
          const reportResponse: any = await apiBaseQuery({
            url: `reports/${reportId}?view_mode=${viewMode}`,
          });

          return {
            data: reportResponse.data,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in getCategories API",
            },
          };
        }
      },
    }),
    markReport: builder.mutation<any, { reportId: number }>({
      query: ({ reportId }) => ({
        url: `mark_as_active/${reportId}`,
        method: "POST",
      }),
      invalidatesTags: ["Report"],
    }),
    deleteReport: builder.mutation<any, { reportId: number; viewMode: string }>({
      query: ({ reportId, viewMode = 'active' }) => ({
        url: `reports/${reportId}?view_mode=${viewMode}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Report"],
    }),
    saveReport: builder.mutation<
      any,
      {
        reportId?: number;
        setupId: number;
        reportName: string;
        content: string;
        custom: Record<string, any>;
      }
    >({
      query: ({ reportId, setupId, reportName, content, custom }) => ({
        url: `save_report/${setupId}`,
        method: "POST",
        body: {
          ...(reportId && { report_id: reportId }),
          report_name: reportName,
          data: content,
          custom,
        },
      }),
      invalidatesTags: ["Report"],
    }),
    getReports: builder.query<any, { viewMode?: string }>({
      async queryFn({ viewMode = "active" }, __, ___, apiBaseQuery) {
        try {
          const setupsReponse: any = await apiBaseQuery({
            url: "graphs",
          });

          const reportsReponse: any = await apiBaseQuery({
            url: `reports?view_mode=${viewMode}`,
          });

          const updatedReports = reportsReponse.data.map((response: any) => ({
            ...response,
            ...(viewMode === "active" && {
              report_name: response.report_metadata.reportname,
            }),
            graph_name: setupsReponse.data.find(
              (setup: ISetup) => setup.id === response.graph_id
            )!.name,
          }));
          console.log(updatedReports, "updatedReports---");
          const groups = groupBy("graph_name")(updatedReports);

          return {
            data: groups,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in getReports API",
            },
          };
        }
      },
      keepUnusedDataFor: 0,
      providesTags: ["Report"],
    }),
    // getAllCreatedReports: builder.query<any, void>({
    // 	query: () => "reports",
    // }),
    getCustomQuery: builder.mutation<
      any,
      { setupId: number; question: string; chatMode?: boolean }
    >({
      async queryFn(args, __, ___, apiBaseQuery) {
        const { setupId, question, chatMode = false } = args;
        try {
          const response: any = await apiBaseQuery({
            url: `customquery/${setupId}?chatmode=${chatMode}&llm=Anthropic`,
            method: "POST",
            body: {
              question,
            },
          });
          console.log(response, "customquery response---");
          const regex = /```[^`]+```/g;
          const finalResult: string = response.data.answer.replace(regex, "");

          return {
            data: finalResult,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in getAllCreatedReports API",
            },
          };
        }
      },
    }),
    generateWarrantReport: builder.mutation<
      any,
      {
        setupId: number;
        question: string;
        reportName: string;
        chatMode?: boolean;
      }
    >({
      async queryFn(args, __, ___, apiBaseQuery) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { setupId, question, reportName, chatMode = false } = args;
        try {
          // const response: any = await apiBaseQuery({
          //   url: `customquery/${setupId}?chatmode=${true}&llm=Anthropic`,
          //   method: "POST",
          //   body: {
          //     question,
          //   },
          // });

          const reportResponse: any = await apiBaseQuery({
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
          });
          console.log(reportResponse, "reportResponse---");
          let reportFinal = "";
          for (const removeRegex of removeRegexes) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            reportFinal = reportResponse.data.filled_template.replace(
              removeRegex,
              ""
            );
          }
          return {
            data: reportResponse.data.filled_template,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in generateWarrantReport API",
            },
          };
        }
      },
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
    getChatHistory: builder.query<any, { setupId: number }>({
      async queryFn({ setupId }, __, ___, apiBaseQuery) {
        try {
          const response: any = await apiBaseQuery({
            url: `chat_history/${setupId}`,
          });

          if (!response.data.length) return { data: null };

          const updated = response.data
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

          return {
            data: groups,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in getAllCreatedReports API",
            },
          };
        }
      },
      keepUnusedDataFor: 0,
      providesTags: ["Report"],
    }),
  }),
});

export const {
  useLazyGetAnswerQuery,
  useGetReportTemplateQuery,
  useLazyGetReportTemplateQuery,
  useGetCustomQueryMutation,
  useCreateReportTemplateMutation,
  useGenerateReportMutation,
  useGetReportsQuery,
  useLazyGetReportsQuery,
  useGetReportMutation,
  useDeleteReportMutation,
  useGetChatWithDataMutation,
  useGenerateWarrantReportMutation,
  useGetChatHistoryQuery,
  useSaveReportMutation,
  useMarkReportMutation
} = reportApi;