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
import FeaturePage from "./pages/home/features/feature";

const LandingPage = lazy(() => import("./pages/landing"));

const ForgotPasswordForm = lazy(
  () => import("./pages/auth/ForgotPasswordForm")
);
const ForgotPasswordOTPForm = lazy(
  () => import("./pages/auth/ForgotPasswordOTPForm")
);
const RegisterForm = lazy(() => import("./pages/auth/RegisterForm"));
const RegisterOTPForm = lazy(() => import("./pages/auth/RegisterOTPForm"));
const LoginForm = lazy(() => import("./pages/auth/LoginForm"));

// const WelcomePage = lazy(() => import("./pages/home/welcome"));
const HelpPage = lazy(() => import("./pages/home/help"));
const SupportPage = lazy(() => import("./pages/home/support"));
const FeaturesPage = lazy(() => import("./pages/home/features"));

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
              // {
              //   path: "/home/welcome",
              //   element: <WelcomePage />,
              // },
              {
                path: "/home/help",
                element: <HelpPage />,
              },
              {
                path: "/home/support",
                element: <SupportPage />,
              },
              {
                path: "/home/features",
                element: <FeaturesPage />,
              },
              {
                path: "/home/features/:featureId",
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
