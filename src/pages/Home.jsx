import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-primary h-screen py-16 px-36">
      <section id="landing" className="w-full h-full rounded-xl">
        <div className="w-full h-full bg-gradient-to-r from-primary via-transparent to-transparent py-16 px-24">
          <h1 className="text-6xl">Attendy</h1>
          <p className="pr-20 mt-8 w-[600px]">
            A comprehensive web app solution aims to revolutionize attendance
            tracking for educational institutions
          </p>

          <div className="mt-20 flex flex-row gap-4">
            <button className="bg-accent hover:bg-accent-hover w-28 py-2 rounded-md text-primary font-bold" onClick={() => navigate("/signup")}>Signup</button>
            <button className="border-accent hover:bg-[#d6bbbf] border-2 w-28 py-2 rounded-md text-accent font-bold" onClick={() => navigate("/login")}>Login</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
