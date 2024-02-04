import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <main className="h-screen fixed z-10 bg-primary flex justify-between">
      <div className="w-[15vw]">
        <Navbar />
      </div>
      <div className="w-[85vw]">
        <Header />
      </div>
    </main>
  );
};

export default Dashboard;
