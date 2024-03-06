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
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  AccordionProps,
  styled,
  AccordionSummaryProps,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PieChartIcon from "@mui/icons-material/PieChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import { TColumn } from "../../../../../shared/models/types";
import { IAxis, IAxisKey } from "../../../../../shared/models/interfaces";

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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const XWidgetDrawer = memo(
  ({
    open,
    visualType = "table",
    columns,
    rows,
    axis,
    onChangeVisualType,
    onChangeRow,
    onChangeColumn,
    onChangeAxis,
    onClose,
  }: {
    open: boolean;
    onClose: () => void;
    visualType?: string;
    columns: TColumn[];
    rows: Record<string, string | boolean>[];
    axis: IAxis;
    onChangeVisualType: (newType: string) => void;
    onChangeColumn: (newColumnLabel: string) => void;
    onChangeRow: (newRowIndex: number) => void;
    onChangeAxis: (axis: IAxisKey, value: string) => void;
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
        {visualType === "table" ? (
          <>
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
          </>
        ) : (
          <>
            <Typography p={2} variant="subtitle2">
              X-Axis
            </Typography>
            <Accordion disabled={axis.x.includes("row")}>
              <AccordionSummary>
                <Box fontSize={12}>Columns</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  {columns.map((col, index) => (
                    <FormControlLabel
                      key={`col-${col.label}`}
                      control={
                        <Checkbox
                          size="small"
                          checked={axis.x === `col-${index}`}
                          onChange={() => onChangeAxis("x", `col-${index}`)}
                        />
                      }
                      label={<Box fontSize={12}>{col.label}</Box>}
                      sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion disabled={axis.x.includes("col")}>
              <AccordionSummary>
                <Box fontSize={12}>Rows</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  {rows.map((_, index) => (
                    <FormControlLabel
                      key={`row-${index}`}
                      control={
                        <Checkbox
                          size="small"
                          checked={axis.x === `row-${index}`}
                          onChange={() => onChangeAxis("x", `row-${index}`)}
                        />
                      }
                      label={<Box fontSize={12}>Row - {index}</Box>}
                      sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Typography p={2} variant="subtitle2">
              Y-Axis
            </Typography>
            <Accordion disabled={axis.x.includes("row")}>
              <AccordionSummary>
                <Box fontSize={12}>Columns</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  {columns
                    .map((col, index) => (
                      <FormControlLabel
                        key={`col-${col.label}`}
                        control={
                          <Checkbox
                            size="small"
                            disabled={axis.x === `col-${index}`}
                            checked={axis.y.includes(`col-${index}`)}
                            onChange={() => onChangeAxis("y", `col-${index}`)}
                          />
                        }
                        label={<Box fontSize={12}>{col.label}</Box>}
                        sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                      />
                    ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion disabled={axis.x.includes("col")}>
              <AccordionSummary>
                <Box fontSize={12}>Rows</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  {rows
                    .map((_, index) => (
                      <FormControlLabel
                        key={`row-${index}`}
                        control={
                          <Checkbox
                            size="small"
                            disabled={axis.x === `row-${index}`}
                            checked={axis.y.includes(`row-${index}`)}
                            onChange={() => onChangeAxis("y", `row-${index}`)}
                          />
                        }
                        label={<Box fontSize={12}>Row - {index}</Box>}
                        sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                      />
                    ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Drawer>
    );
  }
);
