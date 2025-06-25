import React from "react";
import Button from "./Button";
import Globe from "./assets/globe.svg?react";
import Award from "./assets/award.svg?react";
import image from "./assets/01(2).jpg";
import Stripes from "./assets/stripes.svg?react";
import avatar1 from "./assets/06.jpg";
import avatar2 from "./assets/05.jpg";
import avatar3 from "./assets/02(2).jpg";
import avatar4 from "./assets/03(1).jpg";
import avatar5 from "./assets/04.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

function Hero() {
  return (
    <div className="w-[92vw] m-auto pt-6.5 lg:w-[85vw] lg:flex lg:justify-between">
      <div className="left mb-10 lg:pt-[8rem] lg:w-[50%]">
        <span className="bg-[var(--white-custom)] px-3 py-2 rounded-md text-[0.8rem] lg:text-[1rem]">
          🤩 Award-winning digital services
        </span>
        <h1 className="mt-4 text-4xl leading-normal lg:text-6xl">
          Creative studio focused on <br />
          <span className="text-[var(--accent-green)]">Web Dev</span>
        </h1>
        <p className="mt-6.5 lg:mt-10">
          From concept to execution, we deliver web designs that make an impact.
          Let your brand shine with our innovative and visually stunning
          websites.
        </p>
        <form className="mt-6.5 p-2 border-1 border-gray-300 rounded-md relative lg:mt-10">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Enter your email address"
              className="placeholder:text-gray-400 px-4 py-2 mr-1"
            />
            <span className="absolute right-4">
              <Button text="Start trail!" />
            </span>
          </div>
        </form>
        <div className="mt-10 lg:flex lg:items-center lg:justify-between lg:gap-4">
          <div className="flex items-center mb-10">
            <Globe className="text-[var(--accent-green)]" />
            <div className="ml-4">
              <h6 className="mb-1">24/7 Support</h6>
              <p>We're always here to help</p>
            </div>
          </div>
          <div className="flex items-center lg:mb-10">
            <Award className="text-[var(--accent-green)]" />
            <div className="ml-4">
              <h6 className="mb-1">Award Winning agency</h6>
              <p>You are in safe hand</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right mt-16 relative lg:w-[40%]">
        <Stripes className="absolute top-[-6%] left-[-20%] lg:top-[-3%]" />
        <img src={image} alt="image" className="w-full h-auto rounded-md" />
        <div className="absolute bg-[var(--primary-dark)] rounded-md p-4 bottom-0 left-[-5%] lg:bottom-[18%] lg:left-[-10%]">
          <div className="flex items-center ">
            <h6 className="mr-6" style={{ color: "white", marginBottom: "0" }}>
              5K+
            </h6>
            <ul className="flex">
              {avatars.map((avatar, i) => (
                <li key={i} className="h-9 w-9 ml-[-12.8px]">
                  <img src={avatar} alt="avatar" className="rounded-full" />
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2" style={{ color: "white" }}>
            Total visitors per month
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
