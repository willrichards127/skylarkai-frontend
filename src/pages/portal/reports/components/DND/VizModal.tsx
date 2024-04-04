import { memo, useCallback, useEffect, useState } from "react";
import {
  styled,
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  AccordionProps,
  AccordionSummaryProps,
  Button,
} from "@mui/material";
import { XModal } from "../../../../../components/XModal";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PieChartIcon from "@mui/icons-material/PieChart";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import {
  IReportItemMetadata,
  IAxisKey,
  IAxis,
} from "../../../../../shared/models/interfaces";
import { Chart } from "../Chart";
import { TColumn, TRow } from "../../../../../shared/models/types";

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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  background: "transparent",
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

export const VizModal = memo(
  ({
    open,
    initialVizType = "bar",
    columns,
    rows,
    initialAxis,
    onClose,
    onAddChart,
  }: {
    open: boolean;
    onClose: () => void;
    onAddChart: (vizType: string, axis: string) => void;
    initialVizType?: string;
    initialAxis?: IAxis;
    columns: TColumn[];
    rows: TRow[];
  }) => {
    const [vizType, setVizType] = useState<string>("bar");
    const [metadata, setMetadata] = useState<IReportItemMetadata>({
      columns: [],
      rows: [],
      axis: { x: "", y: [] },
    });

    const onChangeVisualType = useCallback((newType: string) => {
      setVizType(newType);
    }, []);

    const onChangeAxis = (axis: IAxisKey, index: string) => {
      const axisData = { ...(metadata.axis || { x: "", y: [] }) };
      if (axis === "x") {
        axisData["x"] = axisData["x"] !== index ? index : "";
      } else {
        if (axisData["y"].includes(index)) {
          axisData["y"] = axisData["y"].filter((value) => value !== index);
        } else {
          axisData["y"].push(index);
        }
      }
      setMetadata((prev) => ({ ...prev, axis: axisData }));
    };

    useEffect(() => {
      setVizType(initialVizType);
    }, [initialVizType]);

    useEffect(() => {
      if (initialAxis) {
        setMetadata({ axis: initialAxis, columns, rows });
      } else {
        setMetadata((prev) => ({ ...prev, columns, rows }));
      }
    }, [columns, rows, initialAxis]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="lg"
        header={<Box textAlign="center">Add Chart</Box>}
        footer={
          <Box textAlign="right">
            <Button
              disabled={!metadata.axis.x || !metadata.axis.y.length}
              onClick={() => {
                onAddChart(vizType, JSON.stringify(metadata.axis));
                onClose();
              }}
            >
              Add Chart
            </Button>
          </Box>
        }
      >
        <Stack direction="row" spacing={4}>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Choose Chart Type</Typography>
            <Divider />
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
            <Divider />
            <Stack direction="row" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="subtitle2">X-Axis</Typography>
                <Stack spacing={1}>
                  <Accordion expanded>
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
                                disabled={metadata.axis.x.includes("row")}
                                checked={metadata.axis.x === `col-${index}`}
                                onChange={() =>
                                  onChangeAxis("x", `col-${index}`)
                                }
                              />
                            }
                            label={<Box fontSize={12}>{col.label}</Box>}
                            sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded>
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
                                disabled={metadata.axis.x.includes("col")}
                                checked={metadata.axis.x === `row-${index}`}
                                onChange={() =>
                                  onChangeAxis("x", `row-${index}`)
                                }
                              />
                            }
                            label={<Box fontSize={12}>Row - {index}</Box>}
                            sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="subtitle2">Y-Axis</Typography>
                <Stack spacing={1}>
                  <Accordion expanded>
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
                                disabled={
                                  metadata.axis.x === `col-${index}` ||
                                  metadata.axis.x.includes("row")
                                }
                                checked={metadata.axis.y.includes(
                                  `col-${index}`
                                )}
                                onChange={() =>
                                  onChangeAxis("y", `col-${index}`)
                                }
                              />
                            }
                            label={<Box fontSize={12}>{col.label}</Box>}
                            sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded>
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
                                disabled={
                                  metadata.axis.x === `row-${index}` ||
                                  metadata.axis.x.includes("col")
                                }
                                checked={metadata.axis.y.includes(
                                  `row-${index}`
                                )}
                                onChange={() =>
                                  onChangeAxis("y", `row-${index}`)
                                }
                              />
                            }
                            label={<Box fontSize={12}>Row - {index}</Box>}
                            sx={{ "&.MuiFormControlLabel-root": { margin: 0 } }}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={1} width="100%">
            <Typography variant="subtitle2" gutterBottom>
              Preview
            </Typography>
            <Chart height={400} vizType={vizType} data={metadata} />
          </Stack>
        </Stack>
      </XModal>
    );
  }
);
