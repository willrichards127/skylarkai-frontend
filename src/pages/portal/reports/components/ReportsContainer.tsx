import { memo, useCallback, useState, useMemo } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Box, Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import { NewReportModal } from "./NewReportModal";
import { ReportCard } from "./ReportCard";
import TabContainer from "../../../../components/TabContainer";
import {
  useGetReportsByUnitQuery,
  useDeleteReportMutation,
  useMarkReportMutation,
} from "../../../../redux/services/reportApi";
import { getDate } from "../../../../shared/utils/parse";
import { REPORTS_DICT } from "../../../../shared/models/constants";

const ReportsContainer = memo(() => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<string>("active");
  // const [newReportModal, showNewReportModal] = useState<boolean>(false);
  const { isFetching: fetchingReports, data: reports } =
    useGetReportsByUnitQuery({ unitId: +params.unitId!, viewMode });

  const [deleteReport] = useDeleteReportMutation();
  const [markReport] = useMarkReportMutation();

  // const onNewReportModal = useCallback(() => {
  //   showNewReportModal(true);
  // }, []);

  const moreItems = useMemo(
    () => [
      ...(viewMode === "archived"
        ? [
            {
              id: "mark_as_active",
              content: "Mark as active",
              clickable: true,
            },
          ]
        : [
            {
              id: "archive",
              content: "Archive",
              clickable: true,
            },
          ]),
    ],
    [viewMode]
  );

  const onSwitchViewMode = useCallback((mode: string) => {
    setViewMode(mode);
  }, []);

  const onMoreItem = useCallback(
    (cardId: string, menuItemId: string) => {
      if (menuItemId === "delete" || menuItemId === "archive") {
        deleteReport({ reportId: +cardId, viewMode });
      } else if (menuItemId === "mark_as_active") {
        markReport({ reportId: +cardId });
      }
    },
    [viewMode, deleteReport, markReport]
  );

  /** FIXME: React Navigate */
  const onCard = useCallback(
    (cardId: number, setupId: number, reportName: string) => {
      navigate(
        `/portal/reports/${cardId}?unitId=${params.unitId}&unitName=${unitName}&type=${type}&reportName=${reportName}&setupId=${setupId}&viewMode=${viewMode}`
      );
    },
    [navigate, params, unitName, type, viewMode]
  );

  return (
    <Box sx={{ height: "100%" }}>
      {fetchingReports ? (
        <Box textAlign="center" p={4}>
          <CircularProgress />
        </Box>
      ) : (
        <TabContainer
          headerHeight={37}
          viewMode={viewMode}
          onSwitchViewMode={onSwitchViewMode}
          suffixActionRenderer={
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              // onClick={onNewReportModal}
              disabled
              sx={{ ml: "auto" }}
            >
              New Report
            </Button>
          }
        >
          {[...reports]
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((card: any) => (
              <ReportCard
                key={card.id}
                id={card.id}
                label={
                  REPORTS_DICT[card.report_metadata.reportname]?.label ||
                  card.report_metadata.reportname
                }
                updatedAt={getDate(
                  new Date(card.created_at || card.executed_at)
                )}
                width={350}
                moreItems={moreItems}
                onMoreItem={(menuItemId) => onMoreItem(card.id, menuItemId)}
                onCard={() =>
                  onCard(
                    card.id,
                    card.graph_id,
                    card.report_metadata.reportname
                  )
                }
              />
            ))}
        </TabContainer>
      )}
      {/* {newReportModal && (
        <NewReportModal
          open={newReportModal}
          onClose={() => showNewReportModal(false)}
        />
      )} */}
    </Box>
  );
});

export default ReportsContainer;
