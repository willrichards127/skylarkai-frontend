/* eslint-disable @typescript-eslint/no-explicit-any */
import https from "https";
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { loadStoreValue } from "../../shared/utils/storage";
import { RootState } from "../store";

export const baseQuery = retry(
  async (args, api, extraOptions) =>
    fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL,
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).userAuthSlice.token;
        const tenancy = (getState() as RootState).userAuthSlice.tenancy;

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }

        if (tenancy) {
          headers.set("X-TENANT-ID", tenancy);
        }
        return headers;
      },
    })(args, api, extraOptions),
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
    const token = loadStoreValue("token");
    const result: any = await axiosBaseQuery({
      baseUrl,
      ...(isGuarded && { token }),
    })(args, api, extraOptions);
    return result;
  };
