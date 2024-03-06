/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useCallback, useRef, useState } from "react";
import {
  colors,
  Backdrop,
  Box,
  Button,
  Breadcrumbs,
  CircularProgress,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ICustomInstance } from "./interfaces";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  useCompareDocumentsMutation,
  useUpdateFeatureInstanceMutation,
} from "../../../../redux/services/transcriptAPI";
import { removeCitations } from "../../../../shared/utils/string";
import { generatePdf } from "../../../../shared/utils/pdf-generator";

export const Report = ({
  instance,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onGotoMain: () => void;
}) => {
  
  const ref = useRef<HTMLDivElement>();
  const [data, setData] = useState<string>("");
  const [compareDocs, { isLoading: loadingCompare }] =
    useCompareDocumentsMutation();
  const [updateInstance, { isLoading: loadingUpdateInstance }] =
    useUpdateFeatureInstanceMutation();

  const onExport = useCallback(() => {
    generatePdf(ref.current!.innerHTML, "Compare Earning Calls", "Skylark");
  }, []);

  useEffect(() => {
    const doProcess = async () => {
      const resCompare = await compareDocs({
        document1: instance.instance_metadata!.docs[0].file_name,
        document2: instance.instance_metadata!.docs[1].file_name,
        is_template_with_content: true,
        llm: "Anthropic",
        analysis_type: "transcript",
        template:
          "### Company Earnings Call / Financial Document Comparison Template\n\n#### Company Information\n| Criteria | Company A | Company B | Notes |\n|----------|-----------|-----------|-------|\n| Name of Company | | | |\n| Date of Document | | | |\n| Type of Document (Earnings Call, Financial Report, etc.) | | | |\n\n#### 1. Financial Health\n| Criteria | Company A | Company B | Trend Analysis |\n|----------|-----------|-----------|----------------|\n| Revenue | | | |\n| Profit Margins | | | |\n| Debt Levels | | | |\n| Cash Flow | | | |\n\n#### 2. Market Position and Competition\n| Criteria | Company A | Company B | Comparative Analysis |\n|----------|-----------|-----------|----------------------|\n| Market Position | | | |\n| Competitive Landscape | | | |\n| Strategic Advantages | | | |\n\n#### 3. Product and Service Offerings\n| Criteria | Company A | Company B | Observations |\n|----------|-----------|-----------|--------------|\n| Range of Offerings | | | |\n| Innovation | | | |\n| Market Reception | | | |\n\n#### 4. Management and Leadership\n| Criteria | Company A | Company B | Comparative Insights |\n|----------|-----------|-----------|---------------------|\n| Management Styles | | | |\n| Experience of Leadership | | | |\n| Strategic Decisions | | | |\n\n#### 5. Operational Efficiency\n| Criteria | Company A | Company B | Operational Analysis |\n|----------|-----------|-----------|----------------------|\n| Supply Chain Management | | | |\n| Production Processes | | | |\n| Operational Challenges | | | |\n\n#### 6. Investor and Stakeholder Relations\n| Criteria | Company A | Company B | Stakeholder Analysis |\n|----------|-----------|-----------|----------------------|\n| Investor Relations Approach | | | |\n| Shareholder Value | | | |\n| Corporate Governance | | | |\n\n#### 7. Future Growth Prospects\n| Criteria | Company A | Company B | Growth Projection |\n|----------|-----------|-----------|-------------------|\n| Growth Plans | | | |\n| Expansion Strategies | | | |\n| Projected Trajectories | | | |\n\n#### 8. Regulatory and Environmental Compliance\n| Criteria | Company A | Company B | Compliance Analysis |\n|----------|-----------|-----------|---------------------|\n| Regulatory Compliance | | | |\n| Environmental Practices | | | |\n\n#### 9. Workforce and Culture\n| Criteria | Company A | Company B | Cultural Analysis |\n|----------|-----------|-----------|-------------------|\n| Employee Satisfaction | | | |\n| Company Culture | | | |\n| Human Resource Strategies | | | |\n\n#### 10. Technology and Innovation\n| Criteria | Company A | Company B | Technological Insights |\n|----------|-----------|-----------|------------------------|\n| Technology Investments | | | |\n| Approach to Innovation | | | |\n\n#### 11. Risk Management\n| Criteria | Company A | Company B | Risk Assessment |\n|----------|-----------|-----------|-----------------|\n| Risk Identification | | | |\n| Risk Mitigation Strategies | | | |",
      }).unwrap();
      const finalResult = removeCitations(resCompare);
      await updateInstance({
        id: instance.id!,
        instance_metadata: {
          ...instance.instance_metadata,
          report: finalResult,
        },
      }).unwrap();
      setData(finalResult);
    };
    if (!instance.saved || !instance.instance_metadata.report) {
      doProcess();
    }
  }, [compareDocs, updateInstance, instance]);

  return (
    <Box sx={{ height: "100%" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingUpdateInstance || loadingCompare}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={onGotoMain} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Compare and Analyze Earning Calls Trends
          </Link>
          <Typography color="text.primary">Compare Earning Calls</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          startIcon={<IosShareIcon />}
          sx={{ minWidth: 140 }}
          onClick={onExport}
        >
          Export
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ my: 2 }}>
        {instance.company_name} ({instance.ticker})
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {instance.instance_metadata!.docs[0].file_name} vs{" "}
        {instance.instance_metadata!.docs[1].file_name}
      </Typography>
      <Box sx={{ height: "calc(100% - 120px)", position: "relative" }}>
        <Box
          ref={ref}
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            border: "1px solid black",
            overflowY: "auto",
            bgcolor: "white",
            color: "black",
            px: 16,
            py: 8,
          }}
        >
          {!loadingCompare && (data || instance?.instance_metadata?.report) && (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre: (props) => <div {...(props as any)} />,
                table: (props) => (
                  <table
                    {...props}
                    style={{
                      borderCollapse: "collapse",
                      margin: "4px 2px",
                      overflowX: "auto",
                    }}
                  />
                ),
                th: (props) => (
                  <th
                    {...props}
                    style={{
                      textAlign: "center",
                      padding: "2px 4px",
                      border: `1px solid ${colors.grey[500]}`,
                    }}
                  />
                ),
                td: (props) => (
                  <td
                    {...props}
                    style={{
                      textAlign: "center",
                      padding: "4px 8px",
                      border: `1px solid ${colors.grey[500]}`,
                    }}
                  />
                ),
              }}
            >
              {(instance.saved && instance.instance_metadata.report) ? instance?.instance_metadata?.report : data}
            </ReactMarkdown>
          )}
        </Box>
      </Box>
    </Box>
  );
};
