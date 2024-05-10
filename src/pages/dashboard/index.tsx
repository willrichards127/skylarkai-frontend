import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  colors,
  Box,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Chip,
  Button,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import moment from "moment";
import { ColDef } from "ag-grid-community";
import AGTable from "../../components/agTable/AGTable";
import { useGetPersonasQuery } from "../../redux/services/userAPI";
import { useGetReportsByTenantQuery } from "../../redux/services/reportApi";
import { getUniques } from "../../shared/utils/basic";

const reviewStatusDict: Record<number, any> = {
  0: {
    label: "Requested",
    color: colors.red[500],
  },
  1: {
    label: "Reviewed",
    color: colors.green[500],
  },
  2: {
    label: "Need to update",
    color: colors.orange[500],
  },
};

const personaDict: Record<number, any> = {
  1: {
    name: "Analyst",
    color: colors.green[500],
  },
  2: {
    name: "Partner",
    color: colors.pink[500],
  },
  3: {
    name: "Target",
    color: colors.brown[500],
  },
  5: {
    name: "Admin",
    color: colors.blue[500],
  },
};

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

const filtering = (
  rows: any[],
  filters: {
    analyst: string;
    target_company: string;
    duration: number;
  }
) => {
  let filtered = [...rows];
  if (filters.analyst) {
    filtered = filtered.filter((row) => row.username === filters.analyst);
  }
  if (filters.target_company) {
    filtered = filtered.filter(
      (row) => row.target_company === filters.target_company
    );
  }
  filtered = filtered.filter(
    (row) =>
      moment(row.created_at) >= moment().subtract(filters.duration, "days")
  );
  return filtered;
};

const DashboardPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<{
    analyst: string;
    target_company: string;
    duration: number;
  }>({
    analyst: "",
    target_company: "",
    duration: 7,
  });
  const { isLoading: loadingPersonas, data: personas } = useGetPersonasQuery();
  const { isLoading: loadingReports, data: reports } =
    useGetReportsByTenantQuery(
      { viewMode: "active" },
      {
        skip: loadingPersonas,
      }
    );

  const onAction = useCallback(
    (row: Record<string, any>) => {
      navigate(
        `/portal/reports/${row.id}?unitId=${row.company_id}&unitName=${
          row.target_company
        }&type=${row.type === 1 ? "companies" : "sectors"}&reportName=${
          row.report_name
        }&setupId=${row.graph_id}&viewMode=active`
      );
    },
    [navigate]
  );

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: "id", headerName: "Report ID", maxWidth: 100 },
      {
        field: "report_name",
        headerName: "Report Name",
        minWidth: 240,
        filter: "agTextColumnFilter",
      },
      {
        field: "target_company",
        headerName: "Target Company",
        filter: "agTextColumnFilter",
      },
      {
        field: "username",
        headerName: "Reporter",
        filter: "agTextColumnFilter",
      },
      {
        field: "email",
        headerName: "Email",
        filter: "agTextColumnFilter",
      },
      {
        field: "persona",
        headerName: "Persona",
        filter: "agTextColumnFilter",
        cellRenderer: (params: any) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "42px",
            }}
          >
            <Chip
              size="small"
              label={personaDict[params.data.persona_id].name}
              sx={{
                bgcolor: personaDict[params.data.persona_id].color,
                "&.MuiChip-root": {
                  borderRadius: 1,
                  height: 20,
                },
              }}
            />
          </Box>
        ),
      },
      {
        field: "review_status",
        headerName: "Status",
        filter: "agTextColumnFilter",
        cellRenderer: (params: any) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "42px",
            }}
          >
            <Chip
              size="small"
              label={reviewStatusDict[params.data.review_status].label}
              sx={{
                fontSize: 12,
                "&.MuiChip-root": { width: 120 },
                color: "white",
                bgcolor: reviewStatusDict[params.data.review_status].color,
              }}
            />
          </Box>
        ),
      },
      {
        field: "created_at",
        headerName: "Created At",
        filter: "agDateColumnFilter",
        valueFormatter: (params: any) =>
          new Date(params.value).toLocaleString(),
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
              {params.data.review_status !== 1 && (
                <Button
                  size="small"
                  variant="contained"
                  color={"info"}
                  onClick={() => onAction(params.data as Record<string, any>)}
                >
                  View
                </Button>
              )}
            </Box>
          );
        },
      },
    ],
    [onAction]
  );

  const filteredReports = useMemo(() => {
    if (!reports?.length) return [];
    return filtering(
      reports.map((report: any) => ({
        ...report,
        report_name: report.report_metadata.reportname,
        persona: (personas || []).find(
          (persona) => persona.id === report.persona_id
        )?.name,
      })),
      filters
    );
  }, [reports, personas, filters]);

  return (
    <Box p={4}>
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Dashboard
          </Typography>
          <Box mr="auto" />
          <Autocomplete
            options={getUniques(
              filteredReports.map((report: any) => report.username)
            )}
            getOptionLabel={(option) => option}
            value={filters.analyst}
            onChange={(
              _: React.SyntheticEvent<Element, Event>,
              newValue: string | null
            ) => setFilters((prev) => ({ ...prev, analyst: newValue || "" }))}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Analyst" />
            )}
            sx={{ minWidth: 320 }}
          />
          <Autocomplete
            options={getUniques(
              filteredReports.map((report: any) => report.target_company)
            )}
            getOptionLabel={(option) => option}
            value={filters.target_company}
            onChange={(
              _: React.SyntheticEvent<Element, Event>,
              newValue: string | null
            ) =>
              setFilters((prev) => ({
                ...prev,
                target_company: newValue || "",
              }))
            }
            renderInput={(params) => (
              <TextField {...params} size="small" label="Target Company" />
            )}
            sx={{ minWidth: 320 }}
          />
          <TextField
            size="small"
            label="Select Date"
            select
            value={filters.duration}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setFilters((prev) => ({ ...prev, duration: +e.target.value }))}
            sx={{ minWidth: 320 }}
          >
            {durations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Generated Reports
        </Typography>
        {loadingReports || loadingPersonas ? (
          <Box p={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Box height={740}>
            <AGTable columnDefs={columnDefs} rowData={filteredReports} />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default DashboardPage;
