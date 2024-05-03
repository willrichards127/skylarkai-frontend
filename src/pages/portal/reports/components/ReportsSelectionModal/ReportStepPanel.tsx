import React, { useCallback, useMemo, useState } from "react";
import { Box, TextField, Typography, CircularProgress } from "@mui/material";
import { useGetReportsQuery } from "../../../../../redux/services/reportApi";

export const ReportStepPanel = ({
  companyId,
  onSelectedReport,
}: {
  companyId: number;
  onSelectedReport: (report: any) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const { isLoading, data: reports } = useGetReportsQuery({
    unitId: companyId,
    viewMode: "active",
  });

  const onChangeSearchText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  const onSelectReport = useCallback(
    (report: any) => {
      onSelectedReport(report);
    },
    [onSelectedReport]
  );

  const filteredReports = useMemo(
    () =>
      (reports || []).filter((report: any) =>
        report.report_metadata
          .reportname!.toLowerCase()
          .includes(searchText.toLocaleLowerCase())
      ),
    [reports, searchText]
  );

  return (
    <>
      <TextField
        value={searchText}
        onChange={onChangeSearchText}
        size="small"
        sx={{ minWidth: 480 }}
        label={"Search"}
        disabled={isLoading}
      />
      {isLoading ? (
        <Box sx={{ textAlign: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            px: 0.5,
            py: 2,
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            maxHeight: 640,
            overflowY: "auto",
          }}
        >
          {filteredReports.length > 0 ? (
            filteredReports.map((report: any) => (
              <Box
                key={report.id!}
                sx={{
                  p: 2,
                  bgcolor: "secondary.main",
                  borderRadius: 1,
                  width: 270,
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.25)",
                  },
                }}
                onClick={() => onSelectReport(report)}
              >
                <Typography variant="h6" fontWeight="bold">
                  {report.report_metadata.reportname!}
                </Typography>
                <Typography variant="body2" fontSize={13}>
                  Created At: {new Date(report.created_at).toLocaleString()}
                </Typography>
              </Box>
            ))
          ) : (
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                color: "grey",
                fontSize: 12,
                p: 3,
              }}
            >
              No Data Available
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
