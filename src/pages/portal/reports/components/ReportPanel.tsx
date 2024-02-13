import { memo, useEffect, useRef, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { UtilPanel } from "./UtilPanel";
import { CircleSpinner } from "../../../../components/loading-spinners/CircleSpinner";
import { ChatAssistWindow } from "./ChatAssistWindow";
import {
  useGenerateReportMutation,
  useGetReportMutation,
  useGenerateWarrantReportMutation,
} from "../../../../redux/services/reportApi";
import { MarketAnalysisReport } from "../templates/MarketAnalysisReport";
import { REPORTS_DICT, EdgarFilings } from "../../../../shared/models/constants";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const ReportPanel = memo(({ reportId }: { reportId: string }) => {
  const isNew = reportId === "new";
  const [searchParams] = useSearchParams();
  const reportType = searchParams.get("reportType"); // report api name
  const documentType = searchParams.get("documentType");
  const filingType = searchParams.get("filingType");
  const setupId = searchParams.get("setupId");
  const viewMode = searchParams.get("viewMode");

  const parentRef = useRef<any>();

  const [upward, setUpward] = useState<boolean>(false);
  const [chatAssist, showChatAssist] = useState<boolean>(false);

  const [
    generateReport,
    { isLoading: loadingGenerateReport, data: generatedData },
  ] = useGenerateReportMutation();
  const [getReport, { isLoading: loadingReport, data: reportData }] =
    useGetReportMutation();

  const [
    generateWarrantReport,
    { isLoading: loadingWarrant, data: warrantData },
  ] = useGenerateWarrantReportMutation();

  useEffect(() => {
    if (isNew && documentType === "report") {
      generateReport({
        setupId: +setupId!,
        queryType: reportType!,
        template: REPORTS_DICT[reportType!].template,
      });
    } else if (isNew && documentType === "filing") {
      const matched = EdgarFilings.find((item) => item.value === filingType);
      generateWarrantReport({
        setupId: +setupId!,
        question: matched!.question,
        reportName: matched!.value,
      });
    } else {
      getReport({
        reportId: +reportId,
        queryType: reportType!,
        template: REPORTS_DICT[reportType!].template,
        viewMode: viewMode!,
      });
    }
  }, [
    documentType,
    getReport,
    generateWarrantReport,
    generateReport,
    setupId,
    isNew,
    reportType,
    reportId,
    filingType,
    viewMode,
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

  const onChatAssist = useCallback(() => {
    showChatAssist(true);
  }, []);

  return (
    <Box sx={{ height: "100%", display: "flex", justifyContent: "center" }}>
      <UtilPanel onChatAssist={onChatAssist} />

      <Box sx={{ flex: 1, p: 2 }}>
        {loadingGenerateReport || loadingReport || loadingWarrant ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <CircleSpinner
              size={120}
              description={isNew ? "Generating report..." : "Reading report..."}
            />
          </Box>
        ) : (
          <Box
            ref={parentRef}
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              overflowY: "auto",
              px: 8,
              py: 8,
              position: "relative",
            }}
            onScroll={onScroll}
          >
            <Box width="75%">
              {!!generatedData && (
                <MarketAnalysisReport
                  reportContent={generatedData}
                  setupId={setupId!}
                  reportType={reportType!}
                />
              )}
              {!!reportData && (
                <MarketAnalysisReport
                  reportId={+reportId}
                  reportContent={
                    viewMode === "active" ? reportData.content : null
                  }
                  customizedContent={
                    viewMode === "active"
                      ? reportData.custom_metadata
                      : reportData.result
                  }
                  setupId={setupId!}
                  reportType={reportType!}
                />
              )}
              {!!warrantData && (
                <MarketAnalysisReport
                  reportContent={warrantData}
                  setupId={setupId!}
                  reportType={reportType!}
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
      {chatAssist && (
        <Box sx={{ position: "fixed", left: 128, bottom: 32 }}>
          <ChatAssistWindow onClose={() => showChatAssist(false)} />
        </Box>
      )}
    </Box>
  );
});

ReportPanel.displayName = "ReportPanel";

export default ReportPanel;
