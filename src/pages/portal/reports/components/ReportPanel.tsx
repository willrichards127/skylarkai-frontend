import { useEffect, useRef, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { CircleSpinner } from "../../../../components/loading-spinners/CircleSpinner";
import { useLazyGetReportQuery, useReGenerateReportMutation } from "../../../../redux/services/reportApi";
import { MarketAnalysisReport } from "../templates/MarketAnalysisReport";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const ReportPanel = ({ reportId }: { reportId: string }) => {
  const [searchParams] = useSearchParams();
  const reportType = searchParams.get("reportType"); // report api name
  const setupId = searchParams.get("setupId");

  const parentRef = useRef<any>();

  const [upward, setUpward] = useState<boolean>(false);

  const [
    reGenerateReport,
    { isLoading: isGeneratingReport, isSuccess: isGeneratedReport, data: generatedData },
  ] = useReGenerateReportMutation();

  const [getReport, { isLoading: loadingReport, data: reportData }] =
    useLazyGetReportQuery();

  useEffect(() => {
    getReport({
      reportId: +reportId,
      queryType: reportType!,
      template: REPORTS_DICT[reportType!].template,
    });
  }, [
    getReport,
    reportType,
    reportId,
  ]);

  const onScroll = useCallback(() => {
    if (parentRef.current.scrollTop > 600) {
      setUpward(true);
    } else {
      setUpward(false);
    }
  }, []);

  const onUpward = useCallback(() => {
    parentRef.current.scrollTop = 0;
  }, []);

  const OnRerun = () => {
    reGenerateReport({
      reportId: reportId,
      setupId: setupId!,
      queryType: reportType!,
      template: REPORTS_DICT[reportType!].template,
    });
  }

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {loadingReport || isGeneratingReport ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <CircleSpinner
            size={120}
            description={isGeneratingReport ? "Generating report..." : "Reading report..."}
          />
        </Box>
      ) : (
        <Box
          ref={parentRef}
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            // overflowY: "auto",
            // px: 8,
            // pb: 8,
            position: "relative",
          }}
          onScroll={onScroll}
        >
          <Box width="100%" height="100%">
            {!!reportData && (
              <MarketAnalysisReport
                reportId={+reportId}
                reportContent={isGeneratedReport ? generatedData : reportData.content}
                customizedContent={isGeneratedReport ? undefined : reportData.custom_metadata}
                setupId={setupId!}
                reportType={reportType!}
                onRerun={OnRerun}
              />
            )}
          </Box>
          {upward && (
            <Box sx={{ position: "fixed", bottom: 32, right: 32 }}>
              <IconButton onClick={onUpward}>
                <ArrowCircleUpIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

ReportPanel.displayName = "ReportPanel";

export default ReportPanel;
