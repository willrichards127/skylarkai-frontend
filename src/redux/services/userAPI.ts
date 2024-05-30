/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchBaseQueryError, createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { IUser } from "../interfaces";
import { updateTokenAsync } from "../features/authSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getTenancy: builder.query<string[], void>({
      query: () => ({ url: "subscriber_names", method: "GET" }),
    }),
    getPersonas: builder.query<any[], void>({
      query: () => ({ url: "personas", method: "GET" }),
    }),
    getTenants: builder.query<any[], void>({
      query: () => ({ url: "tenants", method: "GET" }),
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation<void, { id: number; user_status: number }>({
      query: ({ id, user_status }) => ({
        url: `users/${id}/update_status`,
        method: "POST",
        body: {
          user_status,
        },
      }),
      invalidatesTags: ["Users"],
    }),
    addUserActivity: builder.mutation<void, { user_action_id: number }>({
      query: ({ user_action_id }) => ({
        url: "user_activities",
        method: "POST",
        body: {
          user_action_id,
        },
      }),
    }),
    clearUserActivities: builder.mutation<void, { email: string }>({
      query: ({ email }) => ({
        url: `user_activities/${email}`,
        method: "DELETE",
      }),
    }),
    refreshToken: builder.mutation<any, void>({
      async queryFn(_, api, __, apiBaseQuery) {
        try {
          const { token } = (api.getState() as any).userAuthSlice;
          const response = await apiBaseQuery({
            method: "POST",
            url: `refresh?token=${token}`,
          });
          const newToken = (response.data as any).access_token;
          api.dispatch(updateTokenAsync(newToken));
          return {
            data: { message: "Refreshed token successfully." },
          };
        } catch (e) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: "Error in refresh token",
              data: e,
            } as FetchBaseQueryError,
          };
        }
      },
    }),
  }),
});

export const {
  useGetTenancyQuery,
  useGetPersonasQuery,
  useGetTenantsQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddUserActivityMutation,
  useClearUserActivitiesMutation,
  useRefreshTokenMutation,
} = userApi;
