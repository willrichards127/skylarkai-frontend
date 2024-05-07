/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQueryWithReauth } from "./base";
import { IUser } from "../interfaces";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQueryWithReauth({
    baseUrl: import.meta.env.VITE_API_URL,
    isGuarded: true,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getPersonas: builder.query<any[], void>({
      query: () => ({ url: "personas", method: "GET" }),
    }),
    getTenants: builder.query<any[], void>({
      query: () => ({ url: "tenants", method: "GET" }),
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => ({ url: "users", method: "GET" }),
      keepUnusedDataFor: 0,
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation<
      void,
      { user_id: number; user_status: number }
    >({
      query: ({ user_id, user_status }) => ({
        url: `users/${user_id}/update_status`,
        method: "POST",
        data: {
          user_status,
        },
      }),
      invalidatesTags: ["Users"],
    }),
    addUserActivity: builder.mutation<void, { user_action_id: number }>({
      query: ({ user_action_id }) => ({
        url: "user_activities",
        method: "POST",
        data: {
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
  }),
});

export const {
  useGetPersonasQuery,
  useGetTenantsQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddUserActivityMutation,
  useClearUserActivitiesMutation,
} = userApi;
