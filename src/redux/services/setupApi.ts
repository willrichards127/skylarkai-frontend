import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { ISetup } from "../../shared/models/interfaces";
import update from "immutability-helper";
import { handleCatchError } from "./helper";

export const setupApi = createApi({
  reducerPath: "setupApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["Setup", "Unit"],
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
    getSetups: builder.query<ISetup[], { unitId: number; viewMode?: string }>({
      query: ({ unitId, viewMode = "active" }) =>
        `graphs/company/${unitId}?view_mode=${viewMode}`,
      keepUnusedDataFor: 0,
      providesTags: ["Setup"],
    }),
    getSetup: builder.query<ISetup, { setupId: number }>({
      query: ({ setupId }) => `graphs/${setupId}`,
    }),
    markSetup: builder.mutation<ISetup, { setupId: number }>({
      query: ({ setupId }) => ({
        url: `graphs/${setupId}/marked_as_active`,
        method: "POST",
      }),
    }),
    saveSetup: builder.mutation<
      ISetup,
      { unitId: number; setupId?: number; setup: ISetup }
    >({
      query: ({ unitId, setupId = undefined, setup }) => {
        let setupData = { ...setup };
        // Fix some data
        const fileUploadNodeIndex = setup.nodes.findIndex(
          (node) => node.template_node_id === 2
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

        const skylarkDBNodeIndex = setup.nodes.findIndex(
          (node) => node.template_node_id === 46
        );

        if (
          skylarkDBNodeIndex > -1 &&
          setup.nodes[skylarkDBNodeIndex].properties?.files
        ) {
          setupData = update(setupData, {
            nodes: {
              [skylarkDBNodeIndex]: { properties: { files: { $set: [] } } },
            },
          });
        }

        return {
          url: setupId ? `graphs/${setupId}` : `graphs/${unitId}`,
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
    generateJsonTemplate: builder.mutation<
      any,
      {
        setupId: number;
        file: File;
        llm: string;
      }
    >({
      query: ({ file, setupId, llm }) => {
        const formData = new FormData();
        formData.append("analysis_type", "template");

        formData.append("file", file);
        return {
          url: `generate_jsontemplate?graph_id=${setupId}&llm=${llm}`,
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
    getUnits: builder.query<any[], { type?: number; view_mode?: string }>({
      query: ({ type = 1, view_mode = "active" }) =>
        `target_companies?type=${type}&view_mode=${view_mode}`,
      keepUnusedDataFor: 0,
      providesTags: ["Unit"],
    }),
    getUnit: builder.query<any, { unitId: number }>({
      query: ({ unitId }) => `target_companies/${unitId}`,
      keepUnusedDataFor: 0,
      providesTags: ["Unit"],
    }),
    addUnit: builder.mutation<
      any,
      {
        name: string;
        logo_file?: File;
        type?: number;
        website?: string;
        description?: string;
      }
    >({
      async queryFn(
        { name, logo_file, website, description, type = 1 },
        _,
        __,
        apiBaseQuery
      ) {
        try {
          const formdata = new FormData();
          formdata.append("name", name);
          if (type) {
            formdata.append("type", type.toString());
          }
          if (website) {
            formdata.append("website", website);
          }
          if (description) {
            formdata.append("description", description);
          }
          if (logo_file) {
            formdata.append("logo_file", logo_file);
          }

          const response: any = await apiBaseQuery({
            url: "target_companies",
            method: "POST",
            body: formdata,
          });

          return {
            data: response.data,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              msg: "Error in Add Unit API",
            },
          } as any;
        }
      },
      invalidatesTags: ["Unit"],
    }),
    updateUnit: builder.mutation<
      any,
      {
        id: number;
        name?: string;
        logo_file?: File;
        type?: number;
        website?: string;
        is_active?: boolean;
        description?: string;
      }
    >({
      async queryFn(
        { id, name, logo_file, website, description, is_active, type = 1 },
        _,
        __,
        apiBaseQuery
      ) {
        try {
          const formdata = new FormData();
          if (name) {
            formdata.append("name", name);
          }
          if (type) {
            formdata.append("type", type.toString());
          }
          if (website) {
            formdata.append("website", website);
          }
          if (description) {
            formdata.append("description", description);
          }
          if (logo_file) {
            formdata.append("logo_file", logo_file);
          }
          if (is_active !== undefined && is_active !== null) {
            formdata.append("is_active", is_active.toString());
          }

          const response: any = await apiBaseQuery({
            url: `target_companies/${id}`,
            method: "PUT",
            body: formdata,
          });

          return {
            data: response.data,
          };
        } catch (e) {
          return {
            error: {
              status: 404,
              statusText: e,
              msg: "Error in Update Unit API",
            },
          } as any;
        }
      },
      invalidatesTags: ["Unit"],
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
  useMarkSetupMutation,
  useIngestFilesMutation,
  useUploadFilesMutation,

  useGetUnitsQuery,
  useGetUnitQuery,
  useAddUnitMutation,
  useUpdateUnitMutation,
  useGenerateJsonTemplateMutation,
} = setupApi;
