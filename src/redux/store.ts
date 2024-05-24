import { configureStore } from "@reduxjs/toolkit";
import { userAuthSlice } from "./features/authSlice";
import { userApi } from "./services/userAPI";
import { adminApi } from "./services/adminAPI";
import { transcriptApi } from "./services/transcriptAPI";

import { setupApi } from "./services/setupApi";
import { reportApi } from "./services/reportApi";
import { workOrderApi } from "./services/workOrderApi";
import { vdrApi } from "./services/vdrApi";

import { loadStoreValue } from "../shared/utils/storage";
import { checkForUnauthorized, rtkQueryErrorLogger } from "./middleware";

export const store = configureStore({
  preloadedState: {
    userAuthSlice: {
      user: loadStoreValue("user-info"),
      token: loadStoreValue("token"),
      sys_graph_id: loadStoreValue("sys_graph_id"),
      tenancy: loadStoreValue("tenancy")
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
    [vdrApi.reducerPath]: vdrApi.reducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      userApi.middleware,
      adminApi.middleware,
      transcriptApi.middleware,
      setupApi.middleware,
			reportApi.middleware,
			workOrderApi.middleware,
      vdrApi.middleware,
      rtkQueryErrorLogger,
      checkForUnauthorized,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
