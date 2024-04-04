import { ApexOptions } from "apexcharts";

export const chartTypeConfig: Record<string, Partial<ApexOptions>> = {
  bar: {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
  },
  line: {
    chart: {
      type: "line",
    },
    stroke: {
      curve: "straight",
      width: 4,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
      },
    },
  },
  area: {
    chart: {
      type: "area",
    },
  },
  pie: {
    chart: {
      type: "pie",
    },
  },
  donut: {
    chart: {
      type: "donut",
    },
  },
};
