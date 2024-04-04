import { memo } from "react";
import { IconButton, Box, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IDNDItem } from "../../../../../shared/models/interfaces";

const ActionPane = styled(Box)({
  position: "absolute",
  gap: 0.5,
  right: 2,
  top: 2,
  backgroundColor: "rgba(255,255,255,0.8)",
  border: "1px solid grey",
  borderRadius: 4,
  alignItems: "center",
  display: "none",
  zIndex: 99999
});

export const ItemActionPane = memo(
  ({
    item,
    onAddNew,
    onRemove,
    onShowViz,
  }: {
    item: IDNDItem;
    onAddNew: () => void;
    onRemove: () => void;
    onShowViz: () => void;
  }) => {
    return (
      <ActionPane className="no-save no-print">
        <IconButton size="small" onClick={onAddNew} title="Add New Item">
          <AddIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
        {item.value.tag === "table" && (
          <IconButton
            size="small"
            onClick={onShowViz}
            title="Visualize"
          >
            <BarChartIcon sx={{ fontSize: 16, color: "black" }} />
          </IconButton>
        )}
        <IconButton size="small" onClick={onRemove} title="Remove Item">
          <DeleteForeverIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
      </ActionPane>
    );
  }
);
