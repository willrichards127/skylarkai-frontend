import { memo, useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, MenuItem, Typography, TextField, Stack } from "@mui/material";
import { LeftArrowDecorator, RightArrowDecorator } from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";
import { forgotPasswordAPI } from "../../redux/features/authSlice";
import { useGetTenancyQuery } from "../../redux/services/userAPI";

const ForgotPasswordForm = memo(() => {
  const dispatch = useDispatch();
  const { data: tenancies, isLoading: isTenancyLoading } = useGetTenancyQuery();
  const [form, setForm] = useState<{ email: string; tenancy: string }>({
    email: "",
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
      forgotPasswordAPI({
        email: form.email,
        tenancy: form.tenancy,
      }) as any
    );
  }, [form, dispatch]);

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
          <Typography variant="h5">Forgot Password</Typography>
          <LeftArrowDecorator />
        </Box>
        <Typography variant="body2" textAlign="center" mb={6}>
          Enter your email so that you can access your account.
        </Typography>
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
            placeholder="Enter your email"
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChangeValues}
          />
        </Stack>

        <NeutralButton
          fullWidth
          variant="contained"
          size="large"
          sxProps={{ mt: 6, mb: 1 }}
          disabled={!form.email || !form.tenancy}
          onClick={onSubmit}
        >
          Submit
        </NeutralButton>
      </Box>
    </Box>
  );
});

export default ForgotPasswordForm;
