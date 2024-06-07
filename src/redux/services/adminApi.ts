/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { IMainFeature } from "../interfaces";
import { handleCatchError } from "./helper";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getFeatures: builder.query<IMainFeature[], void>({
      query: () => ({ url: "main_features", method: "get" }),
    }),
    getSubScriptionFeatures: builder.query<
      IMainFeature[],
      { subscription_id: number }
    >({
      async queryFn({ subscription_id }, __, ___, apiBaseQuery) {
        try {
          const responseFeatures: any = await apiBaseQuery({
            url: "main_features",
            method: "get",
          });

          const responseSSFeatures: any = await apiBaseQuery({
            url: `subscription_features/${subscription_id}`,
            method: "get",
          });

          const featureIds = responseSSFeatures.data.map(
            (feature: { feature_id: number; subscription_id: number }) =>
              feature.feature_id
          );

          return {
            data: responseFeatures.data
              .filter((feature: { id: number }) =>
                featureIds.includes(feature.id)
              )
              .sort((a: { id: number }, b: { id: number }) => a.id - b.id),
          };
        } catch (e) {
          return handleCatchError(e)
        }
      },
    }),
    getDashboard: builder.query<{
      companies: number;
      sectors: number;
      reports: number;
      graphs: number;
      vdrs: number;
    }, void>({
      query: () => ({ url: `dashboard`, method: "get" }),
    }),
    getUnits: builder.query<any, { type?: number }>({
      query: ({ type }) => ({ url: `dashboard/unit${type ? `?type=${type}` : ""}`, method: "get" }),
    }),
    getReports: builder.query<any, void>({
      query: () => ({ url: `/dashboard/reports`, method: "get" }),
    }),
    getGraphs: builder.query<any, void>({
      query: () => ({ url: `/dashboard/graphs`, method: "get" }),
    }),
    getVDRs: builder.query<any, void>({
      query: () => ({ url: `/dashboard/vdrs`, method: "get" }),
    }),
  }),
});

export const {
  useGetFeaturesQuery,
  useGetSubScriptionFeaturesQuery,
  useGetDashboardQuery,
  useGetUnitsQuery,
  useLazyGetUnitsQuery,
  useGetReportsQuery,
  useLazyGetReportsQuery,
  useGetGraphsQuery,
  useLazyGetGraphsQuery,
  useGetVDRsQuery,
  useLazyGetVDRsQuery,
} = adminApi;
