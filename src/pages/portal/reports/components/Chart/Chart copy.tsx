import { memo } from "react";
import { Box } from "@mui/material";
import { chartTypeConfig } from "./config";
import { TChartType } from "../../../../../shared/models/types"; 
import ApexChart from "react-apexcharts";

const colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#3F51B5",
  "#03A9F4",
  "#4CAF50",
  "#F9CE1D",
  "#FF9800",
];

export const Chart = memo(
  ({
    chartType,
    chartConfig,
    height = 320,
    title,
  }: {
    chartConfig: {
      series: ApexAxisChartSeries | ApexNonAxisChartSeries;
      categories: (string | number)[];
      xAxisLabel: string;
      yAxisLabel: string;
    };
    title?: string;
    height?: number | string;
    chartType: TChartType;
  }) => {
    const config = chartTypeConfig[chartType];
    if (!chartConfig) return <>Unable to show this chart.</>;
    return (
      <Box>
        <Box
          className="print-legend"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            visibility: "hidden",
          }}
        >
          {(["pie", "donut"].includes(chartType)
            ? chartConfig.categories!
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            : chartConfig.series.map((item: any) => item.name)
          ).map((category: string | number, index: number) => (
            <Box
              key={category}
              style={{
                display: "flex",
                fontSize: 12,
                alignItems: "center",
                margin: "0 8px",
              }}
            >
              <svg width={15} height={10}>
                <rect width={10} height={10} fill={colors[index]} />
              </svg>
              {category}
            </Box>
          ))}
        </Box>
        <ApexChart
          options={{
            colors,
            theme: {
              mode: "dark",
              // palette: "palette0",
            },
            chart: {
              animations: {
                enabled: false,
              },
              background: "transparent",
              toolbar: {
                show: false,
              },
              ...config.chart,
            },
            dataLabels: {
              enabled: false,
              offsetX: -6,
              style: {
                fontSize: "12px",
              },
            },
            stroke: {
              show: true,
              width: 1,
            },
            tooltip: {
              shared: true,
              intersect: false,
            },
            ...(!!config.stroke && { stroke: config.stroke }),
            ...(!!config.plotOptions && {
              plotOptions: config.plotOptions,
            }),
            ...(!!title && { title: { text: title } }),
            ...(["pie", "donut"].includes(chartType) && {
              labels: chartConfig.categories!.map((item) => item.toString()),
            }),
            xaxis: {
              categories: chartConfig.categories!,
              // tickPlacement: "on",
              title: {
                text: chartConfig.xAxisLabel,
              },
            },
            yaxis: {
              title: {
                text: chartConfig.yAxisLabel,
              },
            },
            ...(["pie", "donut"].includes(chartType)
              ? {
                  legend: {
                    position: "top",
                    show: true,
                    offsetY: 10,
                  },
                }
              : {
                  legend: {
                    position: "top",
                    showForSingleSeries: true,
                    offsetY: 20,
                    show: true,
                  },
                }),
          }}
          series={
            ["pie", "donut"].includes(chartType)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ? (chartConfig.series[0] as any).data.map((item: any) => +item)
              : chartConfig.series
          }
          type={config.chart!.type}
          width="100%"
          height={height}
        />
      </Box>
    );
  }
);

Chart.displayName = "Chart";
