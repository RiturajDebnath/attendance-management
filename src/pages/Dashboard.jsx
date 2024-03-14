import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../components/constants/api-endpoints";

const Dashboard = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const test = async () => {
      try {
        // const {data} = await axios(BACKEND_URL + "/students");
        const { data } = await axios.post(BACKEND_URL + "/auth/verify");

        // navigate("/dashboard");
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        console.log("Error Occured !");
      }
    };

    test();
  }, []);

  return (
    <main className="h-screen fixed z-10 flex justify-between">
      <div className="w-[18vw] fixed">
        <Navbar />
      </div>
      <div className="w-[82vw] ml-[18vw]">
        <Header />

        <div className="pr-44 left-0">{JSON.stringify(data)}</div>
      </div>
    </main>
  );
};

export default Dashboard;
