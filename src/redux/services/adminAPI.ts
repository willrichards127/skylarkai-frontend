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
  }),
});

export const { useGetFeaturesQuery, useGetSubScriptionFeaturesQuery } =
  adminApi;
