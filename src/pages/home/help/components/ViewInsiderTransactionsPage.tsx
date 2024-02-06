import { Box, Typography } from "@mui/material";
import { CircleLogo } from "../../../../components/Svgs";

export const ViewInsiderTransactionsPage = () => {
  return (
    <Box pb={4}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <CircleLogo />
        <Typography variant="h5">View Insider Transactions</Typography>
      </Box>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Quickstart Guide:
      </Typography>

      <p>
        <ol>
          <li style={{ paddingBottom: 12 }}>
            <b>Select a Company:</b> Choose the company you want to analyze
            insider transactions for.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Select Insider Transaction Documents:</b> Explore a range of
            insider transaction documents available on Skylark. Choose the
            documents that align with your analysis goals and requirements.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Engage with Interactive Chat Interface:</b> Utilize Skylark's
            interactive chat interface to engage in discussions and uncover key
            insights related to the selected company's insider transactions.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Generate Detailed FAQ Report:</b> After interacting with the chat
            and exploring insider transactions, generate a detailed Frequently
            Asked Questions (FAQ) report. This report should encapsulate
            comprehensive information for a thorough understanding.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Comprehensive Understanding:</b> Skylark aims to provide users
            with a comprehensive understanding of insider transactions. Leverage
            the insights gained from the interactive chat and FAQ report for a
            well-rounded analysis.
          </li>
        </ol>
      </p>
    </Box>
  );
};
