import { setItem } from "../../shared/utils/localstorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_ENTERPRISE_API_URL,
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
				setItem("token", response.token);
				return response;
			},
		}),
	}),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
