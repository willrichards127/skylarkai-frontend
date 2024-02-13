import { memo, useCallback, useEffect, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NewReportModal } from "./NewReportModal";
import { ReportTabContainer } from "./ReportTabContainer";
import { useLazyGetReportsQuery } from "../../../../redux/services/reportApi";

const ReportsContainer = memo(() => {
  const [viewMode, setViewMode] = useState<string>("active");
  const [newReportModal, showNewReportModal] = useState<boolean>(false);
  const [getReports, { isFetching: fetchingReports, data: reportsData }] =
    useLazyGetReportsQuery();

  const onNewReportModal = useCallback(() => {
    showNewReportModal(true);
  }, []);

  const onSwitchView = useCallback(
    (viewMode: string) => () => {
      setViewMode(viewMode);
    },
    []
  );

  useEffect(() => {
    getReports({
      viewMode,
    });
  }, [getReports, viewMode]);

  return (
    <Box sx={{ height: "calc(100% - 64px)" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          ml: 4,
          mr: 4,
          mt: 6,
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          My Reports
        </Typography>
        <Button
          size="small"
          variant={viewMode === "active" ? "contained" : "text"}
          sx={{ ml: 4 }}
          onClick={onSwitchView("active")}
        >
          Active
        </Button>
        <Button
          size="small"
          variant={viewMode === "archived" ? "contained" : "text"}
          onClick={onSwitchView("archived")}
        >
          Archived
        </Button>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onNewReportModal}
          sx={{ ml: "auto" }}
        >
          New Report
        </Button>
      </Box>
      {fetchingReports ? (
        <Box textAlign="center" p={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{ height: "calc(100% - 37px)", overflowY: "auto", px: 4, pb: 2 }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            {!!reportsData &&
              Object.entries(reportsData).map(
                ([company, reports]: [string, any], index: number) => (
                  <ReportTabContainer
                    key={`${company}-${index}`}
                    companyName={company}
                    reports={reports}
                    viewMode={viewMode}
                  />
                )
              )}
          </Box>
          {newReportModal && (
            <NewReportModal
              open={newReportModal}
              onClose={() => showNewReportModal(false)}
            />
          )}
        </Box>
      )}
    </Box>
  );
});

ReportsContainer.displayName = "ReportsContainer";

export default ReportsContainer;
