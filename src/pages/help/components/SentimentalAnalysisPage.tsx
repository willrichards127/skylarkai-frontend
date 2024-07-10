import { Box, Typography } from "@mui/material";
import { CircleLogo } from "../../../components/Svgs";

export const SentimentalAnalysisPage = () => {
  return (
    <Box pb={4}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <CircleLogo />
        <Typography variant="h5">Investment Criteria Analysis</Typography>
      </Box>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Quickstart Guide:
      </Typography>

      <p>
        <ol>
          <li style={{ paddingBottom: 12 }}>
            <b>Select Multiple Documents:</b> Choose multiple earnings call
            documents for the selected companies.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Choose Pre-defined Criteria:</b> Skylark utilizes advanced
            Language Models (LLMs) to analyze and compare documents. Upon
            uploading, the system automatically activates these models to
            highlight key differences and similarities in the selected
            documents.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Review Comparison Highlights:</b> Skylark's Comparison Tool will
            generate real-time highlights, showcasing significant differences
            and similarities found in the uploaded documents. Review these
            highlights for a quick overview.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Generate Comprehensive Report:</b> After the comparison process,
            Skylark AI allows you to generate a comprehensive report. This
            report consolidates the identified differences and similarities,
            providing a detailed analysis.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Summarize Comparison Insights:</b> Skylark AI's system summarizes
            the comparison insights in an easily digestible format. The platform
            uses its AI capabilities to extract key information, making it
            convenient for users to grasp the main points.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Export the Report:</b> Skylark AI facilitates seamless export of
            the generated comparison report. Choose your preferred format for
            export, ensuring compatibility with your decision-making processes.
          </li>
        </ol>
      </p>
    </Box>
  );
};
