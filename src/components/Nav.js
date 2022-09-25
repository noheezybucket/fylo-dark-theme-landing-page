import React from "react";
import logo from "../assets/logo.svg";

const Nav = ({ setNavOpen }) => {
  return (
    <nav className="flex justify-between items-center w-[90%] mx-auto py-8">
      <div className="w-[100px] mr-5">
        <img src={logo} alt="Fylo navbar" />
      </div>

      <ul className="text-white hidden sm:flex w-[70%] sm:w-[40%] justify-between items-center ease-in-out">
        <li
          className="header-hover"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <a href="#features">Features</a>
        </li>
        <li className="header-hover">
          <a href="#team">Teams</a>
        </li>
        <li className="header-hover">
          <a href="#signin">Sign In</a>
        </li>
      </ul>

      <div
        className="flex flex-col gap-2 cursor-pointer sm:hidden"
        onClick={() => setNavOpen(true)}
      >
        <span className="block h-1 w-10 bg-white rounded-2xl"></span>
        <span className="block h-1 w-10 bg-white rounded-2xl"></span>
        <span className="block h-1 w-10 bg-white rounded-2xl"></span>
      </div>
    </nav>
  );
};

export default Nav;
