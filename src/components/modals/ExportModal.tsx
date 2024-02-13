import React, { memo, useCallback, useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { XModal } from "../XModal";
import { LoadingSpinner } from "../loading-spinners/LoadingSpinner";

function removeDefsTags(inputString: string) {
  // Define a regular expression pattern to match <defs> ... </defs>
  const pattern = /<defs>[\s\S]*?<\/defs>/g;

  // Use the replace method to remove all instances of the pattern
  const resultString = inputString.replace(pattern, "");

  return resultString;
}

export const ExportModal = memo(
  ({
    open,
    exportContent,
    onClose,
  }: {
    open: boolean;
    exportContent: any;
    onClose: () => void;
  }) => {
    const [fileType, setFileType] = useState<string>("PDF");
    const [loading, setLoading] = useState<boolean>(false);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setFileType(e.target.value);
    }, []);

    const onExport = useCallback(() => {
      const content = removeDefsTags(
        (exportContent as HTMLDivElement).innerHTML
      );
      const htmlContent = `
    			<body>
          ${content}
          <style>
          .hide-in-print {
            display: none;
          }
          a.index-heading {
            color: black !important;
          }
          text, tspan {
            fill: black !important;
          }
          .apexcharts-xcrosshairs {
            display: none !important;
          }
          .apexcharts-tooltip {
            display: none !important;
          }
          .print-legend {
            visibility: visible !important;
          }
        </style></body>`;

      setLoading(true);
      fetch(
        `${process.env.apiUrl}${
          fileType === "PDF" ? "generate_pdf" : "generate_pptx"
        }`,
        {
          method: "POST",
          body: new URLSearchParams({ html_content: htmlContent }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          // Create a download link for the PDF
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `output.${fileType === "PDF" ? "pdf" : "pptx"}`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [exportContent, fileType]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Export</Box>}
        footer={
          <Box textAlign="center" width="100%">
            <Button
              variant="contained"
              onClick={onExport}
              disabled={!exportContent}
            >
              Export
            </Button>
          </Box>
        }
        size="xs"
      >
        {loading ? (
          <LoadingSpinner size={114} loadingDescription="Exporting the file" />
        ) : (
          <Box px={3}>
            <Typography variant="body2" textAlign="center" mb={3}>
              Select Export File Format
            </Typography>
            <TextField
              label="File Type"
              select
              fullWidth
              value={fileType}
              onChange={onChange}
              size="small"
            >
              {["PDF", "PPTX"].map((fType) => (
                <MenuItem key={fType} value={fType}>
                  {fType}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
      </XModal>
    );
  }
);

ExportModal.displayName = "ExportModal";
