import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { saveStoreValue } from "../../shared/utils/storage";
import { updateTokenAsync } from "../features/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      {
        message: string;
        user_id: number;
        tenant_id: string;
        persona_id: number;
      },
      { email: string; password: string; tenantName: string; persona: number }
    >({
      query: ({ email, password, tenantName, persona }) => ({
        url: "register",
        method: "POST",
        body: {
          email,
          password,
          tenant_name: tenantName,
          persona_id: persona,
        },
      }),
    }),
    loginUser: builder.mutation<
      { token: string; user_id: number },
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      transformResponse: (response: { token: string; user_id: number }) => {
        saveStoreValue("token", response.token);
        return response;
      },
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
  useRegisterUserMutation,
  useLoginUserMutation,
  useRefreshTokenMutation,
} = authApi;
