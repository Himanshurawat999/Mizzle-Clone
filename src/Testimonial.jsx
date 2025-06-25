import React from "react";
import Card1 from "./assets/card1.svg?react";
import Card2 from "./assets/card2.svg?react";
import Card3 from "./assets/card3.svg?react";
import Card4 from "./assets/card4.svg?react";
import Card5 from "./assets/card5.svg?react";
import Card6 from "./assets/card6.svg?react";
import Card7 from "./assets/card7.svg?react";
import Card8 from "./assets/card8.svg?react";
import ArrowRight from "./assets/arrow-right.svg?react";

const cards = [
  {
    logo: Card1,
    heading: "Product Design",
    content: "Creating products that users love and businesses nedd.",
  },
  {
    logo: Card2,
    heading: "Product Design",
    content: "Creating products that users love and businesses nedd.",
  },
  {
    logo: Card3,
    heading: "Web Design",
    content: "Designing websites that are visually appealing & user-friendly.",
  },
  {
    logo: Card4,
    heading: "UI/UX Design",
    content: "Creating user interfaces that are both efficient and enjoyable.",
  },
  {
    logo: Card5,
    heading: "Business Strategy",
    content: "Developing and executing plans to achieve business goals.",
  },
  {
    logo: Card6,
    heading: "Research",
    content: "Gathering and analyzing data to inform decision-making.",
  },
  {
    logo: Card7,
    heading: "Web Development",
    content: "Building and maintaining websites and web applications.",
  },
  {
    logo: Card8,
    heading: "Brand Design",
    content: "Creating brands that are unique, memorable, and meaningful.",
  },
];

function Testimonial() {
  return (
    <div className="w-full bg-[var(--primary-dark)]">
      <div className="w-[92vw] m-auto py-20 lg:w-[85vw] lg:py-30">
        <div className="text-center">
          <span className="bg-[var(--surface-dark)] text-[var(--white-custom)] px-3 py-2 rounded-md text-[0.87rem] lg:text-[1rem]">
            🚀 Innovative solutions, Measurable results
          </span>
          <h2 className="mt-6 text-3xl lg:text-5xl lg:px-30" style={{ color: "white" }}>
            We specialize in the following services
          </h2>
        </div>

        <div className="cards lg:mt-10 lg:grid lg:grid-cols-4 lg:gap-4">
          {cards.map((card, i) => {
            const Icon = card.logo;
            return (
              <div
                key={i}
                className="w-full p-6 mt-10 bg-[var(--surface-dark)] rounded-md"
              >
                <div>
                  <div className="bg-white rounded-full h-14 w-14 mt-[-2.8rem] mb-6 flex justify-center items-center">
                    <Icon className="text-xl" />
                  </div>
                  <h5 className="mb-4 text-[1.3rem]" style={{ color: "white" }}>
                    {card.heading}
                  </h5>
                  <p className="mb-4" style={{ color: "#c4c5c7" }}>
                    {card.content}
                  </p>
                  <a
                    href="#"
                    className="text-[var(--accent-green)] pt-2 flex items-center gap-1.5"
                  >
                    Know more <ArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
