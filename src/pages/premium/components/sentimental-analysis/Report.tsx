/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useCallback } from "react";
import {
  colors,
  Box,
  Button,
  Breadcrumbs,
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
import { generatePdf } from "../../../../shared/utils/pdf-generator";
import { parseCitation } from "../../../../shared/utils/string";

export const Report = ({
  instance,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onGotoMain: () => void;
}) => {
  const ref = useRef<HTMLDivElement>();

  const onExport = useCallback(() => {
    generatePdf(ref.current!.innerHTML, "Sentiment Analysis", "Skylark");
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <IconButton size="small" onClick={onGotoMain} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Sentiment Analysis
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
      <Box sx={{ height: "calc(100% - 60px)", position: "relative" }}>
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
            allowElement={(element, _, parent) => {
              if (element.tagName === "p" && (parent as any).tagName === "li") {
                return false;
              }
              if (
                element.tagName === "strong" &&
                (parent as any).tagName === "li"
              ) {
                return false;
              }
              return true;
            }}
            unwrapDisallowed={true}
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
            {parseCitation(instance.instance_metadata?.report || "")}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
};
