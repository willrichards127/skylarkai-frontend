/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { IUserAuth, IUserLogin, IUserRegister } from "../interfaces";
import { removeStoreValue, saveStoreValue } from "../../shared/utils/storage";

const initialState: IUserAuth = {
  user: undefined,
  token: undefined,
  loading: false,
  error: undefined,
};

export const registerAPI = createAsyncThunk(
  "users/register",
  async ({ tenancy, ...data }: IUserRegister) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}register`,
        data,
        {
          headers: {
            "X-TENANT-ID": tenancy,
          },
        }
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
  async ({ email, password, tenancy }: IUserLogin) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}login`,
        {
          email,
          password,
        },
        {
          headers: {
            "X-TENANT-ID": tenancy,
          },
        }
      );
      // get system graph id
      const responseSystemGraph = await axios.get(
        `${import.meta.env.VITE_API_URL}system_graph_id`,
        {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
            "Content-Type": "application/json",
            "X-TENANT-ID": tenancy,
          },
        }
      );
      return {
        ...response.data,
        tenancy: tenancy,
        sys_graph_id: responseSystemGraph.data,
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

export const clearUserActivitiesAPI = createAsyncThunk(
  "users/clear",
  async ({ email, tenancy }: { email: string; tenancy: string }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}user_activities/${email}`,
        {
          headers: {
            "X-TENANT-ID": tenancy,
          },
        }
      );
      if (response.data) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return {
        error:
          (e as any).response.data.detail ||
          "Incorrect email or password. Please retry with correct credentials.",
      };
    }
  }
);

export const forgotPasswordAPI = createAsyncThunk(
  "users/forgot_password",
  async ({ email, tenancy }: { email: string; tenancy: string }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}forgot_password?email=${email}`,
        undefined,
        {
          headers: {
            "X-TENANT-ID": tenancy,
          },
        }
      );
      if (response.data) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return {
        error: (e as any).response.data.detail || "Incorrect email.",
      };
    }
  }
);

export const resetPasswordAPI = createAsyncThunk(
  "users/reset_password",
  async ({
    token,
    new_password,
    tenancy,
  }: {
    token: string;
    new_password: string;
    tenancy: string;
  }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}reset_password`,
        {
          token,
          new_password,
        },
        {
          headers: {
            "X-TENANT-ID": tenancy,
          },
        }
      );
      if (response.data) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return {
        error: (e as any).response.data.detail || "Incorrect email.",
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
      state.tenancy = undefined;
      removeStoreValue("user-info");
      removeStoreValue("token");
      removeStoreValue("tenancy");
    },
    updateToken: (state, { payload }) => {
      state.token = payload;
      saveStoreValue("token", payload);
    },
    setTenancy: (state, { payload }) => {
      state.tenancy = payload;
      saveStoreValue("tenancy", payload);
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
        if (payload.status === 3) {
          errorHandler(state, "This user registeration is under the review.");
          return;
        }
        if (payload.status === 2) {
          errorHandler(state, "This user registeration is rejected.");
          return;
        }

        const { token, sys_graph_id, tenancy, ...restPayload } = payload;
        state.user = {
          ...restPayload,
          main_features: (restPayload.main_features || []).filter(
            (item: any) => item.id < 7 && item.id !== 2
          ), // remove 7, 8 features now
        };

        state.token = token;
        state.sys_graph_id = sys_graph_id;
        state.tenancy = tenancy;

        saveStoreValue("user-info", state.user);
        saveStoreValue("token", token);
        saveStoreValue("sys_graph_id", sys_graph_id);
        saveStoreValue("tenancy", tenancy);
      }),
      builder.addCase(
        forgotPasswordAPI.fulfilled,
        (state, { payload }: { payload: any }) => {
          if (payload.error) {
            errorHandler(state, payload.error);
            return;
          }
          toast.success("Sent a reset password link to your email.");
        }
      ),
      builder.addCase(
        resetPasswordAPI.fulfilled,
        (state, { payload }: { payload: any }) => {
          if (payload.error) {
            errorHandler(state, payload.error);
            return;
          }
          toast.success("Updated your password successfully.");
        }
      );
  },
});
const { reset, updateToken } = userAuthSlice.actions;
export const clearUserInfo = () => (dispatch: any) => dispatch(reset());
export const updateTokenAsync = (newToken: string) => (dispatch: any) =>
  dispatch(updateToken(newToken));
export const currentUser = (state: any) => state.userAuthSlice as IUserAuth;
