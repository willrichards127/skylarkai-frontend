import { Box, Typography } from "@mui/material";
import { CircleLogo } from "../../../../components/Svgs";

export const CompareAnalyzeEarningCallsPage = () => {
  return (
    <Box pb={4}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <CircleLogo />
        <Typography variant="h5">
          Compare and Analyze Earning Calls Trends
        </Typography>
      </Box>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Quickstart Guide:
      </Typography>

      <p>
        <ol>
          <li style={{ paddingBottom: 12 }}>
            <b>Select a Company:</b> Choose a company for in-depth market
            research. Skylark's platform should offer a straightforward process
            for selecting companies.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Select Multiple Documents:</b> Choose multiple earnings call
            documents for the selected companies.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Use Split-Screen Feature for Chat and Analysis:</b> Leverage
            Skylark's split-screen feature to simultaneously engage in
            discussions through chat and dissect trends from the selected
            earnings call documents.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>View Annotated Comparison Report:</b> After conducting a
            comprehensive analysis, view an annotated comparison report that
            highlights trends and insights. Skylark's platform should provide
            clear visualizations for easy interpretation.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Conveniently Export the Report:</b> Skylark aims to provide
            convenience in exporting reports. Export the annotated comparison
            report in your preferred format for sharing or further analysis.
          </li>
        </ol>
      </p>
    </Box>
  );
};
