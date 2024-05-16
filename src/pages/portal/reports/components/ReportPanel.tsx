import { useState, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
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
import { InviteCollaboraterModal } from "./InviteCollaboraterModal";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import { useGetSetupsQuery } from "../../../../redux/services/setupApi";
import {
  reportBottomHeight,
  reportTabHeaderHeight,
} from "../../../../shared/models/constants";
import { currentUser } from "../../../../redux/features/authSlice";
import {
  useGetReportQuery,
  useUpdateReportReviewStatusMutation,
} from "../../../../redux/services/reportApi";

const ReportPanel = ({ reportId }: { reportId: string }) => {
  const navigate = useNavigate();
  const { user } = useSelector(currentUser);
  const [searchParams] = useSearchParams();
  const setupId = searchParams.get("setupId");
  const unitId = searchParams.get("unitId");
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");
  const reportName = searchParams.get("reportName");

  const emailRef = useRef<
    { reason: string; initialTitle: string; initialContent: string } | undefined
  >();

  const isPartner = user!.persona_id === 2;

  const { isLoading, data: setups } = useGetSetupsQuery({
    unitId: +unitId!,
    viewMode: "active",
  });
  const { isLoading: loadingReport, data: currentReport } = useGetReportQuery({
    reportId: +reportId!,
  });

  const [updateReviewStatus, { isLoading: updatingReviewStatus }] =
    useUpdateReportReviewStatusMutation();

  const [reportsModal, showReportsModal] = useState<boolean>(false);
  const [inviteModal, showInviteModal] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);
  const [reportTabs, setReportTabs] = useState<
    {
      setupId: number;
      reportId: number;
      reportName: string;
      unitName: string;
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

  const onAddReport = useCallback((unit: any, newReport: any) => {
    setReportTabs((prev) => {
      const reportIds = prev.map((item) => item.reportId);
      if (reportIds.includes(newReport.id)) return prev;
      return [
        ...prev,
        {
          setupId: newReport.graph_id,
          reportId: +newReport.id,
          reportName: newReport.report_metadata.reportname,
          unitName: unit.name,
        },
      ];
    });
  }, []);

  const onRemoveReport = useCallback((closeReportId: number) => {
    setReportTabs((prev) =>
      prev.filter((item) => item.reportId !== closeReportId)
    );
  }, []);

  const onInvite = useCallback(() => {
    showInviteModal(true);
  }, []);

  const onShowSendEmailModal = useCallback(
    (reason: string) => () => {
      if (reason === "send_review") {
        emailRef.current = {
          reason,
          initialTitle: "Review Required(Partner Only)",
          initialContent: `
            <p>Hello there, I would require review for this report:</p>
            <a href='report_link:${reportId}?unitId=${unitId}&unitName=${unitName}&type=${type}&reportName=${reportName}&setupId=${setupId}' target="_blank">${reportName}</a>
          `,
        };
      } else if (reason === "finalize") {
        emailRef.current = {
          reason,
          initialTitle: "Finalized Report",
          initialContent: `
            <p>Hello there, I finalised the review of this report. This report is good to go.</p>
          `,
        };
      } else if (reason === "need_change") {
        emailRef.current = {
          reason,
          initialTitle: "Need to Change(Analyst Only)",
          initialContent: `
            <p>Hello there, this report is needed to be changed:</p>
            <a href='report_link:${reportId}?unitId=${unitId}&unitName=${unitName}&type=${type}&reportName=${reportName}&setupId=${setupId}' target="_blank">${reportName}</a>
          `,
        };
      }
      showEmailModal(true);
    },
    [unitId, unitName, type, reportName, setupId, reportId]
  );

  const onEmailSentActionPerformed = useCallback(() => {
    // change report status -> review requested(2) by analyst action
    if (emailRef.current!.reason === "send_review") {
      updateReviewStatus({
        reportId: +reportId!,
        review_status: 2,
      });
    } else if (emailRef.current!.reason === "finalize") {
      // or change report status -> need to change(3) or finalized(4) by partner action
      updateReviewStatus({
        reportId: +reportId!,
        review_status: 4,
      });
    } else if (emailRef.current!.reason === "need_change") {
      // or change report status -> need to change(3) or finalized(4) by partner action
      updateReviewStatus({
        reportId: +reportId!,
        review_status: 3,
      });
    }

    // also send notification
  }, [reportId, updateReviewStatus]);

  useEffect(() => {
    if (isLoading || !setups?.length) return;
    setReportTabs([
      {
        setupId: +setupId!,
        reportId: +reportId!,
        reportName: reportName!,
        unitName: unitName!,
      },
    ]);
  }, [isLoading, setups, setupId, unitName, reportId, reportName]);

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
        open={isLoading || loadingReport || updatingReviewStatus}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack spacing={2} direction="row" width="100%" px={1} bgcolor="black">
        <IconButton
          size="small"
          onClick={() =>
            navigate(
              `/portal/units/${unitId}/reports?unitName=${unitName}&type=${type}`
            )
          }
          sx={{ minWidth: 48, maxHeight: 48 }}
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
                      {reportTab.reportName}-{reportTab.unitName}
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
          sx={{ minWidth: 110 }}
        >
          Add Analyst
        </Button>
        {/* Can invite collaborator for the current report */}
        {selectedReport === +reportId &&
          (isPartner ? [2] : [0, 3]).includes(currentReport?.review_status) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                sx={{ minWidth: 140 }}
                onClick={onInvite}
              >
                Invite Collaborator
              </Button>
            </Box>
          )}
      </Stack>
      {reportTabs.map((reportTab) => (
        <Box
          key={reportTab.reportId}
          sx={{
            width: "100%",
            height: `calc(100% - ${
              reportTabHeaderHeight +
              (selectedReport === +reportId &&
              (isPartner ? [2] : [0, 3]).includes(currentReport?.review_status)
                ? reportBottomHeight
                : 0)
            }px)`,
            display: reportTab.reportId === selectedReport ? "block" : "none",
          }}
        >
          <ReportViewer
            setupId={reportTab.setupId}
            reportId={reportTab.reportId}
            reportName={reportTab.reportName}
            unitName={reportTab.unitName}
          />
        </Box>
      ))}
      {/* Can review/finalize for the current report */}
      {selectedReport === +reportId &&
        (isPartner ? [2] : [0, 3]).includes(currentReport?.review_status) && (
          <Box
            sx={{
              height: reportBottomHeight,
              width: "100%",
              bgcolor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 2,
              px: 1,
            }}
          >
            {isPartner && (
              <Button
                variant="contained"
                sx={{ minWidth: 140 }}
                color={"primary"}
                onClick={onShowSendEmailModal("need_change")}
              >
                Need to Change
              </Button>
            )}
            <Button
              variant="contained"
              sx={{ minWidth: 140 }}
              color={isPartner ? "success" : "primary"}
              onClick={onShowSendEmailModal(
                isPartner ? "finalize" : "send_review"
              )}
            >
              {isPartner ? "Finalise Report" : "Send For Review"}
            </Button>
          </Box>
        )}
      {reportsModal && (
        <ReportsSelectionModal
          open={reportsModal}
          onClose={() => showReportsModal(false)}
          onActionPerformed={onAddReport}
        />
      )}
      {inviteModal && (
        <InviteCollaboraterModal
          open={inviteModal}
          onClose={() => showInviteModal(false)}
          onActionPerformed={() => {}}
        />
      )}
      {emailModal && emailRef.current && (
        <SendEmailModal
          open={emailModal}
          initialTitle={emailRef.current.initialTitle}
          initialContent={emailRef.current.initialContent}
          onClose={() => showEmailModal(false)}
          onActionPerformed={onEmailSentActionPerformed} // send notification as well
        />
      )}
    </Box>
  );
};

export default ReportPanel;
