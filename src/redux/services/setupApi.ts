import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { ISetup } from "../../shared/models/interfaces";

export const setupApi = createApi({
  reducerPath: "setupApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["Setup"],
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      // queryFn(arg, queryApi, extraOptions, apiBaseQuery)
      async queryFn(_, __, ___, apiBaseQuery) {
        try {
          const categoriesReponse: any = await apiBaseQuery({
            url: "categories",
          });

          const promises: Promise<unknown>[] = [];
          for (const categoryName of categoriesReponse.data.categories) {
            const promise = new Promise((resolve) =>
              resolve(
                apiBaseQuery({
                  url: `template_nodes?category_name=${categoryName}`,
                })
              )
            );
            promises.push(promise);
          }

          const responses = await Promise.all(promises);
          const categoryDict = responses.reduce(
            (cv: Record<string, any>, pv: any, index) => {
              cv[categoriesReponse.data.categories[index]] =
                pv.data.template_nodes.map((node: any) => ({
                  template_node_id: node.id,
                  name: node.name,
                  description: node.description,
                  label: node.description,
                  category_id: node.category_id,
                  properties: node.properties,
                  attributes: node.attributes,
                }));
              return cv;
            },
            {}
          );
          return {
            data: categoryDict,
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
    getSetups: builder.query<ISetup[], void>({
      query: () => "graphs",
      keepUnusedDataFor: 0,
      providesTags: ["Setup"],
    }),
    getSetup: builder.query<ISetup, { setupId: number }>({
      query: ({ setupId }) => `graphs/${setupId}`,
      keepUnusedDataFor: 0,
    }),
    saveSetup: builder.mutation<ISetup, { setupId?: number; setup: ISetup }>({
      query: ({ setupId = undefined, setup }) => ({
        url: setupId ? `graphs/${setupId}` : "graphs",
        method: setupId ? "PUT" : "POST",
        body: setupId
          ? {
              ...(setupId !== undefined && { graph_id: setupId }),
              ...setup,
            }
          : setup,
      }),
    }),
    deleteSetup: builder.mutation<void, { setupId: string }>({
      query: ({ setupId }) => ({
        url: `graphs/${setupId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Setup"],
    }),
    ingestFiles: builder.mutation<
      any,
      {
        setupId: number;
        companyName: string;
        analysisType: string;
        files: File[];
      }
    >({
      query: ({ setupId, companyName, analysisType, files }) => {
        const formData = new FormData();
        formData.append("analysis_type", analysisType);
        for (const file of files) {
          formData.append("files", file);
        }
        return {
          url: `ingestfiles?graph_id=${setupId}&company_name=${companyName}`,
          method: "POST",
          body: formData,
        };
      },
    }),
    uploadFiles: builder.mutation<void, { setupId: number; files: any }>({
      query: ({ setupId, files }) => {
        return {
          url: `upload?graph_id=${setupId}`,
          method: "POST",
          body: files,
        };
      },
    }),
    executeGraph: builder.mutation<
      ISetup,
      { setup: ISetup; analysisType: string }
    >({
      async queryFn({ setup, analysisType }, __, ___, apiBaseQuery) {
        try {
          // save current graph
          let uploadFiles: File[] | undefined = undefined;
          
          const fileUploadNode = setup.nodes.find(
            (node) => node.template_node_id === 2
          );

          if(fileUploadNode && fileUploadNode.template_node_id === 2 && fileUploadNode.properties && "files" in fileUploadNode.properties) {
            uploadFiles = fileUploadNode.properties["files"];
            delete fileUploadNode.properties["files"];
          }

          const updateResponse = await apiBaseQuery({
            url: `graphs/${setup.id}`,
            method: "PUT",
            body: setup,
          });

          const updatedSetup = updateResponse.data as ISetup;

          // execute the graph
          // await apiBaseQuery({
          //   url: `graphs/${setup.id}/execute`,
          //   method: "POST",
          // });

          
          if (uploadFiles) {
            const formData = new FormData();
            formData.append("analysis_type", analysisType);
            for (const file of uploadFiles) {
              formData.append("files", file);
            }
            const updateIngestResponse = await apiBaseQuery({
              url: `ingestfiles?graph_id=${setup.id}&company_name=${setup.name}`,
              method: "POST",
              body: formData,
            });

            const skyDBNodeIndex = updatedSetup.nodes.findIndex(
              (node) => node.template_node_id === 46
            );
            if (skyDBNodeIndex > -1) {
              updatedSetup.nodes[skyDBNodeIndex].properties!.files = [
                ...(updatedSetup.nodes[skyDBNodeIndex].properties?.files || []),
                ...(updateIngestResponse.data as any),
              ];
            }
          }

          return { data: updatedSetup };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in executeGraph API",
            },
          };
        }
      },
    }),
    executeNode: builder.mutation<any, ISetup>({
      async queryFn(args, __, ___, apiBaseQuery) {
        const setup = args;

        try {
          // save current graph
          const updateResponse: any = await apiBaseQuery({
            url: `graphs/${setup.id}`,
            method: "PUT",
            body: setup,
          });

          const updatedOutputNodeId = updateResponse.data.nodes.find(
            (node: any) => node.attributes.graph_node_id === "Output_1"
          )!.id;

          const executeResponse: any = await apiBaseQuery({
            url: `graphs/${setup.id}/execute/${updatedOutputNodeId}`,
            method: "POST",
          });

          if (executeResponse.data) {
            const executionResponse: any = await apiBaseQuery({
              url: `graphs/${setup.id}/executions/${updatedOutputNodeId}`,
            });
            if (
              !!executionResponse.data.data &&
              typeof executionResponse.data.data === "object"
            ) {
              const result = Object.entries(executionResponse.data.data)
                .map(([key, value]) => `${key}\n${value}`)
                .join("\n");
              return {
                data: {
                  id: updateResponse.data.id,
                  name: updateResponse.data.name,
                  edges: updateResponse.data.edges,
                  nodes: updateResponse.data.nodes,
                  result,
                },
              };
            }
            const finalResult = executionResponse.data.data.includes(
              "CSV Output"
            )
              ? executionResponse.data.data.substring(
                  0,
                  executionResponse.data.data.indexOf("CSV Output:")
                )
              : executionResponse.data.data;
            console.log(finalResult, "finalResult---");
            let replaced = finalResult.replace("<investment_memo>", "");
            replaced = replaced.replace("</investment_memo>", "");
            return {
              data: {
                id: updateResponse.data.id,
                name: updateResponse.data.name,
                edges: updateResponse.data.edges,
                nodes: updateResponse.data.nodes,
                result: replaced,
              },
            };
          }
          return {
            data: "",
            message: "Failed to execute this node.",
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              data: "Error in executeNode API",
            },
          };
        }
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useSaveSetupMutation,
  useDeleteSetupMutation,
  useGetSetupsQuery,
  useGetSetupQuery,
  useLazyGetSetupQuery,
  useIngestFilesMutation,
  useUploadFilesMutation,
  useExecuteGraphMutation,
  useExecuteNodeMutation,
} = setupApi;
