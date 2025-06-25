import React from "react";
import logo from "./assets/logo.svg";
import dark from "./assets/darkTheme.svg";
import light from "./assets/lightTheme.svg";
import hamburgerDark from "./assets/hamburgerDark.svg";
import hamburgerLight from "./assets/hamburgerLight.svg";
import ArrowDown from "./assets/arrow-down.svg?react";
import Person from "./assets/person-circle.svg?react";

function Nav() {
  return (
    <nav className="w-[92vw] h-18 m-auto flex justify-between items-center lg:w-[85vw] lg:h-24">
      <img src={logo} alt="logo" className="w-25.5 h-7.5 lg:w-34 lg:h-10" />

      <div className="hidden lg:flex">
        <ul className="flex items-center">
          <li className="flex items-center gap-1 p-4 text-[var(--primary-dark)] hover:text-[var(--accent-green)]">
            Demos <ArrowDown />
          </li>
          <li className="flex items-center gap-1 p-4 text-[var(--primary-dark)] hover:text-[var(--accent-green)]">
            Pages <ArrowDown />
          </li>
          <li className="flex items-center gap-1 p-4 text-[var(--primary-dark)] hover:text-[var(--accent-green)]">
            Protfolio <ArrowDown />
          </li>
          <li className="flex items-center gap-1 p-4 text-[var(--primary-dark)] hover:text-[var(--accent-green)]">
            Megamenu <ArrowDown />
          </li>
          <li className="flex items-center gap-1 p-4 text-[var(--primary-dark)] hover:text-[var(--accent-green)]">
            Contact us
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <img src={dark} alt="dark" className="circle w-6 h-6" />
        <div className="hidden lg:w-24 lg:h-8 lg:bg-[#dce0e5] lg:text-sm lg:flex lg:items-center gap-0.5 lg:justify-center lg:rounded-md">
          <Person /> Sigh up
        </div>
        <div className="hidden lg:w-24 lg:h-8 lg:bg-[var(--accent-green)] lg:text-white lg:text-sm lg:flex lg:items-center lg:justify-center lg:rounded-md">
          Buy now
        </div>
        <div className="hamburger px-2 py-2 border border-gray-300 rounded-md lg:hidden ">
          <img src={hamburgerDark} alt="hamburger" className="w-5 h-5 " />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
