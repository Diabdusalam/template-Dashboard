"use client";

import LineChart from "@/components/charts/lineCharts";
import CardCustom from "@/components/custom/card-custom";
import { IoDocumentText, IoWallet } from "react-icons/io5";
import DashboardViewModel from "./_dashboard-view-model";
import BarChart from "@/components/charts/barChart";
import { IoIosRocket } from "react-icons/io";
import CardActiveUser from "@/components/custom/card-active-user";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { twMerge } from "tailwind-merge";

const Home = () => {
  const model = DashboardViewModel();
  return (
    <section className="p-4  w-full space-y-6">
      <div className="grid lg:grid-cols-4  gap-6  w-ful">
        <CardCustom title="Total Projects" count="51" icon={IoDocumentText} />{" "}
        <CardCustom title="Ended Projects" count="11" icon={IoDocumentText} />{" "}
        <CardCustom
          title="On Going Projects"
          count="12"
          icon={IoDocumentText}
        />{" "}
        <CardCustom title="Pending Projects" count="28" icon={IoDocumentText} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-[60%] bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6">
          <h2 className="text-white text-xl font-bold mb-2">Sales Overview</h2>
          <div className="flex items-center text-sm text-green-500 font-semibold mb-6">
            +5% more{" "}
            <span className="ml-1 text-gray-400 font-normal">in 2025</span>
          </div>
          <div className="h-[310px]">
            <LineChart
              lineChartData={model.lineChartDataDashboard}
              lineChartOptions={model.monthChartOptions}
            />
          </div>
        </div>

        <div className="w-full lg:w-[40%] bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6 space-y-6">
          <div
            className="h-[220px] rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(310deg, #1a73e8, #66bb6a)" }}
          >
            <BarChart
              barChartData={model.barChartDataDashboard}
              barChartOptions={model.monthChartOptions}
            />
          </div>
          <h2 className="text-white text-xl font-bold mb-2">Team Workload</h2>
          <div className="flex items-center text-sm text-green-500 font-semibold mb-6">
            (+23){" "}
            <span className="ml-1 text-gray-400 font-normal">
              than last week
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CardActiveUser
              icon={IoWallet}
              title="Total"
              count="12"
              // persentage={60}
            />
            <CardActiveUser
              icon={IoIosRocket}
              title="Overloaded"
              count="3"
              persentage={50}
            />
            <CardActiveUser
              icon={IoIosRocket}
              title="Idle"
              count="2"
              // persentage={20}
            />
            <CardActiveUser
              icon={IoIosRocket}
              title="Avg Taks "
              count="254"
              // persentage={20}
            />
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col lg:flex-row  w-full">
        <div className="w-full bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6 h-full gap-6 ">
          <h2 className="text-white text-xl font-bold mb-2">Project List</h2>
          <Table className=" rounded-md p-5 overflow-hidden">
            <TableHeader className="">
              <TableRow className=" text-gray-400 border-b border-[#56577a] hover:bg-transparent ">
                <TableHead className=" ">Project Name</TableHead>{" "}
                <TableHead>Client</TableHead>
                <TableHead>PM</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {model.dataTableProjects.map((item) => (
                <TableRow className="text-white border-b border-[#56577a] hover:bg-transparent">
                  <TableCell className=" flex items-center border-none">
                    {item.projectsName}
                  </TableCell>
                  <TableCell>{item.client}</TableCell>
                  <TableCell>{item.pm}</TableCell>{" "}
                  <TableCell>{item.deadline}</TableCell>
                  <TableCell>
                    {" "}
                    <div className="w-full h-2 bg-[#2D2E5F] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-blue-500 `}
                        style={{ width: `${item.completion}%` }}
                      ></div>
                    </div>
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>{" "}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-[70%] bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6 gap-6 h-full">
          <h2 className="text-white text-xl font-bold mb-2">Top Clients</h2>
          <Table className=" rounded-md p-5 overflow-hidden">
            <TableHeader className="">
              <TableRow className="text-gray-400 border-b border-[#56577a] hover:bg-transparent">
                <TableHead>Client</TableHead>
                <TableHead>Total Projects</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Completed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {model.dataTopClients.map((item) => (
                <TableRow className="text-white border-b border-[#56577a] hover:bg-transparent">
                  <TableCell className=" flex items-center border-none">
                    {item.name}
                  </TableCell>
                  <TableCell>{item.total}</TableCell>
                  <TableCell>{item.active}</TableCell>{" "}
                  <TableCell>
                    {" "}
                    <div className="w-full h-2 bg-[#2D2E5F] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-blue-500 `}
                        style={{ width: `${item.completion}%` }}
                      ></div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="w-full lg:w-[30%] bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6">
          <h2 className="text-white text-xl font-bold mb-2">Notes</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
