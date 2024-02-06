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
    getUsers: builder.query<IUser[], void>({
      query: () => ({ url: "users", method: "GET" }),
      keepUnusedDataFor: 0,
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation<void, any>({
      query: (user) => ({
        url: `users/${user.user_id}`,
        method: "PUT",
        data: user,
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
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddUserActivityMutation,
  useClearUserActivitiesMutation,
} = userApi;
