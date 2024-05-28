import React, { useCallback, useMemo, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useGetReportsByUnitQuery } from "../../../redux/services/reportApi";
import { useGetVDRsQuery } from "../../../redux/services/vdrApi";
import { uniqueArr } from "../../../shared/utils/basic";

export const FilesStepPanel = ({
  companyId,
  onClose,
  onStepBack,
  onApplied,
  isVDROnly,
}: {
  companyId: number;
  isVDROnly?: boolean;
  onStepBack: () => void;
  onClose: () => void;
  onApplied: (records: any[]) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectionType, setSelectionType] = useState<string>(
    isVDROnly ? "vdr" : "report"
  );
  const [selectedRecords, setSelectedRecords] = useState<any[]>([]);

  const { isLoading: loadingReports, data: reports } = useGetReportsByUnitQuery(
    {
      unitId: companyId,
      viewMode: "active",
      reportType: 1,
    },
    { skip: selectionType === "vdr" || isVDROnly }
  );

  const { isLoading: loadingVDRs, data: vdrs } = useGetVDRsQuery(
    {
      unitId: companyId,
      view_mode: "active",
    },
    { skip: selectionType === "report" }
  );

  const onChangeSearchText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  const onSelectRecord = useCallback((record: any) => {
    setSelectedRecords((prev) => {
      const recordNames = prev.map((item: any) => item.name);
      if (recordNames.includes(record.name)) {
        return prev.filter((item) => item.name !== record.name);
      }
      return [...prev, record];
    });
  }, []);

  const onApply = useCallback(() => {
    onApplied(selectedRecords);
  }, [onApplied, selectedRecords]);

  const filteredRecords = useMemo(() => {
    if (selectionType === "report") {
      return (reports?.reports || [])
        .filter((report: any) =>
          report.report_metadata
            .reportname!.toLowerCase()
            .includes(searchText.toLowerCase())
        )
        .map((report: any) => ({
          name: report.report_metadata.reportname,
          id: report.id,
          graph_id: report.graph_id,
          date: report.created_at,
        }));
    } else {
      const files = (vdrs || [])
        .map((vdr) =>
          vdr.files
            .filter((file) => file.ingested)
            .map((file) => ({
              graph_id: vdr.id,
              name: file.file_name,
              date: file.ingested_at,
            }))
        )
        .flat();

      if (files.length > 0) {
        return uniqueArr(files, ["name"]).filter((file: any) =>
          file.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      return [];
    }
  }, [reports, vdrs, searchText, selectionType]);

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <TextField
          value={searchText}
          onChange={onChangeSearchText}
          size="small"
          sx={{ minWidth: 480 }}
          label={"Search"}
          disabled={loadingReports || loadingVDRs}
        />
        <Box mr="auto" />
        {!isVDROnly && (
          <Button
            size="small"
            variant={selectionType === "report" ? "contained" : "text"}
            onClick={() => setSelectionType("report")}
          >
            Reports
          </Button>
        )}
        <Button
          size="small"
          variant={selectionType === "vdr" ? "contained" : "text"}
          onClick={() => setSelectionType("vdr")}
        >
          VDR Files
        </Button>
      </Box>
      {loadingReports || loadingVDRs ? (
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
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record: any) => (
              <Box
                key={record.id || record.name}
                sx={{
                  position: "relative",
                  p: 2,
                  bgcolor: "secondary.main",
                  borderRadius: 1,
                  width: 270,
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.25)",
                  },
                }}
                onClick={() => onSelectRecord(record)}
                title={record.name}
              >
                <Box sx={{ position: "absolute", top: 0, right: 4 }}>
                  {selectedRecords
                    .map((item) => item.name)
                    .includes(record.name) ? (
                    <CheckBoxIcon sx={{ fontSize: 14 }} />
                  ) : (
                    <CheckBoxOutlineBlankIcon sx={{ fontSize: 14 }} />
                  )}
                </Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  textOverflow="ellipsis"
                  maxWidth={300}
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {record.name}
                </Typography>
                <Typography variant="body2" fontSize={13}>
                  Date: {new Date(record.date).toLocaleString()}
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
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button onClick={onStepBack}>Back</Button>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onApply} disabled={!selectedRecords.length}>
          Apply
        </Button>
      </Box>
    </>
  );
};
