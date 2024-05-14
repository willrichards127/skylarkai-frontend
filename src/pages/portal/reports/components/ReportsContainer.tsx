import { memo, useCallback, useState, useMemo, useEffect } from "react";
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
import { useNotification } from "../../../../shared/socket/NotificationProvider";
import { getDate } from "../../../../shared/utils/parse";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import { useLazyGetTaskStatusQuery } from "../../../../redux/services/transcriptAPI";
import { TemplateViewModal } from "../../../../components/modals/TemplateViewModal";

const ReportsContainer = memo(() => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");
  const navigate = useNavigate();

  const { newReporting } = useNotification();
  const [viewMode, setViewMode] = useState<string>("active");
  const [selectedExecute, setSelectedExecute] = useState<any>(null);
  // const [newReportModal, showNewReportModal] = useState<boolean>(false);
  const {
    isFetching: fetchingReports,
    data: reports,
    refetch,
  } = useGetReportsByUnitQuery({ unitId: +params.unitId!, viewMode });

  const [deleteReport] = useDeleteReportMutation();
  const [markReport] = useMarkReportMutation();
  const [getTaskStatus] = useLazyGetTaskStatusQuery();
  // const onNewReportModal = useCallback(() => {
  //   showNewReportModal(true);
  // }, []);

  useEffect(() => {
    if (newReporting) {
      refetch();
    }
  }, [newReporting]);

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

  const onCard = useCallback(
    (
      id: string,
      setupId: number,
      reportName: string,
      executing: boolean = false
    ) => {
      if (executing) {
        getTaskStatus({ task_id: id })
          .unwrap()
          .then((res) => {
            console.log("=====", res);
            const report = reports.executing.find((r: any) => r.task_id === id);
            if (report) {
              setSelectedExecute(report.data.report_data);
            }
          });
      } else {
        navigate(
          `/portal/reports/${id}?unitId=${params.unitId}&unitName=${unitName}&type=${type}&reportName=${reportName}&setupId=${setupId}&viewMode=${viewMode}`
        );
      }
    },
    [navigate, params, unitName, type, viewMode, reports]
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
          {[...reports.reports]
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((card: any) => (
              <ReportCard
                key={`generated-${card.id}`}
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
          {[...reports.executing]
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((card: any) => (
              <ReportCard
                executing
                key={`executing-${card.task_id}`}
                id={card.task_id}
                label={
                  REPORTS_DICT[card.data["report_data"]["title"]]?.label ||
                  card.data["report_data"]["title"]
                }
                updatedAt={getDate(new Date(card.created_at))}
                width={350}
                onCard={() =>
                  onCard(
                    card.task_id,
                    card.data["graph_id"],
                    card.data["report_data"]["title"],
                    true
                  )
                }
              />
            ))}
          {!!selectedExecute && (
            <TemplateViewModal
              open={!!selectedExecute}
              onClose={() => setSelectedExecute(null)}
              data={selectedExecute}
            />
          )}
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
