import React from "react";
import image1 from "./assets/02(3).jpg";
import image2 from "./assets/01(3).jpg";
import Cross from "./assets/cross.svg?react";
import PatchCheck from "./assets/patch-check-fill.svg?react";
import Button from "./Button";

function Gallery() {
  return (
    <div className="w-[92vw] m-auto pt-20 mb-10 lg:w-[85vw] lg:flex lg:justify-between">
      <div className="left lg:w-[55%] lg:flex lg:gap-9">
        <div className="mb-24 relative">
          <img src={image1} alt="img1" className="rounded-md" />
          <figure className="absolute right-0 bottom-[-14%] lg:bottom-[-8%]">
            <Cross />
          </figure>
        </div>
        <div className="mb-6">
          <div className="lg:flex lg:gap-4">
            <div className="mb-6 w-full p-4 bg-[var(--primary-dark)] rounded-md flex justify-center flex-col items-center">
              <h2 className="text-3xl" style={{ color: "white" }}>
                10+
              </h2>
              <p className="lg:text-center" style={{ color: "white" }}>
                Years of experience
              </p>
            </div>
            <div className="mb-6 w-full p-4 bg-[var(--accent-green)] rounded-md flex justify-center flex-col items-center">
              <h2 className="text-3xl" style={{ color: "white" }}>
                1.2K
              </h2>
              <p className="lg:text-center" style={{ color: "white" }}>
                Happy customers
              </p>
            </div>
          </div>

          <img src={image2} alt="img2" className="rounded-md" />
        </div>
      </div>

      <div className="right lg:w-[40%]">
        <div>
          <span className="bg-[var(--white-custom)] px-3 py-2 rounded-md text-[0.8rem] lg:text-[1rem]">
            🤝 Your gateway to digital success
          </span>
          <h2
            className="my-6 text-3xl lg:text-5xl"
            style={{ marginBottom: "1.6rem" }}
          >
            Defining the future of online experiences!
          </h2>
          <p className="mb-6">
            Embrace a new era of digital success with Mizzle. Our team combines
            cutting-edge design with robust development to deliver websites that
            captivate and convert.
          </p>
          <ul className="mb-6">
            <li className="flex gap-2 items-center my-2">
              <PatchCheck />
              Emphasis on ROI-driven solutions
            </li>
            <li className="flex gap-2 items-center py-2">
              <PatchCheck />
              Expert team with diverse skill
            </li>
            <li className="flex gap-2 items-center my-2">
              <PatchCheck />
              Proven track record of delivering results
            </li>
          </ul>
          <Button text="Discover more" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
