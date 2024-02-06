/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";
import {
  colors,
  Box,
  Button,
  Breadcrumbs,
  Link,
  IconButton,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ICustomInstance } from "./interfaces";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generatePdf } from "../../../../../shared/utils/pdf-generator";
import { removeCitations } from "../../../../../shared/utils/string";

export const Report = ({
  instance,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onGotoMain: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const onExport = useCallback(() => {
    generatePdf(ref.current!.innerHTML, "Investment memo");
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={onGotoMain} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Create Investment Memo
          </Link>
          <Typography color="text.primary">Report</Typography>
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
      <Box sx={{ display: "flex", mb: 2 }} my={4}>
        <Typography variant="h5" gutterBottom>
          {instance.company_name} ({instance.ticker})
        </Typography>
        <Box mr="auto" />
        <Typography variant="body2">
          Template File:{" "}
          {instance.instance_metadata?.template || "Default Template"}
        </Typography>
      </Box>
      <Box sx={{ height: "calc(100% - 120px)", position: "relative" }}>
        <Box
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
          ref={ref}
        >
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
                    color: "white",
                    background: "black",
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
            {removeCitations(instance.instance_metadata.report || "")}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
};
