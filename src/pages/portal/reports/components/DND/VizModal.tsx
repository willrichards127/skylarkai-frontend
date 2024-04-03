import { memo, useCallback, useEffect, useState, useMemo } from "react";
import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  // TextField,
  // MenuItem,
  // Accordion as MuiAccordion,
  // AccordionSummary as MuiAccordionSummary,
  // AccordionDetails as MuiAccordionDetails,
  // AccordionProps,
  // styled,
  // AccordionSummaryProps,
} from "@mui/material";
import { XModal } from "../../../../../components/XModal";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PieChartIcon from "@mui/icons-material/PieChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import { parseTable } from "../../../../../shared/utils/parse";
// import { Chart } from "../Chart";

const VizItems = [
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

export const VizModal = memo(
  ({
    open,
    initialVizType = "bar",
    tableHtml,
    onClose,
  }: {
    open: boolean;
    onClose: () => void;
    initialVizType?: string;
    tableHtml: string;
  }) => {
    const [vizType, setVizType] = useState<string>("bar");

    const onChangeVisualType = useCallback((newType: string) => {
      setVizType(newType);
    }, []);

    useEffect(() => {
      setVizType(initialVizType);
    }, [initialVizType]);

    const parsedTable = useMemo(() => parseTable(tableHtml), [tableHtml]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Add Chart</Box>}
      >
        <Stack spacing={1}>
          <Typography variant="subtitle2">Choose Chart Type</Typography>
          <Box p={2} sx={{ display: "flex", gap: 2 }}>
            {VizItems.map((item) => (
              <XIconButton
                key={item.value}
                variant={item.value === vizType ? "contained" : "outlined"}
                startIcon={item.icon}
                size="small"
                onClick={() => onChangeVisualType(item.value)}
              />
            ))}
          </Box>
          <Typography variant="subtitle2">Preview</Typography>
          {/* <Chart vizType={vizType} data={parsedTable} /> */}
          <Stack direction="row" spacing={4}>
            <Box>
              <Typography variant="subtitle2">X-Axis</Typography>
              <Stack>
                {parsedTable.columns.map((col) => (
                  <FormControlLabel
                    key={`col-${col.label}`}
                    control={
                      <Checkbox
                        size="small"
                        // checked={axis.x === `col-${index}`}
                        // onChange={() => onChangeAxis("x", `col-${index}`)}
                      />
                    }
                    label={<Box fontSize={12}>{col.label}</Box>}
                    sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                  />
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant="subtitle2">Y-Axis</Typography>
              <Stack>
                {parsedTable.rows.map((_, index) => (
                  <FormControlLabel
                    key={`row-${index}`}
                    control={
                      <Checkbox
                        size="small"
                        // checked={axis.x === `row-${index}`}
                        // onChange={() => onChangeAxis("x", `row-${index}`)}
                      />
                    }
                    label={<Box fontSize={12}>Row - {index}</Box>}
                    sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </XModal>
    );
  }
);
