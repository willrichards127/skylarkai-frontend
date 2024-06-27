import { useState, useCallback, useMemo, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  GridProps,
  CircularProgress,
  Button,
  IconButton,
} from "@mui/material";
import {
  useGetDashboardQuery,
  useLazyGetGeneratedReportBySetupQuery,
  useLazyGetGraphsQuery,
  useLazyGetReportsQuery,
  useLazyGetIngestedFilesBySetupQuery,
  useLazyGetUnitsQuery,
  useLazyGetVDRsQuery,
  useLazyGetExecutingReportsQuery,
  useLazyGetTokenCountsQuery,
} from "../../../redux/services/adminApi";
import AGTable from "../../../components/agTable/AGTable";
import { ColDef } from "ag-grid-community";
import moment from "moment";
import { getHumanableDuration } from "../../../shared/utils/basic";
import { convertUtcToLocal } from "../../../shared/utils/dateUtils";
import { TemplateViewModal } from "../../../components/modals/TemplateViewModal";
import {
  useLazyGetTaskExecutionResultStatusQuery,
  useLazyGetTaskExecutionTimeStatusQuery,
} from "../../../redux/services/transcriptAPI";
import { IExecutionSectionDetail } from "../../../redux/interfaces";
import { useLazyGetExecutionDetailQuery } from "../../../redux/services/reportApi";
// import { useGetUnitsQuery } from "../../../redux/services/setupApi";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { CitationModal } from "../../../components/modals/CitationModal";

const durations = [
  {
    label: "Today",
    value: 0,
  },
  {
    label: "Yesterday",
    value: 1,
  },
  {
    label: "Last 7 Days",
    value: 7,
  },
  {
    label: "Last 30 Days",
    value: 30,
  },
  {
    label: "Last 60 Days",
    value: 60,
  },
  {
    label: "Last 90 Days",
    value: 90,
  },
];

const GridItem = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  item,
  selected,
  children,
  ...props
}: GridProps & { selected: boolean }) => {
  return (
    <Grid item {...props} sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: selected ? "#A9B6FF" : "black",
          color: selected ? "black" : "white",
          border: "2px solid #424242",
          "&.MuiBox-root:hover": { borderColor: "#292943" },
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

export const SystemManagement = () => {
  const [duration, setDuration] = useState<number>(7);
  const [currentTarget, setCurrentTarget] = useState<string>();
  const [previousTarget, setPreviousTarget] = useState<string>();
  const [selectedExecute, setSelectedExecute] = useState<any>(null);
  const [executingStatus, setExecutingStatus] = useState<{
    resultStatus: any;
    timeStatus: IExecutionSectionDetail[];
  }>();
  const [selectedSetupId, setSelectedSetupId] = useState<number>();
  const [selectedFileName, setSelectedFileName] = useState<string>();

  const { data: totalData } = useGetDashboardQuery();
  const [getUnits, { data: units, isFetching: isUnitFetching }] =
    useLazyGetUnitsQuery();
  const [getReports, { data: reports, isFetching: isReportFetching }] =
    useLazyGetReportsQuery();
  const [
    getExecutingReports,
    { data: executingReports, isFetching: isExecutingReportFetching },
  ] = useLazyGetExecutingReportsQuery();
  const [getGraphs, { data: graphs, isFetching: isGraphFetching }] =
    useLazyGetGraphsQuery();
  const [getVDRs, { data: vdrs, isFetching: isVDRFetching }] =
    useLazyGetVDRsQuery();
  const [getExecutionDetail] = useLazyGetExecutionDetailQuery();
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
  const [
    getIngestedFiles,
    { data: ingestedFiles, isFetching: isSetupDetailFetching },
  ] = useLazyGetIngestedFilesBySetupQuery();
  const [
    getSetupReports,
    { data: subReports, isFetching: isSubReportFetching },
  ] = useLazyGetGeneratedReportBySetupQuery();

  const [getTokens, { data: tokens, isFetching: isTokenFetching }] =
    useLazyGetTokenCountsQuery();

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

  const columns = useMemo<ColDef[]>(
    () =>
      currentTarget === "company" || currentTarget === "sector"
        ? [
            { field: "id", headerName: "Company ID" },
            {
              field: "name",
              headerName: "Company Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "username",
              headerName: "Creator",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "created_at",
              headerName: "Created At",
              filter: "agDateColumnFilter",
              valueFormatter: (params: any) => convertUtcToLocal(params.value),
            },
            {
              field: "report_count",
              headerName: "Reports",
              filter: "agNumberColumnFilter",
            },
            {
              field: "graph_count",
              headerName: "SLMs",
              filter: "agNumberColumnFilter",
            },
            {
              field: "vdr_count",
              headerName: "VDRs",
              filter: "agNumberColumnFilter",
            },
            {
              field: "is_active",
              headerName: "Status",
              cellDataType: false,
              cellStyle: (params) => ({
                color: params.value ? "green" : "red",
              }),
              valueFormatter: (params: any) =>
                params.value ? "Active" : "Archive",
            },
          ]
        : currentTarget === "report" || currentTarget === "sub_report"
        ? [
            { field: "id", headerName: "Report ID" },
            {
              field: "name",
              headerName: "Report Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "username",
              headerName: "Creator",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "graph_name",
              headerName: "Graph Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "default_llm",
              headerName: "LLM",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "created_at",
              headerName: "Created At",
              filter: "agDateColumnFilter",
              valueFormatter: (params: any) => convertUtcToLocal(params.value),
            },
            {
              field: "duration",
              headerName: "Executing duration",
              valueFormatter: (params: any) => {
                if (params.value) {
                  return getHumanableDuration(
                    moment.duration(params.value, "seconds")
                  );
                }
                return "";
              },
            },
            {
              field: "is_active",
              headerName: "Status",
              cellDataType: false,
              cellStyle: (params) => ({
                color: params.value ? "green" : "red",
              }),
              valueFormatter: (params: any) =>
                params.value ? "Active" : "Archive",
            },
            {
              field: "actions",
              headerName: "Actions",
              cellRenderer: (params: any) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "42px",
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() =>
                        onReportView(
                          params.data.task_id,
                          params.data.base_query_id
                        )
                      }
                    >
                      Detail View
                    </Button>
                  </Box>
                );
              },
            },
          ]
        : currentTarget === "executing_report"
        ? [
            { field: "id", headerName: "Report ID" },
            {
              field: "report_name",
              headerName: "Report Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "username",
              headerName: "Creator",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "company_name",
              headerName: "Company Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "graph_name",
              headerName: "Graph Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "default_llm",
              headerName: "LLM",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "created_at",
              headerName: "Created At",
              filter: "agDateColumnFilter",
              valueFormatter: (params: any) => convertUtcToLocal(params.value),
            },
            {
              field: "actions",
              headerName: "Actions",
              cellRenderer: (params: any) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "42px",
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() =>
                        onReportView(
                          params.data.task_id,
                          params.data.base_query_id
                        )
                      }
                    >
                      Detail View
                    </Button>
                  </Box>
                );
              },
            },
          ]
        : currentTarget === "token"
        ? [
            { field: "id", headerName: "Report ID" },
            {
              field: "report_name",
              headerName: "Report Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "user_name",
              headerName: "Creator",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "llm_name",
              headerName: "LLM",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "type",
              headerName: "Type",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "total_token_count",
              headerName: "Token counts",
              align: "left",
              filter: "agNumberColumnFilter",
            },
            {
              field: "execution_date",
              headerName: "Executed At",
              filter: "agDateColumnFilter",
              valueFormatter: (params: any) => convertUtcToLocal(params.value),
            },
          ]
        : currentTarget === "graph"
        ? [
            { field: "id", headerName: "SLM ID" },
            {
              field: "name",
              headerName: "SLM Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "username",
              headerName: "Creator",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "is_active",
              headerName: "Status",
              cellDataType: false,
              cellStyle: (params) => ({
                color: params.value ? "green" : "red",
              }),
              valueFormatter: (params: any) =>
                params.value ? "Active" : "Archive",
            },
            {
              field: "actions",
              headerName: "Actions",
              cellRenderer: (params: any) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "42px",
                      gap: 1,
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => onGraphDetail(params.data.id)}
                    >
                      Ingested Files
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => onGraphReports(params.data.id)}
                    >
                      Generated Reports
                    </Button>
                  </Box>
                );
              },
            },
          ]
        : currentTarget === "vdr"
        ? [
            { field: "id", headerName: "VDR ID" },
            {
              field: "name",
              headerName: "VDR Name",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "username",
              headerName: "Creator",
              align: "left",
              filter: "agTextColumnFilter",
            },
            {
              field: "ingested_files",
              headerName: "Ingested files",
              align: "left",
              filter: "agNumberColumnFilter",
              valueFormatter: (params: any) => params.value?.count,
            },
            {
              field: "is_active",
              headerName: "Status",
              cellDataType: false,
              cellStyle: (params) => ({
                color: params.value ? "green" : "red",
              }),
              valueFormatter: (params: any) =>
                params.value ? "Active" : "Archive",
            },
            {
              field: "actions",
              headerName: "Actions",
              cellRenderer: (params: any) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "42px",
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => onGraphDetail(params.data.id)}
                    >
                      Ingested Files
                    </Button>
                  </Box>
                );
              },
            },
          ]
        : currentTarget === "file"
        ? [
            {
              field: "id",
              headerName: "ID",
              maxWidth: 90,
            },
            {
              field: "file_name",
              headerName: "File Name",
              align: "left",
              filter: "agTextColumnFilter",
              minWidth: 500,
              cellRenderer: (params: any) => {
                return (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "tomato",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => onFileView(params.value)}
                  >
                    {params.value}
                  </Typography>
                );
              },
            },
            {
              field: "ingested_at",
              headerName: "Ingested At",
              filter: "agDateColumnFilter",
              valueFormatter: (params: any) => convertUtcToLocal(params.value),
            },
            {
              field: "uploaded_at",
              headerName: "Uploaded At",
              filter: "agDateColumnFilter",
              valueFormatter: (params: any) => convertUtcToLocal(params.value),
            },
          ]
        : [],
    [currentTarget]
  );

  const rows = useMemo(() => {
    return currentTarget === "company" || currentTarget === "sector"
      ? units || []
      : currentTarget === "report"
      ? (reports || []).map((report: any) => {
          return {
            ...report,
            name: report?.report_metadata?.reportname || "",
            duration:
              report.completed_at && report.created_at
                ? moment
                    .duration(
                      moment(report.completed_at).diff(report.created_at)
                    )
                    .asSeconds()
                : null,
          };
        })
      : currentTarget === "sub_report"
      ? (subReports || []).map((report: any) => {
          return {
            ...report,
            name: report?.report_metadata?.reportname || "",
            duration:
              report.completed_at && report.created_at
                ? moment
                    .duration(
                      moment(report.completed_at).diff(report.created_at)
                    )
                    .asSeconds()
                : null,
          };
        })
      : currentTarget === "executing_report"
      ? executingReports || []
      : currentTarget === "graph"
      ? graphs || []
      : currentTarget === "vdr"
      ? vdrs || []
      : currentTarget === "file"
      ? (ingestedFiles || []).map((file: any, index: number) => ({
          id: index + 1,
          ...file,
        }))
      : currentTarget === "token"
      ? (tokens || []).map((token: any, index: number) => ({
          id: index + 1,
          ...token,
        }))
      : [];
  }, [
    currentTarget,
    executingReports,
    graphs,
    ingestedFiles,
    reports,
    subReports,
    tokens,
    units,
    vdrs,
  ]);

  const onChangeDuration = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDuration(+e.target.value),
    []
  );

  const onCompany = () => {
    setCurrentTarget("company");
    getUnits({ type: 1 });
  };

  const onSector = () => {
    setCurrentTarget("sector");
    getUnits({ type: 2 });
  };

  const onReport = () => {
    setCurrentTarget("report");
    getReports();
  };

  const onExecutingReport = () => {
    setCurrentTarget("executing_report");
    getExecutingReports();
  };

  const onGraph = () => {
    setCurrentTarget("graph");
    getGraphs();
  };

  const onVDR = () => {
    setCurrentTarget("vdr");
    getVDRs();
  };

  const onToken = () => {
    setCurrentTarget("token");
    getTokens();
  }

  const onReportView = useCallback(
    async (taskId: string | null, baseQueryId: number | null) => {
      if (taskId && baseQueryId) {
        const executionData = await getExecutionDetail({
          baseQeuryId: baseQueryId,
        }).unwrap();
        if (executionData && executionData.task_id) {
          setSelectedExecute({
            task_id: executionData.task_id,
            data: executionData.input_json,
          });
          getTaskTimeStatus({ task_id: taskId });
          getTaskResultStatus({ task_id: taskId });
          setPreviousTarget(currentTarget);
        }
      }
    },
    [currentTarget, getExecutionDetail, getTaskResultStatus, getTaskTimeStatus]
  );

  const onGraphDetail = useCallback(
    async (setupId: number) => {
      setPreviousTarget(currentTarget);
      setCurrentTarget("file");
      getIngestedFiles({ setupId: setupId });
      setSelectedSetupId(setupId);
    },
    [currentTarget, getIngestedFiles]
  );

  const onGraphReports = useCallback(
    async (setupId: number) => {
      getSetupReports({ setupId: setupId });
      setPreviousTarget(currentTarget);
      setCurrentTarget("sub_report");
    },
    [currentTarget, getSetupReports]
  );

  const onFileView = async (fileName: string) => {
    setSelectedFileName(fileName);
  };

  return (
    <Box sx={{ height: "100%", bgcolor: "secondary.dark" }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Box mr="auto" />
        <TextField
          size="small"
          label="Select Duration"
          select
          value={duration}
          onChange={onChangeDuration}
          sx={{ minWidth: 320 }}
        >
          {durations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={2}
            selected={currentTarget == "company"}
            onClick={onCompany}
          >
            <Typography variant="body2">Total Companies</Typography>
            <Typography variant="h4">{totalData?.companies || "_"}</Typography>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={2}
            selected={currentTarget == "sector"}
            onClick={onSector}
          >
            <Typography variant="body2">Total Sectors</Typography>
            <Typography variant="h4">{totalData?.sectors || "_"}</Typography>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={2}
            selected={currentTarget == "report"}
            onClick={onReport}
          >
            <Typography variant="body2">Total Reports</Typography>
            <Typography variant="h4">{totalData?.reports || "_"}</Typography>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={2}
            selected={currentTarget == "executing_report"}
            onClick={onExecutingReport}
          >
            <Typography variant="body2">Executing Reports</Typography>
            <Typography variant="h4">
              {totalData?.running_reports || "_"}
            </Typography>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={2}
            selected={currentTarget == "graph"}
            onClick={onGraph}
          >
            <Typography variant="body2">Total SLMs</Typography>
            <Typography variant="h4">{totalData?.graphs || "_"}</Typography>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={2}
            selected={currentTarget == "vdr"}
            onClick={onVDR}
          >
            <Typography variant="body2">Total VDRs</Typography>
            <Typography variant="h4">{totalData?.vdrs || "_"}</Typography>
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            lg={2}
            selected={currentTarget == "token"}
            onClick={onToken}
          >
            <Typography variant="body2">Tokens</Typography>
            <Typography variant="h4">{totalData?.token_counts || "_"}</Typography>
          </GridItem>
        </Grid>
        {currentTarget ? (
          <Box pt={4} height={800}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
              mb={2}
            >
              {currentTarget === "sub_report" ||
                (currentTarget === "file" && (
                  <IconButton
                    aria-label="close"
                    onClick={() => {
                      setCurrentTarget(previousTarget);
                    }}
                  >
                    <ArrowBackIosNewIcon />
                  </IconButton>
                ))}
              <Box fontWeight="bold">
                {currentTarget === "company"
                  ? "Created companies"
                  : currentTarget === "sector"
                  ? "Created sectors"
                  : currentTarget === "report"
                  ? "Genreated reports"
                  : currentTarget === "sub_report"
                  ? "Genreated reports from SLM"
                  : currentTarget === "graph"
                  ? "Created SLMs"
                  : currentTarget === "vdr"
                  ? "Created VDRs"
                  : currentTarget === "token"
                  ? "Tokens"
                  : currentTarget === "file"
                  ? previousTarget === "graph"
                    ? "Ingested Files from SLM"
                    : "Ingested Files from VDR"
                  : ""}
                :
              </Box>
            </Box>
            {isUnitFetching ||
            isReportFetching ||
            isGraphFetching ||
            isVDRFetching ||
            isSubReportFetching ||
            isSetupDetailFetching ||
            isExecutingReportFetching ||
            isTokenFetching ? (
              <Box
                display={"flex"}
                justifyContent={"center"}
                width={"100%"}
                height={"100%"}
              >
                <CircularProgress size={48} />
              </Box>
            ) : (
              <AGTable columnDefs={columns} rowData={rows} />
            )}
          </Box>
        ) : null}
      </Box>
      {!!selectedExecute && (
        <TemplateViewModal
          open={!!selectedExecute}
          onClose={() => setSelectedExecute(null)}
          data={selectedExecute.data}
          status={executingStatus}
        />
      )}
      {selectedSetupId && !!selectedFileName && (
        <CitationModal
          open={!!selectedFileName}
          onClose={() => {
            setSelectedFileName(undefined);
          }}
          title={"File Preview"}
          data={{
            graph_id: selectedSetupId,
            analysis_type: "financial_diligence",
            filename: selectedFileName,
          }}
        />
      )}
    </Box>
  );
};
