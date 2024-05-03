import { useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import { AnalysisIcon, ToolsIcon } from "../../components/Svgs";

export const Layout = ({
  unitId,
  unitName,
  type,
}: {
  unitId: number;
  unitName: string;
  type: string;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedTab = useMemo(() => {
    if (!location.pathname) return "reports";
    if (location.pathname.includes("reports")) return "reports";
    if (location.pathname.includes("vdrs")) return "vdrs";
    return "setups";
  }, [location.pathname]);

  const onChangeTab = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      navigate(
        `/portal/units/${unitId}/${newValue}?unitName=${unitName}&type=${type}`
      );
    },
    [navigate, unitName, type, unitId]
  );

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={selectedTab}
        onChange={onChangeTab}
        sx={{
          "&.MuiTabs-root": {
            height: 56,
          },
        }}
      >
        <Tab
          icon={<AnalysisIcon />}
          label={<Box ml={2}>Reports</Box>}
          value="reports"
          iconPosition="start"
        />
        <Tab
          icon={<ToolsIcon />}
          label={<Box ml={2}>Small Language Models</Box>}
          value="setups"
          iconPosition="start"
        />
        <Tab
          icon={<CloudSyncIcon sx={{ color: "white" }} />}
          label={<Box ml={1}>Virtual Data Rooms</Box>}
          value="vdrs"
          iconPosition="start"
        />
      </Tabs>
    </Box>
  );
};
