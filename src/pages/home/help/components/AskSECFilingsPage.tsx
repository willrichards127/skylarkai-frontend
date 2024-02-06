import { Box, Typography } from "@mui/material";
import { CircleLogo } from "../../../../components/Svgs";

export const AskSECFilingsPage = () => {
  return (
    <Box pb={4}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <CircleLogo />
        <Typography variant="h5">Ask SEC Filings</Typography>
      </Box>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Quickstart Guide:
      </Typography>

      <p>
        <ol>
          <li style={{ paddingBottom: 12 }}>
            <b>Select a Company:</b> Choose a specific company you want to
            analyze. Skylark should provide options for selecting companies,
            allowing you to focus on the one of interest.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Interact with Filings:</b> Effortlessly navigate through a
            company's SEC filings.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Utilize Intuitive Chat Feature:</b> Engage with Skylark's
            intuitive chat feature for a dynamic and interactive experience. Use
            the chat to gain insights, ask questions, and receive real-time
            information related to the selected company's financial data.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Generate Custom FAQ Report:</b> Instantly generate a custom
            Frequently Asked Questions (FAQ) report based on your interactions
            and analysis. Skylark should provide an easy-to-use tool for
            compiling essential information into a comprehensive FAQ format.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Streamlined, Insightful Analysis:</b> Ensure you leverage all
            available features to gather valuable insights efficiently.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Effortless Navigation:</b> Skylark emphasizes effortless
            navigation through a company's SEC filings and earnings calls. Take
            advantage of the user-friendly interface to explore documents
            seamlessly.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Access Related Documents:</b> Simply choose a company, and
            Skylark should grant you access to related documents. This feature
            ensures that you have all the necessary information in one
            centralized location.
          </li>
          <li style={{ paddingBottom: 12 }}>
            <b>Export FAQ Report:</b> Once you've generated your custom FAQ
            report, easily export it for further use. Skylark should offer
            export options, and you can choose the format that best suits your
            needs.
          </li>
        </ol>
      </p>
    </Box>
  );
};
