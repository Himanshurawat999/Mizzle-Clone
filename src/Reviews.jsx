import React from "react";
import StartFull from "./assets/star-full.svg?react";
import StartHalf from "./assets/star-half.svg?react";
import avatar1 from "./assets/01(4).jpg";
import avatar2 from "./assets/02(2).jpg";
import avatar3 from "./assets/09.jpg";
import avatar4 from "./assets/03(1).jpg";
import group from "./assets/03(2).jpg";

function Reviews() {
  return (
    <div className="w-[92vw] m-auto pt-20 pb-16 lg:w-[85vw] lg:pt-30 lg:flex lg:justify-between">
      <div className="left mb-10 lg:w-[50%]">
        <span className="bg-[var(--white-custom)] px-3 py-2 rounded-md text-[0.8rem]">
          💖 Real results from real clients
        </span>
        <h2
          className="mt-6 text-3xl lg:text-[44px]"
          style={{ marginBottom: "1.5rem" }}
        >
          See how we've helped our clients succeed
        </h2>
        <h6 style={{ marginBottom: "1rem" }}>
          More than 1500+ agencies using Mizzle
        </h6>
        <div className="lg:flex">
          <div className="lg:w-[255px] lg:mr-7">
            <ul className="flex gap-0.5 mb-2">
              <li>
                <StartFull />
              </li>
              <li>
                <StartFull />
              </li>
              <li>
                <StartFull />
              </li>
              <li>
                <StartFull />
              </li>
              <li>
                <StartHalf />
              </li>
            </ul>
            <p
              className="mb-4 font-medium"
              style={{ color: "var(--primary-dark)" }}
            >
              Webestica helped us create a stunning website that reflects our brand perfectly.
            </p>
            <div className="flex items-center gap-3">
              <img
                src={avatar2}
                alt="avatar1"
                className="h-10 w-10 rounded-md"
              />
              <p>By Nix Maxwell</p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-[255px] lg:mr-7">
            <ul className="flex gap-0.5 mb-2">
              <li>
                <StartFull />
              </li>
              <li>
                <StartFull />
              </li>
              <li>
                <StartFull />
              </li>
              <li>
                <StartFull />
              </li>
              <li>
                <StartHalf />
              </li>
            </ul>
            <p
              className="mb-4 font-medium"
              style={{ color: "var(--primary-dark)" }}
            >
              The best Bootstrap theme we're ever used it's easy to customize
              and comes with all the features we need.
            </p>
            <div className="flex items-center gap-3">
              <img
                src={avatar1}
                alt="avatar1"
                className="h-10 w-10 rounded-md"
              />
              <p>By Dennis Barrett</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right relative lg:w-[40%]">
        <img src={group} alt="group-Pic" className="rounded-md" />
        <div className="w-[21.4rem] bg-[var(--primary-dark)] rounded-md py-2 px-4 absolute left-[-5%] top-[-5%] flex items-center gap-3">
          <img src={avatar3} alt="avatar3" className="h-11 w-11 rounded-full" />
          <p className="text-sm" style={{ color: "white" }}>
            The best Bootstrap theme we've ever used 🔥
          </p>
        </div>
        <div className="w-[13.8rem] bg-[var(--white-custom)] rounded-md py-2 px-4 absolute left-[-5%] bottom-0 flex items-center gap-3">
          <img src={avatar4} alt="avatar4" className="h-11 w-11 rounded-full" />
          <p className="text-sm" style={{ color: "black" }}>
            Excellent Theme 💗
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
