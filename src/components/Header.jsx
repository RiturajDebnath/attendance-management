import React from "react";

const Header = () => {
  return (
    <section className="w-full h-20 top-0 px-24">
      <div className="flex justify-between items-center py-3">
        <h1 id="greet" className="font-bold text-3xl">Good Afternoon, John Cena</h1>
        <div className="h-14 w-14 rounded-full bg-primary hover:bg-primary-hover flex justify-center items-center font-bold text-2xl text-white">
          JC
        </div>
      </div>

      <div className="h-[2px] rounded-full mx-auto my-4 bg-text w-full"></div>
    </section>
  );
};

export default Header;
