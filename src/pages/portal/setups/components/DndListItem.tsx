import React, { memo, useCallback } from "react";
import { Box } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/Menu";
import { ITemplateNode } from "../../../../shared/models/interfaces";

const DndListItem = memo(({ item, draggable = true }: { item: ITemplateNode, draggable?: boolean }) => {
  const onDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement> | undefined) => {
      if (!event) return;
      event.dataTransfer.setData("application/reactflow", JSON.stringify(item));
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
      <Box width={40} height={37} sx={{ position: "relative", borderRadius: "3px", overflow: "hidden" }}>
        <img
          src={`/categories/${item.name}.png`}
          width={"100%"}
          height={"100%"}
          alt={item.label}
        />
      </Box>
      <Box mr="auto">{item.label}</Box>
      {draggable && <DragIndicatorIcon />}
    </Box>
  );
});

DndListItem.displayName = "DndListItem";
export default DndListItem;
