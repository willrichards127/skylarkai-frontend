import { memo } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { LeftArrowDecorator, RightArrowDecorator } from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";

const ForgotPasswordForm = memo(() => {
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
        <TextField
          fullWidth
          placeholder="Enter your email"
          label="Email"
          type="email"
        />
        <NeutralButton
          fullWidth
          variant="contained"
          size="large"
          sxProps={{ mt: 6, mb: 1 }}
        >
          Submit
        </NeutralButton>
      </Box>
    </Box>
  );
});

export default ForgotPasswordForm;
