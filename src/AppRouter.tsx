/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense, useCallback, useEffect } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";
import { ProtectedRoute } from "./ProtectedRoute";
import { currentUser } from "./redux/features/authSlice";
import { useAddUserActivityMutation } from "./redux/services/userAPI";
import FeaturePage from "./pages/premium/feature";
import ReportsPage from "./pages/portal/reports/ReportsPage";
import ReportDetailPage from "./pages/portal/reports/ReportDetailPage";
import VDRsPage from "./pages/portal/vdr/VDRsPage";
import VDRDetailPage from "./pages/portal/vdr/VDRDetailPage";
import SetupsPage from "./pages/portal/setups/SetupsPage";
import SetupDetailPage from "./pages/portal/setups/SetupDetailPage";
import OrdersPage from "./pages/portal/workorders/OrdersPage";
import OrderDetailPage from "./pages/portal/workorders/OrderDetailPage";
import CompaniesPage from "./pages/portal/workorders/CompaniesPage";
import CompanyDetailPage from "./pages/portal/workorders/CompanyDetailPage";
import ProfilePage from "./pages/portal/profile/ProfilePage";
import DashboardPage from "./pages/dashboard";

// const LandingPage = lazy(() => import("./pages/landing"));

const AdminPage = lazy(() => import("./pages/admin"));

const ForgotPasswordForm = lazy(
  () => import("./pages/auth/ForgotPasswordForm")
);
const ForgotPasswordOTPForm = lazy(
  () => import("./pages/auth/ForgotPasswordOTPForm")
);
const RegisterForm = lazy(() => import("./pages/auth/RegisterForm"));
const RegisterOTPForm = lazy(() => import("./pages/auth/RegisterOTPForm"));
const LoginForm = lazy(() => import("./pages/auth/LoginForm"));

const HelpPage = lazy(() => import("./pages/help"));
const SupportPage = lazy(() => import("./pages/support"));
const FeaturesPage = lazy(() => import("./pages/premium"));

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);
  return <>Error!</>;
};

function AppRouter() {
  const { user, token } = useSelector(currentUser);
  if (!user || !token) {
    redirect("/login");
  }

  const [addActivity] = useAddUserActivityMutation();

  const onCloseTab = useCallback(() => {
    addActivity({ user_action_id: 2 });
  }, [addActivity]);

  useEffect(() => {
    window.addEventListener("beforeunload", onCloseTab);
    return () => {
      window.removeEventListener("beforeunload", onCloseTab);
    };
  }, [onCloseTab]);

  return (
    <Suspense
      fallback={
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "*",
            element: <>No matched.</>,
          },
          {
            path: "/",
            element: <LoginForm />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/login",
            element: <LoginForm />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/register",
            element: <RegisterForm />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/register_otp",
            element: <RegisterOTPForm />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/forgot_password",
            element: <ForgotPasswordForm />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/forgot_password_otp",
            element: <ForgotPasswordOTPForm />,
            errorElement: <ErrorBoundary />,
          },
          {
            element: <ProtectedRoute isAllowed={!!token && !!user} />,
            errorElement: <ErrorBoundary />,
            children: [
              // admin only
              {
                path: "/admin",
                element: <AdminPage />,
              },
              {
                path: "/dashboard",
                element: <DashboardPage />,
              },
              {
                path: "/help",
                element: <HelpPage />,
              },
              {
                path: "/support",
                element: <SupportPage />,
              },
              {
                path: "/welcome",
                element: <FeaturesPage />,
              },
              {
                path: "/features/:featureId",
                element: <FeaturePage />,
              },
              // portal routing
              {
                path: "/portal/reports",
                element: <ReportsPage />,
              },
              {
                path: "/portal/reports/:reportId",
                element: <ReportDetailPage />,
              },
              {
                path: "/portal/setups",
                element: <SetupsPage />,
              },
              {
                path: "/portal/setups/:setupId",
                element: <SetupDetailPage />,
              },
              {
                path: "/portal/vdrs",
                element: <VDRsPage />,
              },
              {
                path: "/portal/vdrs/:vdrId",
                element: <VDRDetailPage />,
              },
              {
                path: "/portal/orders",
                element: <OrdersPage />,
              },
              {
                path: "/portal/companies",
                element: <CompaniesPage />,
              },
              {
                path: "/portal/companies/:companyId",
                element: <CompanyDetailPage />,
              },
              {
                path: "/portal/companies/:companyId/:orderId",
                element: <OrderDetailPage />,
              },
              {
                path: "/portal/profile",
                element: <ProfilePage />,
              },
            ],
          },
        ])}
      />
    </Suspense>
  );
}

export default AppRouter;
