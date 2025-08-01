import React from "react";
import ApexCharts from "react-apexcharts";

const MultiCharts: React.FC = () => {
  // Line Chart Options
  const lineChartOptions = {
    chart: {
      height: 350,
      type: "line" as const,
    },
    title: {
      text: "Sales Over Time",
      align: "center" as "center", // Sesuaikan dengan tipe yang valid
      style: {
        color: "#E5E7EB",
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    stroke: {
      curve: "smooth" as "smooth", // Gunakan tipe yang valid ('smooth', 'straight', dll.)
    },
    grid: {
      show: true,
      borderColor: "#374151",
    },
    tooltip: {
      theme: "dark",
    },
  };

  const lineChartSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  // Bar Chart Options
  const barChartOptions = {
    chart: {
      height: 350,
      type: "bar" as const,
    },
    title: {
      text: "Revenue by Product",
      align: "center" as "center", // Sesuaikan dengan tipe yang valid ('center', 'left', 'right')
      style: {
        color: "#E5E7EB",
      },
    },
    xaxis: {
      categories: [
        "Product A",
        "Product B",
        "Product C",
        "Product D",
        "Product E",
      ],
    },
    colors: ["#34D399", "#F97316", "#8B5CF6", "#10B981", "#0EA5E9"],
    grid: {
      show: true,
      borderColor: "#374151",
    },
    tooltip: {
      theme: "dark",
    },
  };

  const barChartSeries = [
    {
      name: "Revenue",
      data: [55, 70, 80, 90, 60],
    },
  ];

  // Range Bar (Timeline) Chart Options
  const timelineChartOptions = {
    chart: {
      height: 350,
      type: "rangeBar" as const,
    },
    title: {
      text: "Project Timeline",
      style: {
        color: "#E5E7EB",
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
    },
    xaxis: {
      type: "datetime" as "datetime",
    },
    grid: {
      row: {
        colors: ["#374151", "transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      theme: "dark",
      custom: function ({ seriesIndex, dataPointIndex, w }: any) {
        const taskName = w.config.series[seriesIndex].data[dataPointIndex].x;
        const progress =
          w.config.series[seriesIndex].data[dataPointIndex].meta.progress;
        return `<div class="tooltip" style="padding: 10px; background-color: #2D3748; border-radius: 5px; color: #E5E7EB;">
          <strong>${taskName}</strong><br />
          Progress: ${progress}%
        </div>`;
      },
    },
  };

  const timelineChartSeries = [
    {
      name: "Task 1",
      data: [
        {
          x: "Profile Setup",
          y: [
            new Date("2022-06-20").getTime(),
            new Date("2022-06-22").getTime(),
          ],
          fillColor: "#8B5CF6",
          meta: { progress: 48 },
        },
      ],
    },
    {
      name: "Task 2",
      data: [
        {
          x: "Menu Design",
          y: [
            new Date("2022-06-21").getTime(),
            new Date("2022-06-23").getTime(),
          ],
          fillColor: "#34D399",
          meta: { progress: 54 },
        },
      ],
    },
  ];

  return (
    <div
      style={{ padding: "40px", backgroundColor: "#1F2937", color: "#E5E7EB" }}
    >
      <h2
        style={{ textAlign: "center", color: "#E5E7EB", marginBottom: "40px" }}
      >
        Multi Chart Example
      </h2>

      {/* Line Chart */}
      <div style={{ marginBottom: "40px" }}>
        <ApexCharts
          options={lineChartOptions}
          series={lineChartSeries}
          type="line"
          height={350}
        />
      </div>

      {/* Bar Chart */}
      <div style={{ marginBottom: "40px" }}>
        <ApexCharts
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={350}
        />
      </div>

      {/* Timeline Chart */}
      <div>
        <ApexCharts
          options={timelineChartOptions}
          series={timelineChartSeries}
          type="rangeBar"
          height={350}
        />
      </div>
    </div>
  );
};

export default MultiCharts;
