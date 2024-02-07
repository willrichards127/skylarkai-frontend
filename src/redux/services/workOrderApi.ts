import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";

export const workOrderApi = createApi({
  reducerPath: "workOrderApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["Target Company"],
  endpoints: (builder) => ({
    getTargetCompanies: builder.query<
      { id: number; company_name: string; logo?: string; created_at: string }[],
      void
    >({
      query: () => "companies",
      providesTags: ["Target Company"],
    }),
    addTargetCompany: builder.mutation<
      void,
      { companyName: string; logo?: string }
    >({
      query: ({ companyName, logo = "" }) => ({
        url: "companies",
        method: "POST",
        body: {
          company_name: companyName,
          ...(!!logo && { logo }),
        },
      }),
      invalidatesTags: ["Target Company"],
    }),
    getWorkOrdersPerCompany: builder.query<any, { companyId: number }>({
      query: ({ companyId }) => `work_orders/${companyId}`,
      keepUnusedDataFor: 0,
    }),
    getWorkOrder: builder.query<any, { workOrderId: string }>({
      query: ({ workOrderId }) => `work_order/${workOrderId}`,
      keepUnusedDataFor: 0,
    }),
    addWorkOrder: builder.mutation<
      any,
      { companyId: string; workOrderName: string; tasks: any; }
    >({
      query: ({ companyId, workOrderName, tasks }) => ({
        url: `work_orders/${companyId}`,
        method: "POST",
        body: {
          work_order_name: workOrderName,
          tasks,
        },
      }),
    }),
    updateWorkOrder: builder.mutation<
      any,
      { workOrderId: string; tasks: any; status: number }
    >({
      query: ({ workOrderId, tasks, status }) => ({
        url: `work_order/${workOrderId}`,
        method: "PUT",
        body: {
          tasks,
          status,
        },
      }),
    }),
  }),
});

export const {
  useGetTargetCompaniesQuery,
  useAddTargetCompanyMutation,
  useGetWorkOrderQuery,
  useGetWorkOrdersPerCompanyQuery,
  useAddWorkOrderMutation,
  useUpdateWorkOrderMutation,
} = workOrderApi;
