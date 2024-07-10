/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
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