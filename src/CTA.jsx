import React from "react";
import Button from "./Button";
import Headset from "./assets/headset.svg?react";
import Clock from "./assets/clock.svg?react";
import Mail from "./assets/mail.svg?react";

function CTA() {
  return (
    <div className="w-[92vw] m-auto lg:w-[85vw] lg:pt-20 mb-[-4rem] relative z-10">
      <div className="mt-6 p-6 pl-5 w-full bg-[var(--accent-green)] rounded-md lg:p-10 lg:flex">
        <div className="lg:w-[528px]">
          <h3
            className="text-3xl mb-2 lg:text-[40px]"
            style={{ color: "white" }}
          >
            Let's talk about your digital agency goals
          </h3>

          <form className="mt-6.5 p-2 bg-white border-1 border-gray-300 rounded-md relative lg:w-[418px]">
            <div className="flex justify-between ">
              <input
                type="text"
                placeholder="Your email address"
                className="placeholder:text-gray-400 px-4 py-2 mr-1"
              />
              <span className="absolute right-4">
                <Button text="Start trail!" />
              </span>
            </div>
          </form>
        </div>

        <div className="mt-6 px-3 lg:w-[352px] lg:ml-45">
          <ul>
            <li className="py-1.5 flex items-center gap-2 text-white lg:justify-end">
              <Headset />
              Call on: 0125 258 993 22
            </li>
            <li className="py-1.5 flex items-center gap-2 text-white lg:justify-end">
              <Clock />
              Time: 9am to 5pm (Sunday close)
            </li>
            <li className="py-1.5 flex items-center gap-2 text-white lg:justify-end">
              <Mail />
              Email: example@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CTA;
