import React from "react";

const Navbar = () => {
  return (
    <section className="h-screen left-0 bg-secondary py-20">
      {/* Dashboard, Classes, Profile,  */}

      <h2 className="font-bold text-4xl text-center">Attendy</h2>

      <div className="flex flex-col gap-6 mb-6 mt-24">
        <a className="bg-accent hover:bg-accent-hover p-2 rounded-xl text-primary w-3/4 mx-auto font-semibold text-center" href="/dashboard">Dashboard</a>
        <a className="bg-accent hover:bg-accent-hover p-2 rounded-xl text-primary w-3/4 mx-auto font-semibold text-center" href="/classes">Classes</a>
        <a className="bg-accent hover:bg-accent-hover p-2 rounded-xl text-primary w-3/4 mx-auto font-semibold text-center" href="/profile">Profile</a>
      </div>
    </section>
  );
};

export default Navbar;
