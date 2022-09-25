import React from "react";

const Sidebar = ({ navOpen, setNavOpen }) => {
  return (
    <section
      className={
        navOpen
          ? "fixed top-0 md:hidden left-0 bg-main h-full w-full flex justify-center items-center"
          : "fixed top-0 md:hidden left-[1000px] bg-main h-full w-full flex justify-center items-center"
      }
    >
      <div
        className="text-error absolute top-10 cursor-pointer right-10"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        [close x]
      </div>
      <ul className="text-white font-headings flex flex-col gap-10 justify-center items-center ease-in-out">
        <li
          className="header-hover"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <a href="#features">Features</a>
        </li>
        <li
          className="header-hover"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <a href="#team">Teams</a>
        </li>
        <li
          className="header-hover"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <a href="#signin">Sign In</a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
