"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usefetchData from "@/hooks/try/usefetch";
import { useEffect, useState } from "react";

const Home = () => {
  const { fetchData } = usefetchData();
  const [data, setData] = useState<string>("");

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

  return (
    <section className="p-4 border-solid border-2 border-gray rounded-lg">
      <div className="justify-between flex mb-5">
        <div className="text-lg ">User Action</div>
        <div className="text-lg  rounded-lg bg-red-800 text-white font-semibold p-4 ">
          + Create new action
        </div>
      </div>
      <div className="p-5 bg-white rounded-md">
        <Table className=" rounded-md p-5 border">
          {/* <TableCaption>A list of vouchers</TableCaption> */}
          <TableHeader>
            <TableRow className="text-slate-800 bg-white">
              <TableHead className=" ">Status</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* { {data } */}
            {/* .filter((item: any) => item.voucher.kategori == params.kategori) */}
            {/* // .map((item) => ( */}
            <TableRow>
              <TableCell className=" border-gray-300 flex items-center">
                check
              </TableCell>
              <TableCell>budi</TableCell>
              <TableCell>email @gmail.com</TableCell>
            </TableRow>
            {/* // ))}  */}
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </div>
    </section>
  );
};

export default Home;
