import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
// import update from "immutability-helper";
// import { handleCatchError } from "./helper";
import { IVDR, IVDRDetail } from "../../pages/portal/vdr/interfaces";

export const vdrApi = createApi({
  reducerPath: "vdrApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["VDR"],
  endpoints: (builder) => ({
    getVDRs: builder.query<IVDRDetail[], { unitId: number }>({
      query: ({ unitId }) => `vdrs/${unitId}`,
      keepUnusedDataFor: 0,
    }),
    getVDR: builder.query<IVDRDetail, { vdrId: number }>({
      query: ({ vdrId }) => `vdrs/${vdrId}`,
      keepUnusedDataFor: 0,
    }),
    saveVDR: builder.mutation<
      IVDR,
      { unitId: number; vdrId?: number; data: Omit<IVDR, "id"> }
    >({
      query: ({ unitId, vdrId, data }) => {
        return {
          url: vdrId ? `vdrs/${vdrId}` : `vdrs/${unitId}`,
          method: vdrId ? "PUT" : "POST",
          body: data,
        };
      },
    }),
    deleteSetup: builder.mutation<void, { vdrId: number }>({
      query: ({ vdrId }) => ({
        url: `vdrs/${vdrId}`,
        method: "DELETE",
      }),
    }),
    convertToGraph: builder.mutation<
      any,
      { vdrId: number; graphId: number; files: string[] }
    >({
      query: ({ vdrId, graphId, files }) => ({
        url: `copy-categorized-entries/${vdrId}/${graphId}`,
        method: "POST",
        body: {
          filenames: files,
          analysis_type_id_old: 3,
          analysis_type_id_new: 3,
        },
      }),
    }),
  }),
});

export const {
  useGetVDRQuery,
  useLazyGetVDRQuery,
  useGetVDRsQuery,
  useLazyGetVDRsQuery,
  useSaveVDRMutation,
  useDeleteSetupMutation,
  useConvertToGraphMutation,
} = vdrApi;
