import React from "react";

const Sidebar = () => {
  return (
    <section className="fixed top-0 md:hidden left-[1000px] bg-main h-full w-full flex justify-center items-center">
      <div className="text-error absolute top-10 cursor-pointer right-10">
        [close x]
      </div>
      <ul className="text-white font-headings flex flex-col gap-10 justify-center items-center ease-in-out">
        <li className="header-hover">Features</li>
        <li className="header-hover">Teams</li>
        <li className="header-hover">Sign In</li>
      </ul>
    </section>
  );
};

export default Sidebar;
