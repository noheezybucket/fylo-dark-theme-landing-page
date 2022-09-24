import React from "react";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-[90%] mx-auto py-8">
      <div>
        <img src={logo} alt="Fylo navbar" />
      </div>

      <ul className="text-white flex w-[30%] justify-between">
        <li>Features</li>
        <li>Teams</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
};

export default Nav;
