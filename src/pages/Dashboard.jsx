import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <main className="h-screen fixed z-10 flex justify-between">
      <div className="w-[18vw] fixed">
        <Navbar />
      </div>
      <div className="w-[82vw] ml-[18vw]">
        <Header />
      </div>
    </main>
  );
};

export default Dashboard;
