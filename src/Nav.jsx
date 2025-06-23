import React from "react";
import logo from "./assets/logo.svg";
import dark from "./assets/darkTheme.svg";
import light from "./assets/lightTheme.svg";
import hamburgerDark from "./assets/hamburgerDark.svg";
import hamburgerLight from "./assets/hamburgerLight.svg";

function Nav() {
  return (
    <nav className="w-[92vw] h-18 m-auto flex justify-between items-center">
      <img src={logo} alt="logo" className="w-25.5 h-7.5" />
      <div className="flex items-center gap-2">
        <img src={dark} alt="dark" className="circle w-6 h-6" />
        <div className="hamburger px-2 py-2 border border-gray-300 rounded-md ">
          <img
            src={hamburgerDark}
            alt="hamburger"
            className="w-5 h-5"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
