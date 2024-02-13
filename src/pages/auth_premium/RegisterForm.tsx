/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  registerAPI,
  subscriptionAPI,
  currentUser,
} from "../../redux/features/authSlice";
import { Box, Typography, Stack, TextField, MenuItem } from "@mui/material";
import { LeftArrowDecorator, RightArrowDecorator } from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";
import { ISubscription } from "../../redux/interfaces";

const RegisterForm = memo(() => {
  const { loading, userInfo, subscriptions } = useSelector(currentUser);
  const dispatch = useDispatch();
  const [form, setForm] = useState<{
    email: string;
    username: string;
    phone?: string;
    password: string;
    subscription_id: number;
    company: string;
    company_website?: string;
  }>({
    email: "",
    username: "",
    phone: "",
    password: "",
    subscription_id: 2,
    company: "",
    company_website: "",
  });

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
    const fetchSubscriptions = async () => {
      await dispatch(subscriptionAPI() as any);
    };
    fetchSubscriptions();
  }, [dispatch]);

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
        {userInfo ? (
          <Typography variant="h6" textAlign="center" p={2} gutterBottom>
            We've sent a verification email. Please check your email.
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
                    select
                    disabled
                    label="Subscription Type"
                    name="subscription_id"
                    value={form.subscription_id}
                    onChange={onChangeValues}
                    sx={{ minWidth: 312 }}
                  >
                    {(subscriptions || []).map((ss: ISubscription) => (
                      <MenuItem
                        key={ss.subscription_id}
                        value={ss.subscription_id}
                      >
                        {ss.subscription_name}
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
