import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const classes = [
  {
    title: "Ethical Hacking",
    time: "12:35 pm",
  },
  {
    title: "Cryptography",
    time: "1:05 pm",
  },
  {
    title: "DBMS",
    time: "1:55 pm",
  },
];

const Classes = () => {
  return (
    <main className="min-h-screen flex justify-between">
      <div className="w-[18vw] fixed">
        <Navbar />
      </div>
      <div className="w-[82vw] ml-[18vw]">
        <Header />

        <div className="flex flex-col gap-y-16 mt-20 w-full items-center">
          <div className="w-[70%] rounded-xl p-6 shadow-xl shadow-black/40">
            <h3 className="font-bold mb-4">Current Classes</h3>
            <div className="bg-light-primary py-3 rounded-md px-6 flex-row flex items-center justify-between">
              <p className="text-primary">Software Engineering</p>
              <button className="bg-primary w-fit px-4">Attend Class</button>
            </div>
          </div>

          <div className="shadow-xl shadow-black/40 w-[70%] rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-8">Upcoming Classes</h3>

            {classes.map((classItem, index) => {
              return (
                <div
                  key={index}
                  className="bg-light-primary py-3 rounded-md px-6 flex-row flex items-center justify-between mt-4"
                >
                  <p className="text-primary">{classItem.title}</p>
                  <button disabled={true} className="bg-primary w-24 px-4">
                    {classItem.time}
                  </button>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </main>
  );
};

export default Classes;
