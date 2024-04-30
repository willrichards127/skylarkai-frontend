import { memo } from "react";
import { Box, CircularProgress } from "@mui/material";
import { ReportTemplate } from "./ReportTemplate";
import { ISetup } from "../../../../shared/models/interfaces";
import { useGetReportQuery } from "../../../../redux/services/reportApi";

export const ReportViewer = memo(
  ({
    setup,
    reportId,
    reportName,
  }: {
    setup: ISetup;
    reportId: number;
    reportName: string;
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
        setup={setup}
        reportContent={reportData.content as string}
        analysisType="financial_diligence"
      />
    );
  }
);
