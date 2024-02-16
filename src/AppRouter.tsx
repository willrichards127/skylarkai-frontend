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
import SetupsPage from "./pages/portal/setups/SetupsPage";
import SetupDetailPage from "./pages/portal/setups/SetupDetailPage";
import OrdersPage from "./pages/portal/workorders/OrdersPage";
import OrderDetailPage from "./pages/portal/workorders/OrderDetailPage";
import CompaniesPage from "./pages/portal/workorders/CompaniesPage";
import CompanyDetailPage from "./pages/portal/workorders/CompanyDetailPage";
import ProfilePage from "./pages/portal/profile/ProfilePage";
import HomePage from "./pages/portal";

// const LandingPage = lazy(() => import("./pages/landing"));

const AdminPage = lazy(() => import("./pages/admin"));

const ForgotPasswordForm = lazy(
  () => import("./pages/auth/ForgotPasswordForm")
);
const ForgotPasswordOTPForm = lazy(
  () => import("./pages/auth/ForgotPasswordOTPForm")
);
const RegisterForm = lazy(() => import("./pages/auth/RegisterForm"));
const RegisterOTPForm = lazy(
  () => import("./pages/auth/RegisterOTPForm")
);
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
          // portal routing
          {
            path: "/main/reports",
            element: <ReportsPage />,
          },
          {
            path: "/main/reports/:reportId",
            element: <ReportDetailPage />,
          },
          {
            path: "/main/setups",
            element: <SetupsPage />,
          },
          {
            path: "/main/setups/:setupId",
            element: <SetupDetailPage />,
          },
          {
            path: "/main/orders",
            element: <OrdersPage />,
          },
          {
            path: "/main/companies",
            element: <CompaniesPage />,
          },
          {
            path: "/main/companies/:companyId",
            element: <CompanyDetailPage />,
          },
          {
            path: "/main/companies/:companyId/:orderId",
            element: <OrderDetailPage />,
          },
          {
            path: "/main/profile",
            element: <ProfilePage />,
          },
          {
            path: "/portal",
            element: <HomePage />,
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
                path: "/help",
                element: <HelpPage />,
              },
              {
                path: "/support",
                element: <SupportPage />,
              },
              {
                path: "/premium",
                element: <FeaturesPage />,
              },
              {
                path: "/premium/:featureId",
                element: <FeaturePage />,
              },
            ],
          },
        ])}
      />
    </Suspense>
  );
}

export default AppRouter;
