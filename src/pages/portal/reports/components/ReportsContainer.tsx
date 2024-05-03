import { memo, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import { NewReportModal } from "./NewReportModal";
import { ReportTabContainer } from "./ReportTabContainer";
import { useGetReportsQuery } from "../../../../redux/services/reportApi";

const ReportsContainer = memo(() => {
  const params = useParams();

  const [viewMode, setViewMode] = useState<string>("active");
  // const [newReportModal, showNewReportModal] = useState<boolean>(false);
  const { isFetching: fetchingReports, data: reports } = useGetReportsQuery(
    { unitId: +params.unitId!, viewMode }
  );

  // const onNewReportModal = useCallback(() => {
  //   showNewReportModal(true);
  // }, []);

  const onSwitchView = useCallback(
    (viewMode: string) => () => {
      setViewMode(viewMode);
    },
    []
  );

  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Reports
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
          // onClick={onNewReportModal}
          disabled
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
        <Box sx={{ height: "calc(100% - 37px)", overflowY: "auto", p: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            {!!reports?.length && (
              <ReportTabContainer reports={reports} viewMode={viewMode} />
            )}
          </Box>
          {/* {newReportModal && (
            <NewReportModal
              open={newReportModal}
              onClose={() => showNewReportModal(false)}
            />
          )} */}
        </Box>
      )}
    </Box>
  );
});

export default ReportsContainer;
