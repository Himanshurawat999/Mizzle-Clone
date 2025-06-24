import React from "react";
import Logo1 from "./assets/01.svg?react";
import Logo2 from "./assets/02.svg?react";
import Logo3 from "./assets/03.svg?react";
import Logo4 from "./assets/04.svg?react";
import Logo5 from "./assets/05.svg?react";

function CustomerLogo() {
  return (
    <div className="w-[92vw] m-auto pt-20">
      <div className="mb-2">
        <h5 className="text-xl">100+ Companies trust us</h5>
      </div>
      <ul className="flex items-center">
        <li>
          <Logo1 className="w-[10.7rem] h-14 mr-4" />
        </li>
        <li>
          <Logo2 className="w-[10.7rem] h-14 " />
        </li>
      </ul>
    </div>
  );
}

export default CustomerLogo;
