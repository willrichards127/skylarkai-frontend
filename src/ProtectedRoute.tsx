import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRefreshTokenMutation } from "./redux/services/authAPI";
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
  const [refreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    if (!isAllowed) return;
    // refresh token every 1 hour
    const timer = setInterval(() => {
      refreshToken();
    }, 1000 * 60 * 60);

    return () => {
      clearInterval(timer);
    };
  }, [isAllowed, refreshToken]);

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? (
    children
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};
