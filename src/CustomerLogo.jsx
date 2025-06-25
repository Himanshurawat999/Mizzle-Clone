import React from "react";
import Logo1 from "./assets/01.svg?react";
import Logo2 from "./assets/02.svg?react";
import Logo3 from "./assets/03.svg?react";
import Logo4 from "./assets/04.svg?react";
import Logo5 from "./assets/05.svg?react";

function CustomerLogo() {
  return (
    <div className="w-[92vw] m-auto pt-20 lg:w-[85vw] lg:flex">
      <div className="mb-2 lg:w-[285px]">
        <h5 className="text-xl lg:text-3xl">100+ Companies trust us</h5>
      </div>
      <ul className="flex items-center">
        <li>
          <Logo1 className="w-[10.7rem] h-14 mr-4 lg:mr-10" />
        </li>
        <li>
          <Logo5 className="w-[10.7rem] h-14 lg:mr-10" />
        </li>
        <li className="hidden lg:block">
          <Logo3 className="w-[10.7rem] h-14 mr-10" />
        </li>
        <li className="hidden lg:block">
          <Logo4 className="w-[10.7rem] h-14 mr-4" />
        </li>
      </ul>
    </div>
  );
}

export default CustomerLogo;
