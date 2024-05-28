/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { LeftArrowDecorator, RightArrowDecorator } from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";
import {
  clearUserActivitiesAPI,
  currentUser,
  loginAPI,
} from "../../redux/features/authSlice";
import { useGetTenancyQuery } from "../../redux/services/userAPI";

const LoginForm = memo(() => {
  const navigate = useNavigate();

  const { data: tenancies, isLoading: isTenancyLoading } = useGetTenancyQuery();
  const { user, error, loading } = useSelector(currentUser);

  const dispatch = useDispatch();
  const [form, setForm] = useState<{
    email: string;
    password: string;
    tenancy: string;
  }>({
    email: "",
    password: "",
    tenancy: "",
  });

  const isLoggedIn = !!user;

  const onClear = useCallback(() => {
    dispatch(
      clearUserActivitiesAPI({
        email: form.email,
        tenancy: form.tenancy,
      }) as any
    );
  }, [dispatch, form.email, form.tenancy]);

  const onChangeValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await dispatch(loginAPI(form) as any);
    },
    [form, dispatch]
  );

  useEffect(() => {
    if (tenancies && tenancies.length) {
      setForm((prev) => ({ ...prev, tenancy: tenancies[0] }));
    }
  }, [tenancies]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  if (loading)
    return (
      <Box sx={{ width: "100%", p: 2, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box minWidth={440} mb={8}>
        <form onSubmit={onSubmit}>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "center",
              mb: 8,
            }}
          >
            <RightArrowDecorator />
            <Typography variant="h5">Login</Typography>
            <LeftArrowDecorator />
          </Box>
          <Stack spacing={6}>
            <TextField
              select
              label="Tenancy"
              name="tenancy"
              value={form.tenancy}
              onChange={onChangeValues}
              disabled={!tenancies || isTenancyLoading}
            >
              {(tenancies || []).map((tenancy, index) => (
                <MenuItem key={`tenancy-option-${index}`} value={tenancy}>
                  {tenancy}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              placeholder="Enter your email"
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={onChangeValues}
            />
            <Box textAlign="right">
              <TextField
                placeholder="Enter your password"
                label="Password"
                type="password"
                name="password"
                fullWidth
                value={form.password}
                onChange={onChangeValues}
              />
              <Typography variant="body2" mt={1}>
                <Box
                  component={Link}
                  to="/forgot_password"
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Forgot Password
                </Box>
              </Typography>
            </Box>
          </Stack>
          <NeutralButton
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            sxProps={{ mt: 6, mb: 1 }}
            disabled={!form.email || !form.password}
          >
            Login
          </NeutralButton>
        </form>
        <Box textAlign="center">
          <Typography variant="body2">
            Don&apos;t have an account?{" "}
            <Box
              component={Link}
              to="/register"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Create One
            </Box>
          </Typography>
        </Box>
      </Box>
      {error && (
        <Button
          size="small"
          sx={{ position: "absolute", top: 16, right: 16 }}
          onClick={onClear}
          disabled={!form.email}
        >
          Clear Activites
        </Button>
      )}
    </Box>
  );
});

export default LoginForm;
