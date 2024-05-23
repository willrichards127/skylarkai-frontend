/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { helpNavWidth } from "../../shared/models/constants";
import { CircleLogo } from "../../components/Svgs";
import { NavItem } from "./components/NavItem";
import { IntroductionPage } from "./components/IntroductionPage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AskSECFilingsPage } from "./components/AskSECFilingsPage";
import { InvestmentmemoPage } from "./components/InvestmentmemoPage";
import { ViewInsiderTransactionsPage } from "./components/ViewInsiderTransactionsPage";
import { CompareAnalyzeEarningCallsPage } from "./components/CompareAnalyzeEarningCallsPage";
import { CompareDocumentsPage } from "./components/CompareDocumentsPage";
import { SentimentalAnalysisPage } from "./components/SentimentalAnalysisPage";

const menu = [
  {
    label: "Introduction",
    page: 1,
  },
  {
    label: "Ask SEC Filings",
    page: 2,
  },
  {
    label: "Create Investment Memo",
    page: 3,
  },
  {
    label: "View Insider Transactions",
    page: 4,
  },
  {
    label: "Compare and Analyze Earning Calls",
    page: 5,
  },
  {
    label: "Compare Documents",
    page: 6,
  },
  {
    label: "Investment Criteria Analysis",
    page: 7,
  },
];

export default function HelpPage() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const onClickItem = useCallback((pageNo: number) => {
    setSelectedPage(pageNo);
  }, []);

  const onPrev = useCallback(() => {
    setSelectedPage((prev) => (prev - 1 > 1 && prev - 1 < 6 ? 1 : prev - 1));
  }, []);

  const onNext = useCallback(() => {
    setSelectedPage((prev) => (prev + 1 > 1 && prev + 1 < 6 ? 6 : prev + 1));
  }, []);

  const prevButtonLabel = useMemo(() => {
    if (selectedPage > 1) {
      return menu.find(
        (item) =>
          item.page ===
          (selectedPage - 1 > 1 && selectedPage - 1 < 6 ? 1 : selectedPage - 1)
      )!.label;
    }
    return "";
  }, [selectedPage]);

  const nextButtonLabel = useMemo(() => {
    if (selectedPage < menu.length) {
      return menu.find(
        (item) =>
          item.page ===
          (selectedPage + 1 > 1 && selectedPage + 1 < 6 ? 6 : selectedPage + 1)
      )!.label;
    }
    return "";
  }, [selectedPage]);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Box
        sx={{
          width: helpNavWidth,
          p: 2,
          bgcolor: "#292943",
          overflowY: "auto",
        }}
      >
        <Box sx={{ bgcolor: "#202024", borderRadius: 2, p: 2 }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 3 }}>
            <CircleLogo width={37} height={35} />
            <Typography variant="h5" color="primary.main">
              Welcome To Skylark Enterprise
            </Typography>
          </Box>
          <Box pl={6}>
            {menu.map((option) => (
              <NavItem
                key={option.page}
                label={
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {option.label}
                  </Typography>
                }
                selected={selectedPage === option.page}
                onClick={() => onClickItem(option.page)}
                disabled={option.page > 1 && option.page < 6}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 1, p: 8, position: "relative", overflowY: "auto" }}>
        {selectedPage === 1 && <IntroductionPage />}
        {selectedPage === 2 && <AskSECFilingsPage />}
        {selectedPage === 3 && <InvestmentmemoPage />}
        {selectedPage === 4 && <ViewInsiderTransactionsPage />}
        {selectedPage === 5 && <CompareAnalyzeEarningCallsPage />}
        {selectedPage === 6 && <CompareDocumentsPage />}
        {selectedPage === 7 && <SentimentalAnalysisPage />}
        <Box
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            display: "flex",
            gap: 2,
          }}
        >
          {selectedPage > 1 && (
            <Button
              variant="contained"
              sx={{ minWidth: 220, bgcolor: "secondary.dark" }}
              onClick={onPrev}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <ArrowBackIosIcon sx={{ color: "grey" }} />
                <Box textAlign="right">
                  <Typography variant="body2" color="primary.main">
                    Previous
                  </Typography>
                  <Typography variant="body2" color="grey">
                    {prevButtonLabel}
                  </Typography>
                </Box>
              </Box>
            </Button>
          )}
          {selectedPage < menu.length && (
            <Button variant="contained" sx={{ minWidth: 220 }} onClick={onNext}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Box textAlign="left">
                  <Typography variant="body2" color="black">
                    Next
                  </Typography>
                  <Typography variant="body2" color="black">
                    {nextButtonLabel}
                  </Typography>
                </Box>
                <ArrowForwardIosIcon sx={{ color: "black" }} />
              </Box>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
