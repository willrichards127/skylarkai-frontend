import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Box, Typography } from "@mui/material";
import { currentUser } from "../../redux/features/authSlice";
import Layout from "../layouts/Layout";
import { FeatureCard } from "./components/FeatureCard";

import {
  AnalyzeEarningsFeatureIcon,
  ChatFeatureIcon,
  CompareFeatureIcon,
  FinanceFeatureIcon,
  InsiderTransactionFeatureIcon,
  InvestmentFeatureIcon,
  SecFilingFeatureIcon,
  SentimentFeatureIcon,
} from "../../components/Svgs";

const featureImgDict: Record<string, FC> = {
  sec_filing: SecFilingFeatureIcon,
  investment_memo: InvestmentFeatureIcon,
  insider_transactions: InsiderTransactionFeatureIcon,
  analyze_earnings: AnalyzeEarningsFeatureIcon,
  compare: CompareFeatureIcon,
  sentiment: SentimentFeatureIcon,
  chat: ChatFeatureIcon,
  finance: FinanceFeatureIcon,
};

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useSelector(currentUser);

  const onCard = useCallback(
    (featureId: number) => {
      navigate(`/premium/${featureId}`);
    },
    [navigate]
  );

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          height: "100%",
        }}
      >
        <Box sx={{ width: `100%`, overflowY: "auto" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Box pt={6} px={6}>
              <Typography variant="h4" textAlign="center" gutterBottom>
                Welcome to Skylark AI - Enterprise
              </Typography>
              <Typography
                variant="body1"
                color="grey"
                textAlign="center"
                gutterBottom
                sx={{ maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}
              >
                Skylark makes integrating AI into your engineering and business
                processes seamless and efficient. Automate complex tasks,
                streamline workflows, and unlock the full potential of your
                operations with Skylark’s user-friendly AI solutions, tailored
                to meet your unique business needs
              </Typography>
              <Box
                sx={{
                  py: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid
                  container
                  rowSpacing={{ xs: 2, sm: 2, md: 2, lg: 4 }}
                  columnSpacing={{ xs: 2, sm: 2, md: 2 }}
                >
                  {(user?.main_features || []).map((feature) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      key={feature.id}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <FeatureCard
                        thumbnail={featureImgDict[feature.img_url]}
                        label={feature.feature}
                        onCard={() => onCard(+feature.id)}
                        size="md"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
