import { useMemo, memo } from "react";
import { chartTypeConfig } from "./config";
import { TChartType } from "../../../../../shared/models/types";
import ApexChart from "react-apexcharts";
import { IReportItemMetadata } from "../../../../../shared/models/interfaces";
import { parseCellData } from "../../../../../shared/utils/parse";

export const Chart = memo(
  ({
    data,
    vizType = "bar",
    height = 320,
    title,
  }: {
    data: IReportItemMetadata;
    vizType?: string;
    title?: string;
    height?: number | string;
  }) => {
    const chartType = vizType as TChartType;
    const config = chartTypeConfig[chartType];

    const chartData = useMemo(() => {
      if (data.axis && data.axis.x.length && data.axis.y.length) {
        let categories: string[];

        const [direct, xIndex] = data.axis.x.split("-");
        if (direct === "col") {
          const colLabel = data.columns[+xIndex].label;
          categories = data.rows.map((row) => row[colLabel]);
        } else {
          categories = Object.keys(data.rows[+xIndex]).map(
            (key) => data.rows[+xIndex][key]
          );
        }

        const series = data.axis.y.map((eachY) => {
          let sTitle = "";
          let sData: number[];
          const [direct, index] = eachY.split("-");
          if (direct === "col") {
            const colLabel = data.columns[+index].label;
            sData = data.rows.map((row) => parseCellData(row[colLabel]));
            sTitle = colLabel;
          } else {
            sData = Object.keys(data.rows[+index]).map((key) =>
              parseCellData(data.rows[+index][key])
            );
            sTitle = `Row-${index}`;
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
      <div
        style={{ background: "white", color: "black", borderRadius: "4px" }}
        className="chart"
        data-options={data}
      >
        <ApexChart
          options={{
            chart: {
              id: "chart-1",
              animations: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
              ...config.chart,
            },
            dataLabels: {
              enabled: true,
              formatter: (value) => {
                if (["pie", "donut"].includes(config.chart!.type!)) {
                  return (value as number).toFixed(1) + "%";
                }
                return value.toLocaleString();
              },
              style: {
                colors: ['black']
              }
            },
            stroke: {
              show: true,
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
            },
            yaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
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
              ? chartData.series[0].data
              : chartData.series
          }
          type={config.chart!.type}
          width="100%"
          height={height}
        />
      </div>
    );
  }
);

Chart.displayName = "Chart";
