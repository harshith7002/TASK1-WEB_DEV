import React from "react";
import { skillCards } from "../data";
import NavigationCircles from "./NavigationCircles";

const Services = () => {
  const getPositionClass = (card) => {
    const position = card.hoverPosition.large;
    return position === "bottom" ? "bottom-0" : "top-0";
  };

  return (
    <div
      id="services"
      className="min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10"
    >
      <h2 className="text-4xl font-light mb-32 xl:mt-0 mt-12 text-yellow-500">Skill-set</h2>
      <div className="w-full xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-18 xl:mb-0 mb-16">
        {skillCards.map((card, index) => (
          <div
            key={index}
            className="lg:max-w-[280px] md:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative"
          >
            <div className="p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
              <i
                className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-white transition-colors duration-500`}
              ></i>
              <h3 className="md:text-2xl text-xl font-bold my-4 text-red-500 dark:text-yellow-500 transition-colors duration-500">
                {card.title}
              </h3>
              <p className="text-gray-900 dark:text-white md:h-28 h-24 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors duration-500">
                {card.description}
              </p>
            </div>
            <div
              className={`w-full absolute left-0 ${getPositionClass(
                card
              )} flex flex-col gap-y-5 py-4`}
            >
              <h2 className="text-2xl text-center text-gray-900 dark:text-white font-light tracking-wide"></h2>
            </div>
          </div>
        ))}
      </div>
      <NavigationCircles section="services"></NavigationCircles>
    </div>
  );
};

export default Services;
