import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import { ICrunchbaseCompany } from "../../shared/models/interfaces";

export const factsetApi = createApi({
  reducerPath: "factsetApi",
  refetchOnFocus: true,
  baseQuery,
  tagTypes: ["Setup", "Unit"],
  endpoints: (builder) => ({
    getSuggestCompanies: builder.query<ICrunchbaseCompany[], { keyword: string }>({
      query: ({ keyword }) =>
        `crunchbase/suggest_org?keyword=${keyword}`,
    }),
    getDetailCompany: builder.query<any[], { entityId: string }>({
      query: ({ entityId }) =>
        `crunchbase/organization/${entityId}`,
    }),
    ingestFilesCrunchbase: builder.mutation<any, {
      setupId: number;
      analysisType: string;
      categories: string[];
      llm?: string;
      background?: boolean;
      extractTable?: boolean;
    }>({
      query: ({ setupId, analysisType, categories, llm = "Gemini", background, extractTable }) => {
        let url = `crunchbase/${setupId}?llm=${llm}`;

        if (background) {
          url += '&ingestinbackground=true';
        }

        if (extractTable) {
          url += '&tableextractiononly=true';
        }

        return {
          url: url,
          method: 'POST',
          body: {
            "analysis_type": analysisType,
            "categories": categories
          }
        }
      }
    })
  }),
});

export const {
  useGetSuggestCompaniesQuery,
  useLazyGetSuggestCompaniesQuery,
  useGetDetailCompanyQuery,
  useLazyGetDetailCompanyQuery,
  useIngestFilesCrunchbaseMutation,
} = factsetApi;
