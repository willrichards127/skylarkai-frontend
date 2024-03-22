import React, { memo, useCallback, useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { XModal } from "../XModal";
import ApexCharts from "apexcharts";
import { generatePdf } from "../../shared/utils/pdf-generator";

export const ExportModal = memo(
  ({
    open,
    reportName = "Report",
    exportContent,
    onClose,
  }: {
    open: boolean;
    reportName?: string;
    exportContent: HTMLDivElement;
    onClose: () => void;
  }) => {
    const [fileType, setFileType] = useState<string>("PDF");

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setFileType(e.target.value);
    }, []);

    const onExport = useCallback(() => {
      // get all apex-charts
      const apex = ApexCharts.getChartByID("chart-1");
      // const svg: any = apex!.exports.getSvgString();
      // console.log(svg, "svg");
      // const container = document.createElement("div");
      // container.appendChild(exportContent.cloneNode(true));
      // const removeItems = container.querySelectorAll(".no-print");
      // for (const item of removeItems) {
      //   item.remove();
      // }
      // const chartEls = container.querySelectorAll(".chart-wrapper");
      // for (const chartEl of chartEls) {
      //   const adjustedSvg = svg.toString().replaceAll('width="667"', 'width="604"');
      //   console.log(adjustedSvg, 'ad=====')
      //   chartEl.innerHTML = adjustedSvg;
      // }

      // generatePdf(container.innerHTML, reportName, "Skylark");
      // onClose();
      apex!.dataURI({ scale: 1 }).then((value: any) => {        
        const container = document.createElement("div");
        container.appendChild(exportContent.cloneNode(true));
        const removeItems = container.querySelectorAll(".no-print");
        for (const item of removeItems) {
          item.remove();
        }
        const chartEls = container.querySelectorAll(".chart-wrapper");
        for (const chartEl of chartEls) {
          chartEl.innerHTML = `<img src="${value.imgURI.replace('image/png', 'image/jpeg')}" width="672" alt="chart" />`;
        }

        generatePdf(container.innerHTML, reportName, "Skylark");
        onClose();
      });
    }, [onClose, exportContent, reportName]);

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
              <MenuItem key={fType} value={fType} disabled={fType === "PPTX"}>
                {fType}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </XModal>
    );
  }
);

ExportModal.displayName = "ExportModal";
