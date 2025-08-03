import usefetchData from "@/hooks/try/usefetch";
import { stat } from "fs";
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
  const dataTableProjects = [
    {
      projectsName: "Redesing website",
      client: "PT.A",
      pm: "Ahmad",
      deadline: "12/12/2023",
      completion: 20,
      status: "On Going",
    },
    {
      projectsName: "Redesing website",
      client: "PT.A",
      pm: "Ahmad",
      deadline: "12/12/2023",
      completion: 40,
      status: "On Going",
    },
    {
      projectsName: "Redesing website",
      client: "PT.A",
      pm: "Ahmad",
      deadline: "12/12/2023",
      completion: 50,
      status: "On Going",
    },
  ];
  const dataTopClients = [
    {
      name: "PT.A",
      total: 10,
      active: 3,
      completion: 33.33,
    },
    {
      name: "PT.B",
      total: 5,
      active: 5,
      completion: 100,
    },
    {
      name: "PT.C",
      total: 5,
      active: 5,
      completion: 100,
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
    dataTableProjects,
    dataTopClients,
    barChartDataDashboard,
    monthChartOptions,
  };
}
