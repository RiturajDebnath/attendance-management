import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Classes = () => {
  return (
    <main className="min-h-screen bg-primary flex justify-between">
      <div className="w-[15vw]">
        <Navbar />
      </div>
      <div className="w-[85vw]">
        <Header />

        <div className="flex flex-col gap-y-16 mt-20 w-full items-center">
          <div className="bg-secondary w-[70%] rounded-lg p-6">
            <h3 className="font-bold mb-4">Current Classes</h3>
            <div className="bg-accent py-3 rounded-md px-6 flex-row flex items-center justify-between">
                <p className="text-primary">Software Engineering</p>
                <button className="bg-primary p-2 rounded-md border-text border">Attend Class</button>
            </div>
          </div>


          <div className="bg-secondary w-[70%] rounded-lg p-6">
            <h3 className="font-bold mb-8">Upcoming Classes</h3>
            <div className="bg-accent py-3 rounded-md px-6 flex-row flex items-center justify-between">
                <p className="text-primary">Ethical Hacking</p>
                <button className="bg-shadow p-2 rounded-md border-primary text-primary border">12:35 pm</button>
            </div>
            <div className="bg-accent py-3 rounded-md px-6 flex-row flex items-center justify-between mt-6">
                <p className="text-primary">Cryptography</p>
                <button className="bg-shadow p-2 rounded-md border-primary text-primary border">1:05 pm</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Classes;
