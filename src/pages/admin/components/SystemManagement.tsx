import { useState, useCallback, useMemo } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  GridProps,
  CircularProgress,
} from "@mui/material";
import {
  useGetDashboardQuery,
  useLazyGetGraphsQuery,
  useLazyGetReportsQuery,
  useLazyGetUnitsQuery,
  useLazyGetVDRsQuery,
} from "../../../redux/services/adminApi";
import AGTable from "../../../components/agTable/AGTable";
import { ColDef } from "ag-grid-community";
import moment from "moment";
import { getHumanableDuration } from "../../../shared/utils/basic";
import { convertUtcToLocal } from "../../../shared/utils/dateUtils";
// import { useGetUnitsQuery } from "../../../redux/services/setupApi";

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

  const { data: totalData } = useGetDashboardQuery();
  const [getUnits, { data: units, isFetching: isUnitFetching }] =
    useLazyGetUnitsQuery();
  const [getReports, { data: reports, isFetching: isReportFetching }] =
    useLazyGetReportsQuery();
  const [getGraphs, { data: graphs, isFetching: isGraphFetching }] =
    useLazyGetGraphsQuery();
  const [getVDRs, { data: vdrs, isFetching: isVDRFetching }] =
    useLazyGetVDRsQuery();

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
              valueFormatter: (params: any) =>
                convertUtcToLocal(params.value),
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
        : currentTarget === "report"
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
              field: "created_at",
              headerName: "Created At",
              filter: "agDateColumnFilter",
              valueFormatter: (params: any) =>
                convertUtcToLocal(params.value),
            },
            {
              field: "duration",
              headerName: "Executing duration",
              valueFormatter: (params: any) => {
                if (params.value) {
                  return getHumanableDuration(moment.duration(params.value, "seconds"));
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
              field: "ingested_count",
              headerName: "Ingested files",
              align: "left",
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
      : currentTarget === "graph"
      ? graphs || []
      : currentTarget === "vdr"
      ? vdrs || []
      : [];
  }, [currentTarget, graphs, reports, units, vdrs]);

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

  const onGraph = () => {
    setCurrentTarget("graph");
    getGraphs();
  };

  const onVDR = () => {
    setCurrentTarget("vdr");
    getVDRs();
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
            lg={3}
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
            lg={3}
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
        </Grid>
        {currentTarget ? (
          <Box pt={4} height={800}>
            <Box fontWeight="bold" mb={2}>
              {currentTarget === "company"
                ? "Created companies"
                : currentTarget === "sector"
                ? "Created sectors"
                : currentTarget === "report"
                ? "Genreated reports"
                : currentTarget === "graph"
                ? "Created SLMs"
                : currentTarget === "vdr"
                ? "Created VDRs"
                : ""}
              :
            </Box>
            {isUnitFetching ||
            isReportFetching ||
            isGraphFetching ||
            isVDRFetching ? (
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
    </Box>
  );
};
