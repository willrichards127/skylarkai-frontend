/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Tabs,
  Tab,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Logo } from "../../components/Svgs";
import { FeaturePremiumCard as FeatureCard } from "../../components/FeaturePremiumCard";
import secFilingImg from "../../assets/premium/sec_filing.png";
import investmentImg from "../../assets/premium/investment_memo.png";
import insiderTransactionImg from "../../assets/premium/insider_transactions.png";
import analyzeEarningImg from "../../assets/premium/analyze_earnings.png";
import compareDocImg from "../../assets/premium/compare.png";
import sentimentImg from "../../assets/premium/sentiment.png";
import bottomNavBg from "../../assets/global/bottom-nav-bg.png";
import { bottomNavHeight } from "../../shared/models/constants";
import { useGetSubScriptionFeaturesQuery } from "../../redux/services/adminApi";
import { Stack } from "@mui/system";

const featureImgDict: Record<string, string> = {
  "sec_filing": secFilingImg,
  "investment_memo": investmentImg,
  "insider_transactions": insiderTransactionImg,
  "analyze_earnings": analyzeEarningImg,
  "compare": compareDocImg,
  "sentiment": sentimentImg,
};

export default function LandingPage() {
  const navigate = useNavigate();

  const [tab, setTab] = useState<string>("Features");

  const { isLoading, data: features } = useGetSubScriptionFeaturesQuery({
    subscription_id: 2,
  });

  const onChangeTab = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      setTab(newValue);
    },
    []
  );

  const onCard = useCallback(() => {
    navigate(`/login`);
  }, [navigate]);

  return (
    <Box sx={{ bgcolor: "#202024" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 4,
          alignItems: "center",
        }}
      >
        <Logo />
        <Tabs value={tab} onChange={onChangeTab}>
          {["Platform", "Pricing", "Features"].map((category) => (
            <Tab
              key={category}
              value={category}
              label={category}
              sx={{
                "&.MuiButtonBase-root": {
                  color: "white",
                },
              }}
            />
          ))}
        </Tabs>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" sx={{ minWidth: 200 }}>
            Talk to Us
          </Button>
          <Button variant="contained" sx={{ minWidth: 200 }} onClick={onCard}>
            Login/Register
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Box py={4}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Skylark Analyst
          </Typography>
          <Typography variant="body1" textAlign="center" gutterBottom>
            Integrate with the following pre-built solutions immediately, or get
            in touch to get access to the rest of our offerings.
          </Typography>
          <Box
            sx={{
              pt: 10,
              px: 4,
              pb: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isLoading ? (
              <Box textAlign="center">
                <CircularProgress />
              </Box>
            ) : (
              <Grid
                container
                rowSpacing={{ xs: 2, sm: 4, md: 4 }}
                columnSpacing={{ xs: 2, sm: 4, md: 4 }}
                sx={{ px: 8 }}
              >
                {(features || []).map((feature) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={feature.id}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <FeatureCard
                      thumbnail={featureImgDict[feature.img_url]}
                      label={feature.feature}
                      onCard={onCard}
                      desc={feature.description}
                      size="lg"
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${bottomNavBg})`,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: bottomNavHeight,
          }}
        >
          <Box>
            <Typography variant="h4" lineHeight="48px">
              <b>Ready to dive deeper into Skylark? </b> <br />
              Register now to explore more about <br /> our platform.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            <Button variant="outlined" sx={{ minWidth: 200 }}>
              Contact Us
            </Button>
            <Button variant="contained" sx={{ minWidth: 200 }}>
              Book a Demo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
