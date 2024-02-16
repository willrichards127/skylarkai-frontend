import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./pages/layouts/Layout";

export const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/login",
  children,
}: {
  isAllowed?: boolean;
  redirectPath?: string;
  children?: React.ReactNode;
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Layout><Outlet /></Layout>;
};
