import React from "react";
import Logo from "./assets/logo-light.svg";
import BoxArrow from "./assets/box-arrow.svg?react";
import Playstore from "./assets/google-play.svg?react";
import Appstore from "./assets/app-store.svg?react";
import Social1 from "./assets/social1.svg?react";
import Social2 from "./assets/social2.svg?react";
import Social3 from "./assets/social3.svg?react";
import Social4 from "./assets/social4.svg?react";
import Social5 from "./assets/social5.svg?react";
import Globe from "./assets/globe1.svg?react";
import ArrowUp from "./assets/arrow-up.svg?react";

function Footer() {
  return (
    <div className="bg-[var(--primary-dark)] w-full pt-14 lg:pt-32">
      <div className="mt-10 px-3.5 lg:w-[89vw] lg:m-auto lg:mt-10 lg:flex lg:gap-24">
        <div className="lg:w-[284px] lg:mt-6 lg:p-3">
          <img src={Logo} alt="logo" className="w-36 h-10" />
          <p className="mt-6 mb-2" style={{ color: "#c4c5c7" }}>
            A Bootstrap theme that's both stylish and functional, perfect for
            any type of technology or corporate website.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap lg:w[757px]">
          <div className="px-3 lg:w-[253px]">
            <h6 className="mb-2" style={{ color: "white" }}>
              Quick links
            </h6>
            <ul className="text-[#c5c6cc]">
              <li className="pb-1 pr-3">About us</li>
              <li className="pb-1 pr-3">Contact us</li>
              <li className="pb-1 pr-3">
                Career{" "}
                <span className="bg-red-500 text-xs text-white px-1 py-0.5 ml-2 rounded-sm">
                  2 Job
                </span>
              </li>
              <li className="pb-1 pr-3">Career detail</li>
              <li className="pb-1 pr-3">Become a partner</li>
              <li className="pb-1 pr-3">Sign in</li>
              <li className="pb-1 pr-3">Sign up</li>
            </ul>
          </div>

          <div className="px-3 lg:w-[253px]">
            <h6 className="mb-2" style={{ color: "white" }}>
              Community
            </h6>
            <ul className="text-[#c5c6cc]">
              <li className="pb-1 pr-3">Documents</li>
              <li className="pb-1 pr-3 flex items-center gap-1.5">
                Supports{" "}
                <span>
                  <BoxArrow />
                </span>
              </li>
              <li className="pb-1 pr-3">Faqs</li>
              <li className="pb-1 pr-3">Privacy Policy</li>
              <li className="pb-1 pr-3">News and blogs</li>
              <li className="pb-1 pr-3">Terms & Condition</li>
            </ul>
          </div>

          <div className="mt-6 lg:w-[253px] lg:mt-0">
            <h6 className="mb-2 lg:mb-6" style={{ color: "white" }}>
              App available on
            </h6>
            <div className="mt-2 mb-6 flex gap-2.5 lg:mb-10">
              <Playstore />
              <Appstore />
            </div>
            <h6 className="mb-2 lg:!mb-6" style={{ color: "white" }}>
              Follow on
            </h6>
            <ul className="flex items-center gap-3">
              <li className="mb-1.5 px-1.5 py-1.5 rounded-sm bg-[var(--surface-dark)]">
                <Social1 />
              </li>
              <li className="mb-1.5 px-1.5 py-1.5 rounded-sm bg-[var(--surface-dark)]">
                <Social2 />
              </li>
              <li className="mb-1.5 px-1.5 py-1.5 rounded-sm bg-[var(--surface-dark)]">
                <Social3 />
              </li>
              <li className="mb-1.5 px-1.5 py-1.5 rounded-sm bg-[var(--surface-dark)]">
                <Social4 />
              </li>
              <li className="mb-1.5 px-1.5 py-1.5 rounded-sm bg-[var(--surface-dark)]">
                <Social5 />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mt-6 w-[92vw] m-auto text-[#85878a] lg:w-[89vw]" />

      <div className="py-6 text-center flex flex-col items-center lg:w-[89vw] lg:m-auto lg:flex-row lg:justify-between lg:items-center">
        <p style={{ color: "white" }}>
          Copyrights ©2024 Mizzle. Build by the Webestica.
        </p>
        <div className="mt-4 py-1.5 px-2.5 rounded-sm bg-[var(--surface-dark)] flex items-center gap-1.5 text-white">
          <Globe />
          Language
          <ArrowUp />
        </div>
      </div>
    </div>
  );
}

export default Footer;
