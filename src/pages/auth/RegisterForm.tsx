/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerAPI, currentUser } from "../../redux/features/authSlice";
import {
  Box,
  Typography,
  Stack,
  TextField,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { LeftArrowDecorator, RightArrowDecorator } from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";
import { personaList } from "../../shared/models/constants";
import { useGetTenancyQuery } from "../../redux/services/userAPI";

const RegisterForm = memo(() => {
  const { loading, user } = useSelector(currentUser);
  const dispatch = useDispatch();
  const [form, setForm] = useState<{
    email: string;
    username: string;
    phone?: string;
    password: string;
    subscription_id?: number;
    company: string;
    company_website?: string;
    persona_id: number;
    tenancy: string;
  }>({
    email: "",
    username: "",
    phone: "",
    password: "",
    company: "",
    company_website: "",
    persona_id: 1,
    tenancy: "",
  });

  const { data: tenancies, isLoading: isTenancyLoading } = useGetTenancyQuery();

  const onChangeValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement> | undefined) => {
      if (!e) return;
      e.preventDefault();
      await dispatch(registerAPI(form) as any);
    },
    [dispatch, form]
  );

  useEffect(() => {
    if (tenancies && tenancies.length) {
      setForm((prev) => ({ ...prev, tenancy: tenancies[0] }));
    }
  }, [tenancies]);

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
      }}
    >
      <Box minWidth={640} mb={8}>
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
          <Typography variant="h5">Registration</Typography>
          <LeftArrowDecorator />
        </Box>
        {user ? (
          <Typography variant="h6" textAlign="center" p={2} gutterBottom>
            We will review your credentials and get you back soon.
          </Typography>
        ) : (
          <>
            <form onSubmit={onSubmit} autoComplete="off">
              <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChangeValues}
                    autoComplete="nope"
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter your mobile number"
                    label="Mobile Number"
                    type="phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChangeValues}
                    autoComplete="nope"
                  />
                </Stack>
                <Stack spacing={2} direction="row">
                  <TextField
                    fullWidth
                    placeholder="Enter your name"
                    label="Name"
                    name="username"
                    value={form.username}
                    onChange={onChangeValues}
                    autoComplete="new-password"
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter your password"
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChangeValues}
                    autoComplete="new-password"
                  />
                </Stack>
                <Stack spacing={2} direction="row">
                  <TextField
                    fullWidth
                    placeholder="Enter your company name"
                    label="Company Name"
                    name="company"
                    value={form.company}
                    onChange={onChangeValues}
                    autoComplete="nope"
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter your company website"
                    label="Company Website"
                    name="company_website"
                    value={form.company_website}
                    onChange={onChangeValues}
                    autoComplete="nope"
                  />
                </Stack>
                <Stack spacing={2} direction="row">
                  <TextField
                    fullWidth
                    select
                    label="Select Persona"
                    name="persona_id"
                    value={form.persona_id}
                    onChange={onChangeValues}
                  >
                    {personaList.map((persona) => (
                      <MenuItem key={persona.value} value={persona.value}>
                        {persona.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    select
                    label="Select Tenancy"
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
                </Stack>
              </Stack>
              <Box textAlign="center">
                <NeutralButton
                  type="submit"
                  variant="contained"
                  size="large"
                  sxProps={{ mt: 6, mb: 2, minWidth: 448 }}
                  disabled={loading}
                >
                  Register Now
                </NeutralButton>
              </Box>
            </form>
            <Box textAlign="center">
              <Typography variant="body2">
                Already have an account?{" "}
                <Box
                  component={Link}
                  to="/login"
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Box>
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
});

export default RegisterForm;
