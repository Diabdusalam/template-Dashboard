import { ApexOptions } from "apexcharts";
import React, { Component } from "react";
import Chart from "react-apexcharts";

type BarChartProps = {
  barChartData: ApexAxisChartSeries;
  barChartOptions: ApexOptions;
};
type BarChartState = {
  chartData: ApexAxisChartSeries;
  chartOptions: ApexOptions;
};
class BarChart extends Component<BarChartProps, BarChartState> {
  constructor(props: BarChartProps) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    const { barChartData, barChartOptions } = this.props;

    const customChartOptions: ApexOptions = {
      chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        style: {
          fontSize: "10px",
          //   fontFamily: "Plus Jakarta Display",
        },
        onDatasetHover: {
          //   style: {
          //     fontSize: "10px",
          //     // fontFamily: "Plus Jakarta Display",
          //   },
        },
        theme: "dark",
      },
      xaxis: {
        categories: barChartOptions?.xaxis?.categories ?? [],
        // show: false,
        labels: {
          show: false,
          style: {
            colors: "#fff",
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
        show: true,
        labels: {
          show: true,
          style: {
            colors: "#fff",
            fontSize: "10px",
            fontFamily: "Plus Jakarta Display",
          },
        },
      },
      grid: {
        show: false,
      },
      fill: {
        colors: ["#fff"], // ✅ diperbaiki jadi array
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: "12px",
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 0,
              },
            },
          },
        },
      ],
    };

    this.setState({
      chartData: barChartData,
      chartOptions: customChartOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BarChart;
