import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { userAuthSlice } from "./features/authSlice";
// import { useNavigate } from "react-router-dom";

// Global error handler
export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    console.warn("We got a rejected action!", action);
  }

  return next(action);
};

export const checkForUnauthorized: Middleware =
  (store) => (next) => (action: any) => {
    const { reset } = userAuthSlice.actions;
    if (action.error && action.payload?.status === 401) {
      store.dispatch(reset());
    } else {
      return next(action);
    }
  };
