import { memo, useState, useCallback, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, MenuItem, Typography, TextField, Stack } from "@mui/material";
import { LeftArrowDecorator, RightArrowDecorator } from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";
import { resetPasswordAPI } from "../../redux/features/authSlice";
import {
  useAddUserActivityMutation,
  useGetTenancyQuery,
} from "../../redux/services/userAPI";

const ResetPasswordForm = memo(() => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const [addActivity] = useAddUserActivityMutation();
  const { data: tenancies, isLoading: isTenancyLoading } = useGetTenancyQuery();
  const [form, setForm] = useState<{
    tenancy: string;
    new_pass: string;
    confirm_pass: string;
  }>({
    new_pass: "",
    confirm_pass: "",
    tenancy: "",
  });

  const onChangeValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const onSubmit = useCallback(() => {
    dispatch(
      resetPasswordAPI({
        token: token!,
        new_password: form.new_pass,
        tenancy: form.tenancy,
      }) as any
    );
    addActivity({ user_action_id: 2 });
    setForm({ new_pass: "", confirm_pass: "", tenancy: tenancies![0] });
  }, [form, token, tenancies, addActivity, dispatch]);

  useEffect(() => {
    if (tenancies && tenancies.length) {
      setForm((prev) => ({ ...prev, tenancy: tenancies[0] }));
    }
  }, [tenancies]);

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
      <Box width={400} mb={8}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <RightArrowDecorator />
          <Typography variant="h5">Reset Password</Typography>
          <LeftArrowDecorator />
        </Box>
        <Stack spacing={2}>
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
            fullWidth
            label="New Password"
            name="new_pass"
            type="password"
            value={form.new_pass}
            onChange={onChangeValues}
            disabled={!tenancies || isTenancyLoading}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirm_pass"
            type="password"
            value={form.confirm_pass}
            onChange={onChangeValues}
            disabled={!tenancies || isTenancyLoading}
          />
        </Stack>

        <NeutralButton
          fullWidth
          variant="contained"
          size="large"
          sxProps={{ mt: 6, mb: 1 }}
          disabled={
            !form.new_pass ||
            !form.confirm_pass ||
            form.new_pass !== form.confirm_pass ||
            isTenancyLoading ||
            !tenancies ||
            !token
          }
          onClick={onSubmit}
        >
          Confirm
        </NeutralButton>
        <Box textAlign="right">
          <Box
            component={Link}
            to="/login"
            sx={{
              fontSize: 13,
              color: "primary.main",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Go to Login
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default ResetPasswordForm;
