import { memo, useCallback, useState } from "react";
import { Box, Typography, Stack, TextField } from "@mui/material";
import OtpInput from "react-otp-input";
import { LeftArrowDecorator, RightArrowDecorator } from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";
// import { useRegisterUserMutation } from "@/redux/services/authAPI";

const RegisterOTPForm = memo(() => {
  // const [registerUser, { isLoading, data, isError }] =
  //   useRegisterUserMutation();
  const [phoneOTP, setPhoneOTP] = useState<string>("");
  const [emailOTP, setEmailOTP] = useState<string>("");

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement> | undefined) => {
      if (!e) return;
      e.preventDefault();
      // registerUser({
      //   email: form.email,
      //   tenantName: form.name,
      //   password: form.password,
      //   persona: form.persona,
      // });
    },
    []
  );

  // useEffect(() => {
  //   if (!isError && !!data) {
  //     toast.success(data.message);
  //   }
  // }, [isError, data]);

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
      <Box minWidth={440} mb={8}>
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
          <Typography variant="h5">Verify OTP</Typography>
          <LeftArrowDecorator />
        </Box>
        <form onSubmit={onSubmit}>
          <Stack spacing={4}>
            <Stack spacing={12} direction="row">
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom>
                  Mobile Number verification
                </Typography>
                <Typography variant="body2" gutterBottom color="grey">
                  Enter 4-digit code send to your phone number
                </Typography>
                <OtpInput
                  value={phoneOTP}
                  onChange={setPhoneOTP}
                  numInputs={4}
                  renderSeparator={<span>&nbsp;-&nbsp;</span>}
                  renderInput={(props) => (
                    <TextField {...props} sx={{ minWidth: 52 }} />
                  )}
                />
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom>
                  Email ID verification
                </Typography>
                <Typography variant="body2" gutterBottom color="grey">
                  Enter 4-digit code send to your email address
                </Typography>
                <OtpInput
                  value={emailOTP}
                  onChange={setEmailOTP}
                  numInputs={4}
                  renderSeparator={<span>&nbsp;-&nbsp;</span>}
                  renderInput={(props) => (
                    <TextField {...props} sx={{ minWidth: 52 }} />
                  )}
                />
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Typography
                variant="body1"
                gutterBottom
                textAlign="center"
                pt={4}
              >
                Didn't get OTP?
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="grey"
                textAlign="center"
              >
                The OTP will expire in 10 minutes
              </Typography>
            </Stack>
          </Stack>
          <Box textAlign="center">
            <NeutralButton
              type="submit"
              variant="contained"
              size="large"
              sxProps={{ mt: 6, mb: 1, minWidth: 448 }}
              // disabled={isLoading}
            >
              Verify OTP
            </NeutralButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
});

export default RegisterOTPForm;
