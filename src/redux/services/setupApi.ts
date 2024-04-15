import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { ISetup } from "../../shared/models/interfaces";
import update from "immutability-helper";
import { handleCatchError } from "./helper";

export const setupApi = createApi({
  reducerPath: "setupApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["Setup"],
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      async queryFn(_, __, ___, apiBaseQuery) {
        try {
          const categoriesReponse = await apiBaseQuery({
            url: "categories",
          });

          if (categoriesReponse.error) {
            throw categoriesReponse.error;
          }
          const promises: Promise<unknown>[] = (
            categoriesReponse.data as any
          ).categories.map((category: string) =>
            apiBaseQuery({ url: `template_nodes?category_name=${category}` })
          );
          const responses = await Promise.all(promises);
          const categoryDict = responses.reduce(
            (cv: Record<string, any>, pv: any, index) => {
              cv[(categoriesReponse.data as any).categories[index]] =
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
          return handleCatchError(e);
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
      query: ({ setupId = undefined, setup }) => {
        let setupData = { ...setup };
        // Fix some data
        const fileUploadNodeIndex = setup.nodes.findIndex(
          (node) => node.template_node_id == 2
        );

        if (
          fileUploadNodeIndex > -1 &&
          setup.nodes[fileUploadNodeIndex].properties?.files
        ) {
          setupData = update(setupData, {
            nodes: {
              [fileUploadNodeIndex]: { properties: { files: { $set: [] } } },
            },
          });
        }

        return {
          url: setupId ? `graphs/${setupId}` : "graphs",
          method: setupId ? "PUT" : "POST",
          body: setupId
            ? {
                ...(setupId !== undefined && { graph_id: setupId }),
                ...setupData,
              }
            : setupData,
        };
      },
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
        background?: boolean;
        extractTable?: boolean;
        files: File[];
      }
    >({
      query: ({
        setupId,
        companyName,
        background = false,
        extractTable = false,
        analysisType,
        files,
      }) => {
        const formData = new FormData();
        formData.append("analysis_type", analysisType);
        for (const file of files) {
          formData.append("files", file);
        }
        return {
          url: `ingestfiles?graph_id=${setupId}&company_name=${companyName}&ingestinbackground=${background}&tableextractiononly=${extractTable}`,
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
      async queryFn({ setup, analysisType }, queryApi) {
        try {
          // save current graph
          let uploadFiles: File[] | undefined;

          const fileUploadNode = setup.nodes.find(
            (node) => node.template_node_id === 2
          );

          if (
            fileUploadNode &&
            fileUploadNode.template_node_id === 2 &&
            fileUploadNode.properties &&
            "files" in fileUploadNode.properties
          ) {
            uploadFiles = fileUploadNode.properties["files"];
          }
          const updateResponse = await queryApi.dispatch(
            setupApi.endpoints.saveSetup.initiate({ setupId: setup.id, setup })
          );

          if ("error" in updateResponse) {
            throw updateResponse.error;
          }

          const updatedSetup = updateResponse.data as ISetup;

          if (uploadFiles) {
            const updateIngestResponse = await queryApi.dispatch(
              setupApi.endpoints.ingestFiles.initiate({
                setupId: setup.id!,
                companyName: setup.name!,
                analysisType,
                files: uploadFiles,
              })
            );
            if ("error" in updateIngestResponse) {
              throw updateIngestResponse.error;
            }

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
          return handleCatchError(e);
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
} = setupApi;
