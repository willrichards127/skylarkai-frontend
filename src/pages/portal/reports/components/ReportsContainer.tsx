import { memo, useCallback, useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "../../../../redux/features/authSlice";
import { Box, CircularProgress } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { NewReportModal } from "./NewReportModal";
import { ReportCard } from "./ReportCard";
import TabContainer from "../../../../components/TabContainer";
import {
  useGetReportsByUnitQuery,
  useDeleteReportMutation,
  useMarkReportMutation,
  useLazyGetExecutionDetailQuery,
  useUpdateReportMutation,
  useDeleteExecutingMutation,
} from "../../../../redux/services/reportApi";
import { useNotification } from "../../../../shared/socket/NotificationProvider";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import {
  useLazyGetTaskExecutionResultStatusQuery,
  useLazyGetTaskExecutionTimeStatusQuery,
} from "../../../../redux/services/transcriptAPI";
import { TemplateViewModal } from "../../../../components/modals/TemplateViewModal";
import { IExecutionSectionDetail } from "../../../../redux/interfaces";
import { RenameReportModal } from "../../setups/components/RenameReportModal";
import { convertUtcToLocal } from "../../../../shared/utils/dateUtils";

const ReportsContainer = memo(({ reportType }: { reportType: number }) => {
  const { user } = useSelector(currentUser);
  const { sys_graph_id } = useSelector((state: any) => state.userAuthSlice);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");
  const navigate = useNavigate();

  const { lastNotification } = useNotification();
  const [viewMode, setViewMode] = useState<string>("active");
  const [selectedExecute, setSelectedExecute] = useState<any>(null);
  const [executingStatus, setExecutingStatus] = useState<{
    resultStatus: any;
    timeStatus: IExecutionSectionDetail[];
  }>();
  const [selectedReportId, setSelectedReportId] = useState<number>();

  // const [newReportModal, showNewReportModal] = useState<boolean>(false);
  const {
    isFetching: fetchingReports,
    data: reports,
    refetch: refetchReports,
  } = useGetReportsByUnitQuery({
    unitId: +params.unitId!,
    viewMode: viewMode === "general" ? "active" : viewMode,
    reportType,
  });

  const [deleteReport] = useDeleteReportMutation();
  const [markReport] = useMarkReportMutation();
  const [
    getTaskResultStatus,
    {
      currentData: statusResultData,
      isSuccess: isStatusResultSuccess,
      isFetching: isStatusResultFetching,
    },
  ] = useLazyGetTaskExecutionResultStatusQuery();
  const [
    getTaskTimeStatus,
    {
      currentData: statusTimeData,
      isSuccess: isStatusTimeSuccess,
      isFetching: isStatusTimeFetching,
    },
  ] = useLazyGetTaskExecutionTimeStatusQuery();
  const [getExecutionDetail] = useLazyGetExecutionDetailQuery();
  const [updateReport] = useUpdateReportMutation();
  const [deleteExecutingReport] = useDeleteExecutingMutation();
  // const onNewReportModal = useCallback(() => {
  //   showNewReportModal(true);
  // }, []);

  useEffect(() => {
    if (
      lastNotification &&
      lastNotification.event_type === "report_completed"
    ) {
      refetchReports();
    }
  }, [lastNotification, refetchReports]);

  // useEffect(() => {
  //   if (
  //     lastNotification &&
  //     lastNotification.event_type === "report_completed" &&
  //     selectedExecute
  //   ) {
  //     getTaskStatus({ task_id: selectedExecute.task_id });
  //   }
  // }, [lastNotification, selectedExecute]);

  useEffect(() => {
    if (
      !isStatusResultFetching &&
      isStatusResultSuccess &&
      statusResultData &&
      !isStatusTimeFetching &&
      isStatusTimeSuccess &&
      statusTimeData
    ) {
      const resultStatus =
        statusResultData.result?.base_query?.sections ||
        statusResultData.result?.execution_data?.base_query?.sections;
      const timeStatus = statusTimeData.sections;
      setExecutingStatus({
        resultStatus,
        timeStatus,
      });
    }
  }, [
    statusResultData,
    isStatusResultSuccess,
    isStatusResultFetching,
    isStatusTimeFetching,
    isStatusTimeSuccess,
    statusTimeData,
  ]);

  useEffect(() => {
    if (isStatusResultFetching) {
      setExecutingStatus(undefined);
    }
  }, [isStatusResultFetching]);

  const generalMoreItems = useMemo(
    () =>
      user!.persona_id === 2
        ? []
        : [
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
                    id: "rename",
                    content: "Rename",
                    clickable: true,
                  },
                  {
                    id: "archive",
                    content: "Archive",
                    clickable: true,
                  },
                ].concat(
                  reportType !== 3
                    ? [
                        {
                          id: "detail",
                          content: "Detail",
                          clickable: true,
                        },
                      ]
                    : []
                )),
          ],
    [viewMode, user, reportType]
  );

  const executinMoreItems = useMemo(
    () => [
      {
        id: "delete",
        content: "Delete",
        clickable: true,
      },
    ],
    []
  );

  const onSwitchViewMode = useCallback((mode: string) => {
    setViewMode(mode);
  }, []);

  const onMoreItem = useCallback(
    async (cardId: string, menuItemId: string) => {
      if (menuItemId === "archive") {
        deleteReport({ reportId: +cardId, viewMode });
      } else if (menuItemId === "mark_as_active") {
        markReport({ reportId: +cardId });
      } else if (menuItemId === "detail") {
        const report = reports.reports.find((r: any) => r.id === +cardId);
        if (report && report.base_query_id) {
          const executionData = await getExecutionDetail({
            baseQeuryId: report.base_query_id,
          }).unwrap();
          if (executionData && executionData.task_id) {
            setSelectedExecute({
              task_id: executionData.task_id,
              data: executionData.input_json,
            });
            getTaskTimeStatus({ task_id: executionData.task_id });
            getTaskResultStatus({ task_id: executionData.task_id });
          }
        }
      } else if (menuItemId === "rename") {
        setSelectedReportId(+cardId);
      } else if (menuItemId === "delete") {
        await deleteExecutingReport({ taskId: cardId });
        refetchReports();
      }
    },
    [
      deleteReport,
      viewMode,
      markReport,
      reports,
      getExecutionDetail,
      getTaskTimeStatus,
      getTaskResultStatus,
      deleteExecutingReport,
      refetchReports,
    ]
  );

  const onCard = useCallback(
    (
      id: string,
      setupId: number,
      reportName: string,
      executing: boolean = false
    ) => {
      if (executing) {
        const report = reports.executing.find((r: any) => r.task_id === id);
        if (report) {
          setSelectedExecute({
            task_id: id,
            data: report.data.report_data,
          });
          getTaskTimeStatus({ task_id: id });
          getTaskResultStatus({ task_id: id });
        }
      } else {
        navigate(
          `/portal/reports/${id}?unitId=${params.unitId}&unitName=${unitName}&type=${type}&reportName=${reportName}&setupId=${setupId}&viewMode=${viewMode}`
        );
      }
    },
    [
      navigate,
      params,
      unitName,
      type,
      viewMode,
      reports,
      getTaskResultStatus,
      getTaskTimeStatus,
    ]
  );

  const onRename = async (id: number, newName: string) => {
    await updateReport({
      reportId: id,
      name: newName,
    }).unwrap();
  };

  const getReportName = (report: any) =>
    report
      ? REPORTS_DICT[report.report_metadata.reportname]?.label ||
        report.report_metadata.reportname
      : "";

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
          showGeneralTab={reportType === 1}
        >
          {[
            ...reports.reports.filter((report: any) =>
              viewMode === "active"
                ? report.graph_id !== sys_graph_id
                : viewMode === "general"
                ? report.graph_id === sys_graph_id
                : true
            ),
          ]
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((report: any) => (
              <ReportCard
                key={`generated-${report.id}`}
                id={report.id}
                reviewStatus={report.review_status}
                label={getReportName(report)}
                updatedAt={convertUtcToLocal(
                  report.created_at || report.executed_at,
                  "MMM D, YYYY"
                )}
                width={350}
                moreItems={generalMoreItems}
                llm={report?.llm}
                onMoreItem={(menuItemId) => onMoreItem(report.id, menuItemId)}
                onCard={() =>
                  onCard(
                    report.id,
                    report.graph_id,
                    report.report_metadata.reportname
                  )
                }
              />
            ))}
          {[
            ...reports.executing.filter(() =>
              viewMode === "active" ? true : false
            ),
          ]
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
                reviewStatus={card.review_status}
                label={
                  REPORTS_DICT[card.data["report_data"]["title"]]?.label ||
                  card.data["report_data"]["title"]
                }
                width={350}
                updatedAt={convertUtcToLocal(card.created_at, "MMM D, YYYY")}
                moreItems={executinMoreItems}
                onMoreItem={(menuItemId) =>
                  onMoreItem(card.task_id, menuItemId)
                }
                llm={card?.data?.report_data?.default_llm}
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
              data={selectedExecute.data}
              status={executingStatus}
            />
          )}
          {!!selectedReportId && (
            <RenameReportModal
              open={!!selectedReportId}
              onClose={() => setSelectedReportId(undefined)}
              onSaveName={onRename}
              data={{
                id: selectedReportId,
                name: getReportName(
                  reports.reports.find((r: any) => r.id === selectedReportId)
                ),
              }}
            />
          )}
        </TabContainer>
      )}
    </Box>
  );
});

export default ReportsContainer;
