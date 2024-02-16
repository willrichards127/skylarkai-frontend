import { memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { WorkOrderHeader } from "./WorkOrderHeader";

import { useGetWorkOrderQuery } from "../../../../redux/services/workOrderApi";

const CompletedOrderPanel = memo(
  ({
    orderId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    companyId,
    companyName,
    workOrderName,
  }: {
    orderId: string;
    companyId: string;
    companyName: string;
    workOrderName: string;
  }) => {
    const navigate = useNavigate();
    const { isLoading, data } = useGetWorkOrderQuery({ workOrderId: orderId });
    const reports = useMemo(() => {
      if (!data) return [];
      return Object.entries(data.tasks["Diligence Reports"]).reduce(
        (pv: any, [k, v]: any) => {
          for (const subreport of Object.keys(v)) {
            pv.push({ report: k, subreport });
          }
          return pv;
        },
        []
      );
    }, [data]);
    /** FIXME: React Navigate */
    const onViewReport = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (report: string, subreport: string) => {
        navigate(
          `/portal/reports/97?reportType=marketanalysis&setupId=16&viewMode=active`
        );
      },
      [navigate]
    );

    return (
      <Box
        sx={{ height: "100%", bgcolor: "secondary.dark", position: "relative" }}
      >
        <WorkOrderHeader
          isLoading={isLoading}
          orderName={workOrderName!}
          companyName={companyName}
          viewMode="completed"
          configDate={isLoading ? "" : data.updated_at}
        />
        <Box sx={{ px: 18, py: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5">Report Configured</Typography>
            <Box mr="auto" />
            <TextField
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              autoComplete="off"
              size="small"
              variant="outlined"
              sx={{ mr: 2, "& .MuiInputBase-root": { minWidth: 320 } }}
            />
            <Button variant="contained" startIcon={<FilterListIcon />}>
              Filter
            </Button>
          </Box>
          <Box
            sx={{
              height: 400,
              overflowY: "auto",
              mt: 2,
              bgcolor: "black",
              borderRadius: 2,
              p: 7,
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            {!isLoading &&
              reports.length &&
              reports.map(
                ({
                  report,
                  subreport,
                }: {
                  report: string;
                  subreport: string;
                }) => (
                  <Box
                    key={report}
                    sx={{
                      borderRadius: 1,
                      bgcolor: "secondary.dark",
                      p: 2,
                      width: 480,
                      height: "fit-content",
                    }}
                  >
                    <Typography variant="body1" fontWeight="bold" gutterBottom>
                      {report}
                    </Typography>
                    <Box fontSize={14} mb={1}>
                      {subreport}
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => onViewReport(report, subreport)}
                    >
                      View Report
                    </Button>
                  </Box>
                )
              )}
          </Box>
        </Box>
      </Box>
    );
  }
);

CompletedOrderPanel.displayName = "CompletedOrderPanel";
export default CompletedOrderPanel;
