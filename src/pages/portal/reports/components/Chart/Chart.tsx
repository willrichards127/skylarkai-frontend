import { memo, useMemo } from "react";
import { Box } from "@mui/material";
import { chartTypeConfig } from "./config";
import { TChartType } from "../../../../../shared/models/types";
import ApexChart from "react-apexcharts";
import { IReportItemMetadata } from "../../../../../shared/models/interfaces";

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
    data,
    height = 320,
    title,
  }: {
    data: IReportItemMetadata;
    title?: string;
    height?: number | string;
  }) => {
    const chartType = data.visual as TChartType;
    const config = chartTypeConfig[chartType];

    const chartData = useMemo(() => {
      if (data.axis && data.axis.x.length && data.axis.y.length) {
        let categories: string[];

        const [direct, xIndex] = data.axis.x.split("-");
        if (direct === "col") {
          const colLabel = data.columns[+xIndex].label;
          categories = data.rows.map((row) => row[colLabel]);
        } else {
          categories = Object.keys(data.rows[+xIndex])
            .filter((key) => key !== "isUnChecked")
            .map((key) => data.rows[+xIndex][key]);
        }

        const series = data.axis.y.map((eachY) => {
          let sTitle = "";
          let sData: number[];
          const [direct, index] = eachY.split("-");
          if (direct === "col") {
            const colLabel = data.columns[+index].label;
            sData = data.rows.map((row) => +row[colLabel]);
            sTitle = colLabel;
          } else {
            sData = Object.keys(data.rows[+index])
              .filter((key) => key !== "isUnChecked")
              .map((key) => +data.rows[+index][key]);
            sTitle = `Row-${index}`
          }

          return { data: sData, name: sTitle };
        });

        return {
          categories,
          series,
        };
      }
    }, [data]);

    if (!chartData) return <>Unable to show this chart.</>;

    return (
      <Box className="chart-wrapper">
        {/* <Box
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
            : // eslint-disable-next-line @typescript-eslint/no-explicit-any
              chartConfig.series.map((item: any) => item.name)
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
        </Box> */}
        <ApexChart
          options={{
            colors,
            chart: {
              id: 'chart-1',
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
              show: false,
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
              labels: chartData.categories,
            }),
            xaxis: {
              categories: chartData.categories,
              // tickPlacement: "on",
            },
            // yaxis: {
            //   title: {
            //     text: chartConfig.yAxisLabel,
            //   },
            // },
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
              ? chartData.series[0].data
              : chartData.series
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
