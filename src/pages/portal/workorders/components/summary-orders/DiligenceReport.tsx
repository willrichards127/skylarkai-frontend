import React, { memo, useCallback, useState, useMemo } from "react";
import { IconButton, Box, Tabs, Tab, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const DiligenceReport = memo(
  ({
    content,
    onEdit,
  }: {
    content: Record<string, any>;
    onEdit: () => void;
  }) => {
    const mainReports = useMemo(() => Object.keys(content), [content]);
    console.log(content, mainReports, "hey");

    const [selectedMainReport, setSelectedMainReport] = useState<string>(
      mainReports[0]
    );

    const onChangeMainReport = useCallback(
      (_: React.SyntheticEvent, newValue: string) => {
        setSelectedMainReport(newValue);
      },
      []
    );

    return (
      <Box sx={{ flex: 1 }}>
        <Box sx={{ p: 2, borderRadius: 2, bgcolor: "secondary.main" }}>
          <Tabs
            value={selectedMainReport}
            onChange={onChangeMainReport}
            variant="scrollable"
            scrollButtons="auto"
          >
            {mainReports.map((report) => (
              <Tab key={report} value={report} label={report} />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ my: 2, display: "flex", flexWrap: "wrap", gap: 2 }}>
          {Object.entries(content[selectedMainReport]).map(
            ([reportName, categories]: [string, any]) => (
              <Box
                key={reportName}
                sx={{
                  maxWidth: 400,
                  minWidth: 320,
                  borderRadius: 2,
                  pl: 4,
                  pr: 6,
                  py: 4,
                  bgcolor: "secondary.main",
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{ position: "absolute", top: 4, right: 4 }}
                  onClick={onEdit}
                >
                  <BorderColorIcon sx={{fontSize: 18}}/>
                </IconButton>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  {reportName}
                </Typography>
                <ul style={{ paddingLeft: 16 }}>
                  {categories.map((category: string) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              </Box>
            )
          )}
        </Box>
      </Box>
    );
  }
);

DiligenceReport.displayName = "DiligenceReport";
