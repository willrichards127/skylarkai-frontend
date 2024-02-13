import React, { memo, useCallback } from "react";
import {
  Box,
  TextField,
  Drawer,
  MenuItem,
  Typography,
  RadioGroup,
  Radio,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PieChartIcon from "@mui/icons-material/PieChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { XIconButton } from "../../../../components/buttons/XIconButton";

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

export const ChartDrawer = memo(
  ({
    open,
    visualType,
    xAxisLabels,
    yAxisLabels,
    isOneLabel,
    disableLineAndArea = false,
    currentXAxisLabel,
    currentYAxisLabels,
    onChangeVisualType,
    onChangeXAxisLabel,
    onChangeYAxisLabels,
    onClose,
  }: {
    open: boolean;
    onClose: () => void;
    visualType: string;
    xAxisLabels: string[];
    yAxisLabels: string[];
    currentXAxisLabel: string;
    currentYAxisLabels: string[];
    isOneLabel: boolean;
    disableLineAndArea?: boolean;
    onChangeXAxisLabel: (value: string) => void;
    onChangeYAxisLabels: (values: string[]) => void;
    onChangeVisualType: (value: string) => void;
  }) => {
    const onChangeXAxis = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeXAxisLabel(e.target.value);
      },
      []
    );

    const onChangeYAxis = useCallback(
      (value: string, eventType: string) => {
        if (eventType === "radio") {
          onChangeYAxisLabels([value]);
        } else {
          onChangeYAxisLabels(
            currentYAxisLabels.includes(value)
              ? currentYAxisLabels.filter((item) => item !== value)
              : [...currentYAxisLabels, value]
          );
        }
      },
      [currentYAxisLabels]
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
          {(disableLineAndArea
            ? VizItems.filter((item) => !["line", "area"].includes(item.value))
            : VizItems
          ).map((item) => (
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

        <Box p={2} mt={4}>
          <Typography variant="subtitle2">Attributes</Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <Box fontSize={12} mb={1}>
            X Axis:
          </Box>
          <TextField
            fullWidth
            select
            size="small"
            value={currentXAxisLabel}
            onChange={onChangeXAxis}
          >
            {xAxisLabels.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
          <Box fontSize={12} mt={2}>
            Y Axis:
          </Box>
          {isOneLabel ? (
            <RadioGroup
              value={currentYAxisLabels[0]}
              onChange={(e) => onChangeYAxis(e.target.value, "radio")}
            >
              {yAxisLabels.map((label) => (
                <FormControlLabel
                  key={label}
                  value={label}
                  control={<Radio />}
                  label={label}
                />
              ))}
            </RadioGroup>
          ) : (
            <FormGroup>
              {yAxisLabels.map((label) => (
                <FormControlLabel
                  key={label}
                  control={
                    <Checkbox
                      size="small"
                      checked={currentYAxisLabels.includes(label)}
                      onChange={() => onChangeYAxis(label, "checkbox")}
                    />
                  }
                  label={<Box fontSize={12}>{label}</Box>}
                />
              ))}
            </FormGroup>
          )}
        </Box>
      </Drawer>
    );
  }
);

ChartDrawer.displayName = "ChartDrawer";
