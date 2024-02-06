/* eslint-disable @typescript-eslint/no-explicit-any */
import https from "https";
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { clearUserInfo, updateTokenAsync } from "../features/authSlice";

export const baseQuery = retry(
  async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL,
      prepareHeaders: (headers, api) => {
        const auth = (api.getState() as any).userAuthSlice;
        if (!auth.token) {
          // do action for logout
          return headers;
        }
        if (auth.token) {
          headers.set("Authorization", `Bearer ${auth.token}`);
        }
        return headers;
      },
    })(args, api, extraOptions);

    // if any error, need to logout
    // if (result.error) {
    // 	// getState().
    //   window.location.href = "/auth/login";
    // }
    return result;
  },
  {
    maxRetries: 0,
  }
);

export const axiosBaseQuery =
  (
    { baseUrl, token }: { baseUrl: string; token?: string } = {
      baseUrl: "",
    }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          ...(!!token && { Authorization: `Bearer ${token}` }),
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: import.meta.env.VITE_NODE_ENV === "production", // Disable SSL verification in development
        }),
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const axiosBaseQueryWithReauth =
  (
    { baseUrl, isGuarded }: { baseUrl: string; isGuarded: boolean } = {
      baseUrl: "",
      isGuarded: false,
    }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async (args, api, extraOptions) => {
    const auth = (api.getState() as any).userAuthSlice;
    const result: any = await axiosBaseQuery({
      baseUrl,
      ...(isGuarded && { token: auth.token }),
    })(args, api, extraOptions);

    if (result.error && result.error.status === 401 && isGuarded) {
      // try to get a new token
      const formdata = new FormData();
      formdata.append("username", auth.userInfo.email);
      formdata.append("password", auth.userInfo.password);
      const refreshTokenResult: any = await axiosBaseQuery({
        baseUrl,
      })(
        {
          url: "token",
          method: "POST",
          data: formdata,
        },
        api,
        extraOptions
      );
      if (refreshTokenResult.data.access_token) {
        // store the new token
        api.dispatch(updateTokenAsync(refreshTokenResult.data.access_token));
      } else {
        api.dispatch(clearUserInfo());
      }
    }
    return result;
  };
