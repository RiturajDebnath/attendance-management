import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [isStudent, setIsStudent] = useState(true);

  return (
    <main className="min-h-screen z-10 flex justify-between">
      <div className="w-[18vw] fixed">
        <Navbar />
      </div>
      <div className="w-[82vw] ml-[18vw]">
        <Header />

        <div className="flex flex-col mt-20 w-full items-center text-center justify-center">
          <div className="bg-primary hover:bg-primary-hover h-32 w-32 rounded-full grid place-content-center mb-6">
            <h2 className="uppercase text-6xl text-white">JC</h2>
          </div>

          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label className="text-left" htmlFor="username">Your Full Name</label>
              <input
                required={true}
                // onChange={(e) => {
                //   setCreds({
                //     ...creds,
                //     username: e.target.value,
                //   });
                // }}
                className="w-full rounded-xl px-4"
                id="username"
                name="username"
                type="username"
                value="John Cena"
              ></input>
            </div>

            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label className="text-left" htmlFor="email">Your Email</label>
              <input
                required={true}
                // onChange={(e) => {
                //   setCreds({
                //     ...creds,
                //     email: e.target.value,
                //   });
                // }}
                className="w-full rounded-xl px-4"
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="johndoe@email.com"
              ></input>
            </div>

            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label className="text-left" htmlFor="university">University Name</label>
              <input
                required={true}
                // onChange={(e) => {
                //   setCreds({
                //     ...creds,
                //     university: e.target.value,
                //   });
                // }}
                className="w-full rounded-xl px-4"
                id="university"
                name="university"
                type="university"
                placeholder="Oxford University"
              ></input>
            </div>

            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label className="text-left" htmlFor="stream">Your Stream</label>
              <select
                id="stream"
                className="w-full rounded-xl px-4"
                required={true}
                // onChange={(e) => {
                //   setCreds({
                //     ...creds,
                //     stream: e.target.value,
                //   });
                // }}
              >
                <option value={""}>Choose a Stream</option>
                <option value="Internet of Things">Internet of Things</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Blockchain Technology">
                  Blockchain Technology
                </option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </div>

            {isStudent ? (
              <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
                <label className="text-left" htmlFor="year">Admission Year</label>
                <input
                  required={true}
                  //   onChange={(e) => {
                  //     setCreds({
                  //       ...creds,
                  //       year: e.target.value,
                  //     });
                  //   }}
                  className="w-full rounded-xl px-4"
                  id="year"
                  name="year"
                  type="number"
                  min={2000}
                  max={2024}
                  placeholder="2020"
                ></input>
              </div>
            ) : null}

            <div className="w-72 mt-8 mb-12">
              <button
                type="submit"
                className="bg-primary"
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
