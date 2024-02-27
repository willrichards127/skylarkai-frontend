import { useEffect, useRef, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { CircleSpinner } from "../../../../components/loading-spinners/CircleSpinner";
import { useLazyGetReportQuery, useReGenerateReportMutation, useSaveReportMutation } from "../../../../redux/services/reportApi";
import { MarketAnalysisReport } from "../templates/MarketAnalysisReport";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useIngestFilesMutation, useLazyGetSetupQuery } from "../../../../redux/services/setupApi";
import { toast } from "react-toastify";

const ReportPanel = ({ reportId }: { reportId: string }) => {
  const [searchParams] = useSearchParams();
  const reportType = searchParams.get("reportType"); // report api name
  const setupId = searchParams.get("setupId");

  const parentRef = useRef<any>();

  const [upward, setUpward] = useState<boolean>(false);

  const [
    regenerateReport,
    { isLoading: isGeneratingReport, isSuccess: isGeneratedReport, data: generatedData },
  ] = useReGenerateReportMutation();

  const [getReport, { isLoading: loadingReport, data: reportData }] =
    useLazyGetReportQuery();

  const [getSetup, { isLoading: loadingSetup, data: setupData }] = useLazyGetSetupQuery();
  const [saveReport, { isSuccess: isSaved }] = useSaveReportMutation({});

  const [ingestFiles, { isLoading: ingestingFiles }] = useIngestFilesMutation();

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

  useEffect(() => {
    if (setupId) {
      getSetup({
        setupId: +setupId
      });
    }
  }, [
    getSetup,
    setupId,
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

  const OnRerun = async (append?: Record<string, File[]>) => {
    if (append && append['file'] && setupData) {
      await ingestFiles({
        setupId: +setupId!,
        companyName: setupData.name!,
        analysisType: "financial_diligence",
        files: append['file']
      });
    }

    regenerateReport({
      reportId: reportId,
      setupId: setupId!,
      queryType: reportType!,
      template: REPORTS_DICT[reportType!].template,
    });
  }

  const onSave = (reportItems: { key: string; value: any }[]) => {
    const mdTemplate = reportItems.reduce(
      (pv: string, cv: { key: string; value: any }) => {
        pv += cv.value.content;
        return pv;
      },
      ""
    );
    saveReport({
      ...(reportId && { reportId }),
      setupId: +setupId!,
      reportName: reportType,
      content: mdTemplate,
      custom: reportItems,
    });
  }

  useEffect(() => {
    if (isSaved) {
      toast.success("The report is updated successfully.");
    }
  }, [isSaved]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {loadingReport || isGeneratingReport || loadingSetup || ingestingFiles ? (
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
            {!!reportData && !!setupData && (
              <MarketAnalysisReport
                setup={setupData}
                reportContent={isGeneratedReport ? generatedData : reportData.content}
                customizedContent={isGeneratedReport ? undefined : reportData.custom_metadata}
                reportType={reportType!}
                onRerun={OnRerun}
                onSave={onSave}
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
