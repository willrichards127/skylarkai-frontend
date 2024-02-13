import React, { memo, useCallback } from "react";
import { Box, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const CollapsiblePanel = memo(
  ({
    label,
    children,
    opened = false,
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
      <Box mb={2} sx={{ p: 1, borderRadius: 2, bgcolor: bgcolor || "#202024" }}>
        <Box
          onClick={onClick}
          sx={{
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
						mb: open ? 2 : 0,
          }}
        >
          {label}
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={{
              maxHeight: 220,
              overflowY: "auto",
							pl: 6
            }}
          >
            {children ? (
              children
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
