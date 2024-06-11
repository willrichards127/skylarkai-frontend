import { memo } from "react";
import { Box, CircularProgress } from "@mui/material";
import { ReportTemplate } from "./ReportTemplate";
import { useGetReportQuery } from "../../../../redux/services/reportApi";

export const ReportViewer = memo(
  ({
    setupId,
    reportId,
    reportName,
    unitName,
  }: {
    setupId: number;
    reportId: number;
    reportName: string;
    unitName: string;
  }) => {
    const { isLoading: loadingReport, data: reportData } = useGetReportQuery({
      reportId,
    });

    if (loadingReport) {
      return (
        <Box sx={{ width: "100%", height: "100%", textAlign: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      );
    }

    return (
      <ReportTemplate
        reportId={reportId}
        reportName={reportName}
        setupId={setupId}
        unitName={unitName}
        reportContent={reportData.content as string}
        analysisType="financial_diligence"
        isReadOnly={reportData.type === 3}
      />
    );
  }
);
