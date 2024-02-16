/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { IUser, IUserAuth } from "../interfaces";
import { removeStoreValue, saveStoreValue } from "../../shared/utils/storage";

const initialState: IUserAuth = {
  user: undefined,
  token: undefined,
  loading: false,
  error: undefined,
};

export const registerAPI = createAsyncThunk(
  "users/register",
  async (userData: IUser) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PREMIUM_API_URL}register`,
        userData
      );
      return response.data;
    } catch (e) {
      return {
        error:
          (e as any)?.response?.data?.detail || "Failed to register this user.",
      };
    }
  }
);

export const loginAPI = createAsyncThunk(
  "users/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PREMIUM_API_URL}login`,
        {
          email,
          password,
        }
      );
      // get system graph id
      const responseSystemGraph = await axios.get(
        `${import.meta.env.VITE_PREMIUM_API_URL}system_graph_id`,
        {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return {
        ...response.data,
        sys_graph_id: responseSystemGraph.data,
        password,
      };
    } catch (e) {
      return {
        error:
          (e as any).response.data.detail ||
          "Incorrect email or password. Please retry with correct credentials.",
      };
    }
  }
);

export const subscriptionAPI = createAsyncThunk("subscriptions", async () => {
  const response = await axios(`${import.meta.env.VITE_PREMIUM_API_URL}subscriptions`);

  if (response.status !== 200) {
    return {
      error: "Failed to get subscriptions.",
    };
  }
  return response.data;
});

export const verifyEmailAPI = createAsyncThunk(
  "verify_registered_email",
  async ({ token }: { token: string }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PREMIUM_API_URL}verify_register_email?token=${token}`,
        {
          token,
        }
      );

      return response.data;
    } catch (e) {
      return {
        error:
          (e as any).response.data.detail || "Failed to verify your email.",
      };
    }
  }
);

const errorHandler = (state: any, action: string) => {
  state.userInfo = undefined;
  state.token = undefined;
  removeStoreValue("user-info");
  removeStoreValue("token");
  toast.error(action);
};

export const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = undefined;
      state.token = undefined;
      state.loading = false;
      state.error = undefined;
      removeStoreValue("user-info");
      removeStoreValue("token");
    },
    updateToken: (state, { payload }) => {
      state.token = payload;
      saveStoreValue("token", payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAPI.pending, (state) => {
      state.loading = true;
      state.user = undefined;
      state.token = undefined;
    }),
      builder.addCase(registerAPI.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.error) {
          errorHandler(state, payload.error);
          return;
        }
        state.user = payload;
      }),
      builder.addCase(loginAPI.pending, (state) => {
        state.loading = true;
        state.user = undefined;
        state.token = undefined;
      }),
      builder.addCase(loginAPI.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.error) {
          if (payload.error === "This user is already logged in.") {
            state.error = true;
          }
          errorHandler(state, payload.error);
          return;
        }
        if (!payload.is_active) {
          errorHandler(state, "This user registeration is under the review.");
          return;
        }
        state.user = payload;
        state.token = payload.token;
        state.sys_graph_id = payload.sys_graph_id;
        saveStoreValue("user-info", payload);
        saveStoreValue("token", payload.token);
        saveStoreValue("sys_graph_id", payload.sys_graph_id);
      }),      
      builder.addCase(verifyEmailAPI.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(verifyEmailAPI.fulfilled, (state) => {
        state.loading = false;
      });
  },
});
const { reset, updateToken } = userAuthSlice.actions;
export const clearUserInfo = () => (dispatch: any) => dispatch(reset());
export const updateTokenAsync = (newToken: string) => (dispatch: any) =>
  dispatch(updateToken(newToken));
export const currentUser = (state: any) => state.userAuthSlice as IUserAuth;
