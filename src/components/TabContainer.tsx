import React from "react";
import { Box, Button, Divider } from "@mui/material";

const TabContainer = ({
  viewMode,
  headerHeight = 0,
  onSwitchViewMode,
  prefixActionRenderer,
  suffixActionRenderer,
  children,
  hasDivider,
}: {
  viewMode: string;
  onSwitchViewMode: (tab: string) => void;
  prefixActionRenderer?: React.ReactNode;
  suffixActionRenderer?: React.ReactNode;
  children: React.ReactNode;
  headerHeight?: number;
  hasDivider?: boolean;
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
        }}
      >
        {prefixActionRenderer}
        <Button
          size="small"
          variant={viewMode === "active" ? "contained" : "text"}
          onClick={() => onSwitchViewMode("active")}
        >
          Active
        </Button>
        <Button
          size="small"
          variant={viewMode === "general" ? "contained" : "text"}
          onClick={() => onSwitchViewMode("general")}
        >
          General
        </Button>
        <Button
          size="small"
          variant={viewMode === "archived" ? "contained" : "text"}
          onClick={() => onSwitchViewMode("archived")}
        >
          Archived
        </Button>
        <Box mr="auto" />
        {suffixActionRenderer}
      </Box>
      {hasDivider && <Divider sx={{ mb: 2 }} />}
      <Box
        sx={{
          height: `calc(100% - ${headerHeight}px)`,
          overflowY: "auto",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {(children as any)?.length ? (
            children
          ) : (
            <Box
              sx={{
                width: "100%",
                fontSize: 12,
                color: "grey",
                textAlign: "center",
                p: 2,
              }}
            >
              No Data Available.
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TabContainer;
