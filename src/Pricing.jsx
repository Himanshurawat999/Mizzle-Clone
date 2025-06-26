import React from "react";
import Button from "./Button";
import Wallet from "./assets/wallet.svg?react";
import Check from "./assets/check.svg?react";

function Pricing() {
  return (
    <div className="w-[92vw] m-auto pt-20 lg:w-[85vw] lg:pt-30">
      <div className="textContent text-center mb-6">
        <span className="bg-[var(--white-custom)] px-3 py-2 rounded-md text-[0.8rem] lg:text-[1rem]">
          💵 Transparent pricing packages
        </span>
        <h2 className="mt-4 text-3xl lg:text-5xl lg:mt-6">
          Get a plan that grows with you
        </h2>
      </div>

      <div className=" py-5 lg:py-7 lg:flex">
        <div className="left lg:w-[760px] lg:flex lg:justify-between">
          <div className="lg:flex">
            <div className="price flex flex-col items-center lg:w-[310px] lg:items-start">
              <Wallet className="mb-4" />
              <div className="bg-black text-white px-2 py-1 text-xs rounded-sm mb-4">
                Boss mode
              </div>
              <h6 className="" style={{ marginBottom: "1rem" }}>
                <span className="text-5xl lg:text-[88px]">$59</span>/month
              </h6>
              <p className="text-center mb-6 lg:text-start">
                The all-in-one solution for businesses that want to succeed
                online.
              </p>
            </div>
            <div className="hidden lg:block lg:ml-10 lg:border-1 lg:border-[#606261] lg:opacity-[0.1]"></div>
          </div>
          <div className="features flex flex-col items-center lg:w-[400px] lg:pl-11 lg:pr-3.5">
            <h6 className="mb-4">Features list of your need</h6>
            <ul className="mb-4">
              <li className="flex justify-center gap-1 py-1.5 lg:justify-start">
                <Check />
                Up to 05 users monthly
              </li>
              <li className="flex justify-center gap-1 py-1.5  lg:justify-start">
                <Check />
                Free 5 host & domain
              </li>
              <li className="flex justify-center gap-1  py-1.5 lg:justify-start">
                <Check />
                Google Docs style editors
              </li>
              <li className="flex justify-center gap-1  py-1.5 lg:justify-start">
                <Check />
                Support for 30+ languages
              </li>
              <li className="flex justify-center gap-1  py-1.5 lg:justify-start">
                <Check />
                Landing pages & Web widgets
              </li>
              <li className="flex justify-center gap-1  py-1.5 lg:justify-start">
                <Check />
                24/7 Dedicated Support
              </li>
            </ul>
            <Button text="Start a free 7-day trial" />
            <p className="mt-1.5">No credit card is required!</p>
          </div>
        </div>

        <div className="right lg:pl-4 lg:mr-0">
          <div className="plans mt-6 p-6 w-full bg-[var(--accent-green)] rounded-md lg:mt-0 lg:h-full">
            <div>
              <span className="bg-black text-white px-2 py-1 text-xs rounded-sm mb-4">
                Enterprise
              </span>
              <h4 className="text-2xl mt-4 lg:text-[2rem]" style={{ color: "white" }}>
                Custom pricing plan
              </h4>
            </div>
            <div className="mt-32 flex flex-col ">
              <button className="px-4 py-2 font-[500] bg-[var(--white-custom)] tracking-[0.5px] rounded-sm mb-1.5">
                Contact Sales
              </button>
              <p className="text-center" style={{ color: "white" }}>
                Get personalized demo and custom plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
