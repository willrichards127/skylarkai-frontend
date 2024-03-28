import { memo, useCallback, useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { IReportItem } from "../../../../shared/models/interfaces";

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
});

export const ItemActionPane = memo(
  ({
    item,
    listeners,
    onAddNew,
    onRemove,
    onClone,
    onShowVisualization,
    onSplit,
  }: {
    item: IReportItem;
    listeners: any;
    onAddNew: () => void;
    onRemove: () => void;
    onShowVisualization: () => void;
    onClone: () => void;
    onSplit: (rows: number) => void;
  }) => {
    const [splitAnchorEl, setSplitAnchorEl] = useState<null | HTMLElement>(
      null
    );
    const splitOpen = Boolean(splitAnchorEl);

    const onShowSplitDropdown = useCallback(() => {}, []);
    return (
      <ActionPane className="no-print">
        <IconButton size="small" onClick={onAddNew} title="Add New Item Above">
          <AddIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
        <IconButton size="small" onClick={onClone} title="Clone">
          <FileCopyIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
        <IconButton
          size="small"
          onClick={onShowSplitDropdown}
          title="Split Row"
        >
          <ViewColumnIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
        <Menu
          anchorEl={splitAnchorEl}
          open={splitOpen}
          onClose={() => setSplitAnchorEl(null)}
        >
          {[2, 3, 4].map((rows: number) => (
            <MenuItem onClick={() => onSplit(rows)}>
              Split into {rows}s
            </MenuItem>
          ))}
        </Menu>
        {item.value.tag === "table" && (
          <IconButton
            size="small"
            onClick={onShowVisualization}
            title="Visualize"
          >
            <BarChartIcon sx={{ fontSize: 16, color: "black" }} />
          </IconButton>
        )}
        <IconButton size="small" onClick={onRemove} title="Remove">
          <DeleteForeverIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <DragIndicatorIcon
          {...listeners}
          sx={{ color: "black", fontSize: 16, cursor: "grab" }}
        />
      </ActionPane>
    );
  }
);
