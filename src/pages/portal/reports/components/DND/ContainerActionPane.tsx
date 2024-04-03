import { memo } from "react";
import { Box, Divider, IconButton, styled } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";

const ActionPane = styled(Box)({
  position: "absolute",
  gap: 0.5,
  right: -26,
  top: "50%",
  transform: "translate(0%, -50%)",
  backgroundColor: "rgba(255,255,255,0.8)",
  border: "1px solid grey",
  borderRadius: 4,
  alignItems: "center",
  flexDirection: "column",
  display: "none",
});

export const ContainerActionPane = memo(
  ({ onAddNew, onRemove }: { onAddNew: () => void; onRemove: () => void }) => {
    return (
      <ActionPane className="no-save no-print">
        <DragIndicatorIcon
          sx={{ color: "black", fontSize: 16, cursor: "grab" }}
        />
        <Divider />
        <IconButton size="small" onClick={onAddNew} title="Add New Category">
          <AddIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
        <IconButton size="small" onClick={onRemove} title="Remove Category">
          <DeleteForeverIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
      </ActionPane>
    );
  }
);
