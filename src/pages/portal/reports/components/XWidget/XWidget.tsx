import { memo, useCallback, useMemo, useState } from "react";
import { Box } from "@mui/material";

import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PieChartIcon from "@mui/icons-material/PieChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Chart } from "../Chart";
import { ChartDrawer } from "../ChartDrawer";
import { parseTable, parse2Apex } from "../../../../../shared/utils/parse";
import { TChartType } from "../../../../../shared/models/types";

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

export const XWidget = memo(
  ({
    isVisualize,
    visualType,
    onChangeVisualType,
    onCloseVisualize,
    ...rest
  }: any) => {
    const table = useMemo(() => parseTable(rest.children), [rest.children]);
    console.log(table, "table===")
    const hasSameUnit = useMemo(() => {
      const units = (table?.columns || [])
        .filter((col: any) => col.type === "numeric")
        .map((col: any) => col.unit)
        .filter((unit: any) => !!unit)
        .filter(
          (value: any, index: number, array: any) =>
            array.indexOf(value) === index
        );
      return units.length === 1;
    }, [table]);

    const xAxisLabels = useMemo(() => {
      if (!table) {
        return []
      }
      const labels = table.columns
        .filter((col: any) => col.type === "category")
        .map((item: any) => item.label);
      if (!labels.length) {
        return table.columns?.length ? [table.columns[0].label] : [];
      }
      return labels;
    }, [table]);
    const yAxisLabels = useMemo(
      () =>
        table ? table.columns
          .filter((col: any) => col.type === "numeric")
          .map((item: any) => item.label) : [],
      [table]
    );

    const [selectedXAxisLabel, setSelectedXAxisLabel] = useState<string>(
      xAxisLabels[0]
    );
    const [selectedYAxisLabels, setSelectedYAxisLabels] = useState<string[]>([
      yAxisLabels[0],
    ]);

    const chartConfigs = useMemo(
      () => {
        if (table) {
          return parse2Apex(
            table,
            selectedXAxisLabel,
            hasSameUnit ? selectedYAxisLabels : yAxisLabels,
            hasSameUnit
          )
        }
      },
      [table, selectedXAxisLabel, selectedYAxisLabels, yAxisLabels, hasSameUnit]
    );

    const disableLineAndArea = useMemo(() => table ? table.rows.length <= 1 : true, [table]);

    const onChangeXAxisLabel = useCallback((value: string) => {
      setSelectedXAxisLabel(value);
    }, []);
    const onChangeYAxisLabels = useCallback((values: string[]) => {
      setSelectedYAxisLabels(values);
    }, []);

    return (
      table && chartConfigs ?
        <Box sx={{ display: "flex", flexDirection: "column", mt: 4, mb: 8 }}>
          {visualType === "table" ? (
            <Box
              component="table"
              {...rest}
              style={{
                borderCollapse: "collapse",
              }}
            />
          ) : (
            <Box>
              {chartConfigs.map((chartConfig, index) => (
                <Chart
                  key={index}
                  chartType={visualType as TChartType}
                  chartConfig={chartConfig as any}
                />
              ))}
            </Box>
          )}
          <ChartDrawer
            open={isVisualize}
            visualType={visualType}
            xAxisLabels={xAxisLabels}
            yAxisLabels={yAxisLabels}
            currentXAxisLabel={selectedXAxisLabel}
            currentYAxisLabels={selectedYAxisLabels}
            onClose={onCloseVisualize}
            onChangeXAxisLabel={onChangeXAxisLabel}
            onChangeYAxisLabels={onChangeYAxisLabels}
            onChangeVisualType={onChangeVisualType}
            isOneLabel={!hasSameUnit || ["pie", "donut"].includes(visualType)}
            disableLineAndArea={disableLineAndArea}
          />
        </Box>
        :
        null
    );
  }
);

XWidget.displayName = "XWidget";
