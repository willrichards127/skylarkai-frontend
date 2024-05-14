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
    getVDRs: builder.query<
      IVDRDetail[],
      { unitId: number; view_mode?: string }
    >({
      query: ({ unitId, view_mode = "active" }) => `vdrs/company/${unitId}?view_mode=${view_mode}`,
      keepUnusedDataFor: 0,
      providesTags: ["VDR"],
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
      invalidatesTags: ["VDR"],
    }),
    deleteSetup: builder.mutation<void, { vdrId: number }>({
      query: ({ vdrId }) => ({
        url: `vdrs/${vdrId}`,
        method: "DELETE",
        invalidatesTags: ["VDR"],
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
