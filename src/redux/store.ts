import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { userAuthSlice } from "./features/authSlice";
import { userApi } from "./services/userAPI";
import { adminApi } from "./services/adminAPI";
import { transcriptApi } from "./services/transcriptAPI";

import { authApi } from "./services/authAPI";
import { setupApi } from "./services/setupApi";
import { reportApi } from "./services/reportApi";
import { workOrderApi } from "./services/workOrderApi";

import { loadStoreValue } from "../shared/utils/storage";

// Global error handler
const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    console.warn("We got a rejected action!", action);
  }

  return next(action);
};

export const store = configureStore({
  preloadedState: {
    userAuthSlice: {
      user: loadStoreValue("user-info"),
      token: loadStoreValue("token"),
      sys_graph_id: loadStoreValue("sys_graph_id"),
    },
  },
  reducer: {
    [userAuthSlice.reducerPath]: userAuthSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [transcriptApi.reducerPath]: transcriptApi.reducer,
    [setupApi.reducerPath]: setupApi.reducer,
		[reportApi.reducerPath]: reportApi.reducer,
		[workOrderApi.reducerPath]: workOrderApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      userApi.middleware,
      adminApi.middleware,
      transcriptApi.middleware,
      authApi.middleware,
      setupApi.middleware,
			reportApi.middleware,
			workOrderApi.middleware,
      rtkQueryErrorLogger,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
