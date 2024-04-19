import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
// import update from "immutability-helper";
// import { handleCatchError } from "./helper";
import { IVDR, IVDRDetail, IVDRList } from "../../pages/portal/vdr/interfaces";

export const vdrApi = createApi({
  reducerPath: "vdrApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["VDR"],
  endpoints: (builder) => ({
    getVDRs: builder.query<IVDRList[], void>({
      query: () => "vdrs",
      keepUnusedDataFor: 0,
    }),
    getVDR: builder.query<IVDRDetail, { vdrId: number }>({
      query: ({ vdrId }) => `vdrs/${vdrId}`,
      keepUnusedDataFor: 0,
    }),
    saveVDR: builder.mutation<IVDR, { vdrId?: number; data: Omit<IVDR, 'id'> }>({
      query: ({ vdrId, data }) => {
        return {
          url: vdrId ? `vdrs/${vdrId}` : "vdrs",
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
  }),
});

export const {
  useGetVDRQuery,
  useLazyGetVDRQuery,
  useGetVDRsQuery,
  useLazyGetVDRsQuery,
  useSaveVDRMutation,
  useDeleteSetupMutation,
} = vdrApi;
