import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SetupsContainer from "./components/SetupsContainer";
import { useCallback, useState } from "react";

export default function SetupsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const unitName = searchParams.get("unitName");

  const [viewMode, setViewMode] = useState<string>("active");

  const onSwitchView = useCallback(
    (viewMode: string) => () => {
      setViewMode(viewMode);
    },
    []
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ display: "flex", gap: 2, p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Small Language Models
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
        <Box mr="auto" />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            navigate(
              `/portal/setups/new?unitId=${params.unitId}&unitName=${unitName}&type=${type}`
            )
          }
          sx={{ ml: "auto" }}
        >
          New SLM
        </Button>
      </Box>

      <SetupsContainer viewMode={viewMode} />
    </Box>
  );
}
