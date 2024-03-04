import { memo } from "react";
import { Box } from "@mui/material";
// import { TChartType, TColumn } from "../../../../../shared/models/types";
// import ApexChart from "react-apexcharts";

// const colors = [
//   "#008FFB",
//   "#00E396",
//   "#FEB019",
//   "#FF4560",
//   "#775DD0",
//   "#3F51B5",
//   "#03A9F4",
//   "#4CAF50",
//   "#F9CE1D",
//   "#FF9800",
// ];

export const Chart = memo(() =>
  // {
  //   ,
  // }: {
  //   columns: TColumn[];
  //   rows: Record<string, string | boolean>[];
  //   title?: string;
  //   height?: number | string;
  //   chartType: TChartType;
  // }
  {
    return (
      <Box>
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
        </Box> */}
        {/* <ApexChart
          options={{
            colors,
            theme: {
              mode: "dark",
            },
            chart: {
              animations: {
                enabled: false,
              },
              background: "transparent",
              toolbar: {
                show: false,
              },
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
            
            ...(!!title && { title: { text: title } }),
            
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
            
          }}
          series={
            chartConfig.series
          }
          type={chartType}
          width="100%"
          height={height}
        /> */}
      </Box>
    );
  }
);

Chart.displayName = "Chart";
