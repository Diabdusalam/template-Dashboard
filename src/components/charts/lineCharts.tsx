import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type LineChartProps = {
  lineChartData: ApexAxisChartSeries;
  lineChartOptions: ApexOptions;
};

type LineChartState = {
  chartData: ApexAxisChartSeries;
  chartOptions: ApexOptions;
};

class LineChart extends React.Component<LineChartProps, LineChartState> {
  constructor(props: LineChartProps) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    const { lineChartData, lineChartOptions } = this.props;

    const customChartOptions: ApexOptions = {
      chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: lineChartOptions?.xaxis?.categories ?? [],
        labels: {
          style: {
            colors: "#c8cfca",
            fontSize: "10px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#c8cfca",
            fontSize: "10px",
          },
        },
      },
      legend: {
        show: false,
      },
      grid: {
        strokeDashArray: 5,
        borderColor: "#56577A",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [],
        },
        colors: ["#0075FF", "#2CD9FF"],
      },
      colors: ["#0075FF", "#2CD9FF"],
    };

    this.setState({
      chartData: lineChartData,
      chartOptions: customChartOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
