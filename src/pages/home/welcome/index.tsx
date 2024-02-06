/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import welcomebg from "../../../assets/welcom-bg.png";

export default function WelcomePage() {
  const navigate = useNavigate();

  const onGotoPlayground = useCallback(() => {
    navigate("/home/features");
  }, [navigate]);

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ pt: 6, px: 8 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Skylark AI Premium
          </Typography>
          <Typography variant="body1" fontWeight={400} gutterBottom>
            Skylark makes integrating AI into your engineering and business
            processes seamless and efficient. Automate complex tasks, streamline
            workflows, and unlock the full potential of your operations with
            Skylark’s user-friendly AI solutions, tailored to meet your unique
            business needs.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <img
            src={welcomebg}
            alt="welcome-bg"
            style={{
              maxWidth: "100%",
              height: "480px",
              maxHeight: "540px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <Box>
            <Typography variant="h5" textAlign="center" gutterBottom>
              Integrate with the pre-built solutions immediately, or get in
              touch to get <br /> access to the rest of our offerings.
            </Typography>
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Button variant="contained" onClick={onGotoPlayground}>
                Go to Features
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
