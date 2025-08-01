import usefetchData from "@/hooks/try/usefetch";
import { useEffect, useState } from "react";

export default function DashboardViewModel() {
  const { fetchData } = usefetchData();
  const [data, setData] = useState<string>("");

  const lineChartDataDashboard = [
    {
      name: "Mobile apps",
      data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
    },
    {
      name: "Websites",
      data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
    },
  ];
  const monthChartOptions = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const barChartDataDashboard = [
    {
      name: "Sales",
      data: [330, 250, 110, 300, 490, 350, 270, 130, 425, 330, 250, 110],
    },
  ];
  const dataTable = [
    {
      companes: "Google",
      members: 55,
      budget: "Rp. 100.000.000",
      completion: 60,
    },
  ];
  const fetching = async () => {
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  useEffect(() => {}, [data]);

  return {
    lineChartDataDashboard,

    barChartDataDashboard,
    monthChartOptions,
  };
}
