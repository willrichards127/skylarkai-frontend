import React, { memo, useCallback } from "react";
import { Box, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const CollapsiblePanel = memo(
  ({
    label,
    children,
    opened = true,
    bgcolor,
  }: {
    label: React.ReactNode;
    children?: React.ReactNode;
    opened?: boolean;
    bgcolor?: string;
  }) => {
    const [open, setOpen] = React.useState<boolean>(opened);

    const onClick = useCallback(() => {
      setOpen((prev) => !prev);
    }, []);
    return (
      <Box sx={{ p: 1, borderRadius: 2, bgcolor: bgcolor }}>
        <Box
          onClick={onClick}
          sx={{
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            mb: open ? 0.4 : 0,
          }}
        >
          {label}
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.2)",
              padding: "9px 0px 9px 12px",
              borderRadius: "12px",
            }}
          >
            {children ? (
              <Box
                sx={{
                  maxHeight: 220,
                  overflowY: "auto",
                  paddingRight: 2,
                }}
              >
                {children}
              </Box>
            ) : (
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: 12,
                  py: 1,
                }}
              >
                No data available.
              </Box>
            )}
          </Box>
        </Collapse>
      </Box>
    );
  }
);

CollapsiblePanel.displayName = "CollapsiblePanel";
