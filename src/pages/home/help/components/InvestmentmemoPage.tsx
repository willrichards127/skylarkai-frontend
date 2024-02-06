import { Box, Typography } from "@mui/material";
import { CircleLogo } from "../../../../components/Svgs";

export const InvestmentmemoPage = () => {
  return (
    <Box pb={4}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <CircleLogo />
        <Typography variant="h5">Create Investment Memo Report</Typography>
      </Box>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Quickstart Guide:
      </Typography>

      <p>
        <ol>
          <li style={{ paddingBottom: 12 }}>
            <b>Choose a Company:</b> In the Investment Memo section, there
            should be an option to choose a company. Skylark may provide a
            template library where you can select a company or allow you to
            input a custom company.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Supply URL for Analysis:</b> Provide the URL of the company you
            want to analyze. This could be the company's official website or any
            relevant web page.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Select a Template or Customize:</b> Choose a template from the
            library that fits your needs. Alternatively, if Skylark allows
            customization, you may create a bespoke memo by adding your own
            content.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Let Skylark's LLMs Synthesize Information:</b> Once you've chosen
            a company and provided the necessary details, let Skylark's LLMs
            process and synthesize the information into a coherent investment
            memo.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Review and Edit:</b> Review it thoroughly. Check for accuracy and
            completeness. Skylark may allow you to edit or customize the
            generated content if needed.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Export as PDF:</b> Download the memo in PDF format.
          </li>
        </ol>
      </p>
    </Box>
  );
};
