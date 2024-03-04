import { memo, useCallback, useMemo, useState } from "react";
import {
  Box,
  Stack,
  Drawer,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  TextField,
  MenuItem,
} from "@mui/material";

import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PieChartIcon from "@mui/icons-material/PieChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import { TColumn } from "../../../../../shared/models/types";

// eslint-disable-next-line react-refresh/only-export-components
export const VizItems = [
  {
    value: "table",
    icon: <ViewListOutlinedIcon />,
  },
  {
    value: "bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    value: "line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    value: "area",
    icon: <PhotoSizeSelectActualIcon />,
  },
  {
    value: "pie",
    icon: <PieChartIcon />,
  },
  {
    value: "donut",
    icon: <DonutLargeIcon />,
  },
];

export const XWidgetDrawer = memo(
  ({
    open,
    visualType = "table",
    columns,
    rows,
    onChangeVisualType,
    onChangeRow,
    onChangeColumn,
    onClose,
  }: {
    open: boolean;
    onClose: () => void;
    visualType?: string;
    columns: TColumn[];
    rows: Record<string, string | boolean>[];
    onChangeVisualType: (newType: string) => void;
    onChangeColumn: (newColumnLabel: string) => void;
    onChangeRow: (newRowIndex: number) => void;
  }) => {
    const units = useMemo(
      () => [
        "All",
        ...new Set(
          columns.filter((col) => col.type === "numeric").map((col) => col.unit)
        ),
      ],
      [columns]
    );
    
    const [unit, setUnit] = useState(units[0]);

    const onChangeUnit = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnit(e.target.value);
      },
      []
    );

    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box p={2}>
          <Typography variant="subtitle2">Choose Type</Typography>
        </Box>
        <Divider />
        <Box
          p={2}
          sx={{ display: "flex", gap: 2, maxWidth: 280, flexWrap: "wrap" }}
        >
          {VizItems.map((item) => (
            <XIconButton
              key={item.value}
              variant={item.value === visualType ? "contained" : "outlined"}
              startIcon={item.icon}
              size="small"
              onClick={() => onChangeVisualType(item.value)}
            />
          ))}
        </Box>
        <Divider />
        <Box p={2}>
          <Typography variant="subtitle2">Attributes</Typography>
        </Box>
        <Divider />
        <Stack spacing={2} p={2}>
          <Box fontSize={12} mb={1}>
            Columns
          </Box>
          <TextField
            fullWidth
            size="small"
            select
            value={unit}
            onChange={onChangeUnit}
            label="Unit"
          >
            {units.map((unitItem) => (
              <MenuItem key={unitItem} value={unitItem}>
                {unitItem}
              </MenuItem>
            ))}
          </TextField>
          {columns.map((col) => (
            <FormControlLabel
              key={col.label}
              control={
                <Checkbox
                  size="small"
                  checked={!col.isUnChecked}
                  onChange={() => onChangeColumn(col.label)}
                />
              }
              label={<Box fontSize={12}>{col.label}</Box>}
              sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
            />
          ))}
        </Stack>
        <Divider />
        <Stack spacing={2} p={2}>
          <Box fontSize={12} mb={1}>
            Rows
          </Box>
          {rows.map((row, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  size="small"
                  checked={!row.isUnChecked}
                  onChange={() => onChangeRow(index)}
                />
              }
              label={<Box fontSize={12}>Row - {index}</Box>}
              sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
            />
          ))}
        </Stack>
      </Drawer>
    );
  }
);
