import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Box,
  Tabs,
  Tab,
  IconButton,
  Stack,
  CircularProgress,
  Backdrop,
  Button,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { ReportViewer } from "../templates/ReportViewer";
import { ReportsSelectionModal } from "./ReportsSelectionModal";
import { useGetSetupsQuery } from "../../../../redux/services/setupApi";
import { ISetup } from "../../../../shared/models/interfaces";
import { reportTabHeaderHeight } from "../../../../shared/models/constants";

const ReportPanel = ({ reportId }: { reportId: string }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setupId = searchParams.get("setupId");
  const reportName = searchParams.get("reportName");

  const { isLoading, data: setups } = useGetSetupsQuery();

  const [reportsModal, showReportsModal] = useState<boolean>(false);
  const [reportTabs, setReportTabs] = useState<
    {
      setup: ISetup;
      reportId: number;
      reportName: string;
    }[]
  >([]);

  const [selectedReport, setSelectedReport] = useState<number>(+reportId);

  const onChangeReport = useCallback(
    (_: React.SyntheticEvent, newReportId: number) => {
      setSelectedReport(newReportId);
    },
    []
  );

  const onShowReportsModal = useCallback(() => {
    showReportsModal(true);
  }, []);

  const onAddReport = useCallback((newSetup: ISetup, newReport: any) => {
    setReportTabs((prev) => {
      const reportIds = prev.map((item) => item.reportId);
      if (reportIds.includes(newReport.id)) return prev;
      return [
        ...prev,
        {
          setup: newSetup,
          reportId: +newReport.id,
          reportName: newReport.report_metadata.reportname,
        },
      ];
    });
  }, []);

  const onRemoveReport = useCallback((closeReportId: number) => {
    setReportTabs((prev) =>
      prev.filter((item) => item.reportId !== closeReportId)
    );
  }, []);

  useEffect(() => {
    if (isLoading || !setups?.length) return;
    setReportTabs([
      {
        setup: setups.find((item: ISetup) => item.id! === +setupId!)!,
        reportId: +reportId!,
        reportName: reportName!,
      },
    ]);
  }, [isLoading, setups, setupId, reportId, reportName]);

  useEffect(() => {
    if (!reportTabs.length) return;
    setSelectedReport(reportTabs[reportTabs.length - 1].reportId);
  }, [reportTabs]);

  return (
    <Box
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack spacing={2} direction="row" width="100%" px={1} bgcolor="black">
        <IconButton
          size="small"
          onClick={() => navigate("/portal/reports")}
          sx={{ minWidth: 48, minHeight: 48 }}
        >
          <ArrowBackIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedReport}
            onChange={onChangeReport}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "&.MuiTabs-root": {
                maxWidth: 1100,
                height: 50,
              },
              "& .MuiTypography-root": {
                whiteSpace: "nowrap",
              },
            }}
          >
            {reportTabs.map((reportTab) => (
              <Tab
                key={reportTab.reportId}
                label={
                  <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                    <Typography variant="body2">
                      {reportTab.reportName}-{reportTab.setup.name}
                    </Typography>
                    {reportTab.reportId !== +reportId && (
                      <CloseIcon
                        sx={{ fontSize: 16, cursor: "pointer" }}
                        onClick={() => onRemoveReport(reportTab.reportId)}
                      />
                    )}
                  </Box>
                }
                value={reportTab.reportId}
              />
            ))}
          </Tabs>
        </Box>
        <Button
          size="small"
          startIcon={<AddIcon />}
          onClick={onShowReportsModal}
        >
          Add Report
        </Button>
      </Stack>
      {reportTabs.map((reportTab) => (
        <Box
          key={reportTab.reportId}
          sx={{
            width: "100%",
            height: `calc(100% - ${reportTabHeaderHeight}px)`,
            display: reportTab.reportId === selectedReport ? "block" : "none",
          }}
        >
          <ReportViewer
            setup={reportTab.setup}
            reportId={reportTab.reportId}
            reportName={reportName!}
          />
        </Box>
      ))}
      {reportsModal && (
        <ReportsSelectionModal
          open={reportsModal}
          onClose={() => showReportsModal(false)}
          onActionPerformed={onAddReport}
        />
      )}
    </Box>
  );
};

export default ReportPanel;
