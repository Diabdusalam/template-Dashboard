"use client";

import usefetchData from "@/hooks/try/usefetch";
import { useEffect, useState } from "react";

const DetailsUserPage = () => {
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
    <>
      {/* <section className="p-4 border-solid border-2 border-gray rounded-lg">
        <div className="justify-between flex ">
          <div>
            <div className="text-xl font-bold ">Detail User</div>
            <div className="text-md text-slate-600 my-4">
              Acaount Information
            </div>
          </div>
          <div className="text-lg rounded-lg border-solid border-2 border-red-800 font-semibold py-2 px-5 my-5">
            - Back
          </div>
        </div>
        <div className="border-b-2 my-4"></div>
        <h2 className="text-md font-bold">General Information</h2>

        <div className="flex space-x-4">
          <p>Status</p>
          <div>Name</div>
        </div>
        <div className="flex space-x-4">
          <p>Status</p>
          <div>Name</div>
        </div>
        <div className="flex space-x-4">
          <p>Status</p>
          <div>Name</div>
        </div>
        <div className="flex space-x-4">
          <p>Status</p>
          <div>Name</div>
        </div>
        <div className="flex space-x-4">
          <p>Status</p>
          <div>Name</div>
        </div>
      </section> */}
    </>
  );
};

export default DetailsUserPage;
