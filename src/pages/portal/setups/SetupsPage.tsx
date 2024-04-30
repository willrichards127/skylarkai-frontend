import { Box, Typography, Button } from "@mui/material";
import SetupsContainer from "./components/SetupsContainer";
import { useCallback, useState } from "react";

export default function SetupsPage() {
  const [viewMode, setViewMode] = useState<string>("active");

  const onSwitchView = useCallback(
    (viewMode: string) => () => {
      setViewMode(viewMode);
    },
    []
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", pl: 6 }}
    >
      <Box sx={{ display: "flex", gap: 2 }} m={4}>
        <Typography variant="h6" fontWeight="bold">
          New Setup
        </Typography>
        <Button
          size="small"
          variant={viewMode === "active" ? "contained" : "text"}
          sx={{ ml: 4 }}
          onClick={onSwitchView("active")}
        >
          Active
        </Button>
        <Button
          size="small"
          variant={viewMode === "archived" ? "contained" : "text"}
          onClick={onSwitchView("archived")}
        >
          Archived
        </Button>
      </Box>

      <SetupsContainer hasNewCard viewMode={viewMode}/>
    </Box>
  );
}
