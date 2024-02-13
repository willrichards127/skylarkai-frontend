import React, { memo, useCallback, useState } from "react";
import { Box, IconButton, colors } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";

export const ItemOverlay = memo(
  ({
    onRemove,
    children,
    listeners,
  }: {
    children: React.ReactNode;
    listeners: any;
    onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }) => {
    const [hover, setHover] = useState<boolean>(false);

    const onMouseOver = useCallback(() => {
      console.log('hovering---')
      setHover(true);
    }, []);

    const onMouseOut = useCallback(() => {
      setHover(false);
    }, []);

    const onEdit = useCallback(() => {}, []);

    return (
      <Box onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {children}
        <Box
          sx={{
            position: "absolute",
            top: -28,
            left: -8,
            right: -48,
            bottom: -8,
          }}
        />
        {hover && (
          <Box>
            <Box
              sx={{
                position: "absolute",
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
                boxSizing: "content-box",
                MozBoxSizing: "content-box",
                WebkitBoxSizing: "content-box",
                border: `1px solid ${colors.grey[800]}`,
                cursor: "pointer",
              }}
            />
            <DragIndicatorIcon
              {...listeners}
              sx={{ position: "absolute", right: -32, top: 0, cursor: "grab" }}
            />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                gap: 0.5,
                right: 0,
                top: -36,
              }}
            >
              <IconButton size="small" onClick={onRemove}>
                <AddIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton size="small" onClick={onRemove}>
                <CancelIcon sx={{ fontSize: 16 }} />
              </IconButton>
              {/* {item.tagname === "table" && (
                <IconButton size="small">
                  <BarChartIcon sx={{ fontSize: 16 }} />
                </IconButton>
              )} */}
              <IconButton size="small" onClick={onEdit}>
                <EditIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
    );
  }
);

ItemOverlay.displayName = "ItemOverlay";
