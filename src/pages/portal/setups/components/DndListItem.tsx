import React, { memo, useCallback } from "react";
import { Box } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/Menu";
import { ITemplateNode } from "../../../../shared/models/interfaces";

const DndListItem = memo(
  ({
    item,
    draggable = true,
  }: {
    item: ITemplateNode;
    draggable?: boolean;
  }) => {
    const onDragStart = useCallback(
      (event: React.DragEvent<HTMLDivElement> | undefined) => {
        if (!event) return;
        event.dataTransfer.setData(
          "application/reactflow",
          JSON.stringify(item)
        );
        event.dataTransfer.effectAllowed = "move";
      },
      [item]
    );
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: "3px",
          py: "2px",
          width: "100%",
          bgcolor: "#34344D", // hard-coded
          borderRadius: 1,
          my: 0.5,
        }}
        onDragStart={onDragStart}
        draggable={draggable}
      >
        <Box
          width={32}
          height={30}
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <img
            src={`/categories/${item.name}.png`}
            width={32}
            height={30}
            alt={item.label}
          />
        </Box>
        <Box mr="auto" fontSize={13}>{item.label}</Box>
        {draggable && <DragIndicatorIcon sx={{ fontSize: 20 }} />}
      </Box>
    );
  }
);

DndListItem.displayName = "DndListItem";
export default DndListItem;
