/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense, useCallback, useEffect } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
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

const LandingPage = lazy(() => import("./pages/landing"));

const ForgotPasswordForm = lazy(
  () => import("./pages/auth_premium/ForgotPasswordForm")
);
const ForgotPasswordOTPForm = lazy(
  () => import("./pages/auth_premium/ForgotPasswordOTPForm")
);
const RegisterForm = lazy(() => import("./pages/auth_premium/RegisterForm"));
const RegisterOTPForm = lazy(() => import("./pages/auth_premium/RegisterOTPForm"));
const LoginForm = lazy(() => import("./pages/auth_premium/LoginForm"));
const LoginFormEnterprise = lazy(() => import("./pages/auth_enterprise/LoginForm"));

const HelpPage = lazy(() => import("./pages/help"));
const SupportPage = lazy(() => import("./pages/support"));
const FeaturesPage = lazy(() => import("./pages/premium"));

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);
  return <>Error!</>;
};

function AppRouter() {
  const { userInfo: user, token } = useSelector(currentUser);
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
        <Box
          sx={{
            p: 4,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
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
            element: <LandingPage />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/login",
            element: <LoginForm />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/login-enterprise",
            element: <LoginFormEnterprise />,
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
            element: <ReportsPage />
          },
          {
            path: "/main/reports/:reportId",
            element: <ReportDetailPage />
          },
          {
            path: "/main/setups",
            element: <SetupsPage />
          },
          {
            path: "/main/setups/:setupId",
            element: <SetupDetailPage />
          },
          {
            path: "/main/orders",
            element: <OrdersPage />
          },
          {
            path: "/main/companies",
            element: <CompaniesPage />
          },
          {
            path: "/main/companies/:companyId",
            element: <CompanyDetailPage />
          },
          {
            path: "/main/companies/:companyId/:orderId",
            element: <OrderDetailPage />
          },
          {
            path: "/main/profile",
            element: <ProfilePage />
          },
          {
            element: <ProtectedRoute isAllowed={!!token && !!user} />,
            errorElement: <ErrorBoundary />,
            children: [
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
