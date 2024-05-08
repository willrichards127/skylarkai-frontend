/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense, useCallback, useEffect, useMemo } from "react";
import {
  createBrowserRouter,
  Navigate,
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
// import OrdersPage from "./pages/portal/workorders/OrdersPage";
// import OrderDetailPage from "./pages/portal/workorders/OrderDetailPage";
// import CompaniesPage from "./pages/portal/workorders/CompaniesPage";
// import CompanyDetailPage from "./pages/portal/workorders/CompanyDetailPage";
import ProfilePage from "./pages/portal/profile/ProfilePage";
import DashboardPage from "./pages/dashboard";
import UnitsPage from "./pages/portal/units";
import UnitPage from "./pages/portal/units/unit";

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

  const redirectPath = useMemo(() => {
    if (!user || !token) {
      return "/login";
    } else {
      if (user.persona_id === 5) {
        // admin role: system, skylarkai admin
        return "/admin";
      } else if (user.persona_id === 1) {
        // analyst role
        return "/portal/units?type=companies";
      } else if (user.persona_id ===2) {
        // partner role
        return "/dashboard";
      }
      return "/welcome";
    }
  }, [user, token]);

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
          {path: "/",
            element: <Navigate to={redirectPath} />
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
                path: "/portal/units",
                element: <UnitsPage />,
              },
              {
                path: "/portal/units/:unitId",
                element: <UnitPage />,
                children: [
                  {
                    path: "reports",
                    element: <ReportsPage />,
                  },
                  {
                    path: "setups",
                    element: <SetupsPage />,
                  },
                  {
                    path: "vdrs",
                    element: <VDRsPage />,
                  },
                ],
              },
              {
                path: "/portal/reports/:reportId",
                element: <ReportDetailPage />,
              },
              {
                path: "/portal/setups/:setupId",
                element: <SetupDetailPage />,
              },
              {
                path: "/portal/vdrs/:vdrId",
                element: <VDRDetailPage />,
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
