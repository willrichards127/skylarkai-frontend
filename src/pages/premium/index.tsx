import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import { currentUser } from "../../redux/features/authSlice";
import Layout from "../layouts/Layout";
import { FeatureCard } from "../../components/FeatureCard";
import { featureImgDict } from "../landing";
import { LeftNavbar } from "./components/sub-components/LeftNavbar";
import { useGetSubScriptionFeaturesQuery } from "../../redux/services/mainFeaturesAPI";

import { leftNavWidth } from "../../shared/models/constants";

export default function FeaturesPage() {
  const navigate = useNavigate();
  const { userInfo } = useSelector(currentUser);
  const { isLoading, data: features } = useGetSubScriptionFeaturesQuery({
    subscription_id: userInfo.subscription_id,
  });

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
        <LeftNavbar />
        <Box
          sx={{ width: `calc(100% - ${leftNavWidth}px)`, overflowY: "auto" }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Box pt={6} px={6}>
              <Typography variant="h4" textAlign="center" gutterBottom>
                Welcome to Skylark Analyst
              </Typography>
              <Typography
                variant="body1"
                color="grey"
                textAlign="center"
                gutterBottom
              >
                Skylark makes integrating AI into your engineering and business
                processes seamless and efficient. Automate complex tasks,
                streamline workflows, and unlock the full potential of your
                operations with Skylark’s user-friendly AI solutions, tailored
                to meet your unique business needs.
              </Typography>
              <Box
                sx={{
                  py: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Grid
                    container
                    rowSpacing={{ xs: 2, sm: 2, md: 2, lg: 4 }}
                    columnSpacing={{ xs: 2, sm: 2, md: 2 }}
                  >
                    {(features || []).map((feature) => (
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
                          desc={feature.description}
                          size="md"
                          bgcolor="#181818"
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
