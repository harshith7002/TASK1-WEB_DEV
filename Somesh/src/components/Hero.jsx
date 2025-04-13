import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavigationCircles from "./NavigationCircles";
import {
  letters,
  professionTexts,
  aboutText,
  socialIcons,
} from "../data/index";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [roadImageOpacity, setRoadImageOpacity] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % professionTexts.length
        );
        setIsRotating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentText = professionTexts[currentIndex];

  return (
    <div
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center isolate bg-white dark:bg-gray-900 pt-16"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="flex flex-col justify-center items-center text-center xl:space-y-4 md:space-y-3 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder text-red-500 dark:text-yellow-500 mt-8 md:mt-0">
          <span className="block w-full text-left mx:auto md:mx-0">Hello</span>
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden text-center">
            I'm{" "}
            <span
              className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-500 ease-in-out ${
                isRotating
                  ? "rotate-[100deg] opacity-0"
                  : "rotate-0 opacity-100"
              }`}
            >
              {currentText}
            </span>
            {""}
            Developer
          </span>
        </h1>
        <div className="mt-6 flex flex-col items-center">
          <button
            className="xl:w-[400px] md:w-[300px] w-[270px] bg-gray-800 dark:bg-gray-700 md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-white dark:text-white tracking-widest rounded-r-4xl flex justify-between items-center mx-auto"
            onClick={() => setIsTextVisible(!isTextVisible)}
            onMouseEnter={() => setRoadImageOpacity(0.8)}
            onMouseLeave={() => setRoadImageOpacity(0.5)}
          >
            {isTextVisible ? "Hide My Story" : "Read My Story"}
            <i
              className={`bx ${
                isTextVisible ? "bx-book-alt" : "bx-book-open"
              } bx-book-open`}
            ></i>
          </button>
          <div className="flex gap-6 md:gap-8 mt-6 md:mt-8">
            {socialIcons.map((social, index) => (
              <a
                href={social.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-red-500 dark:text-yellow-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300 hover:scale-110 transform"
                title={social.title}
                aria-label={`Visit my ${social.title} profile`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:w-[600px] md:w-[500px] w-[350px] absolute left-1/2 -translate-x-1/2 -z-10">
          <img
            src="images/road.png"
            alt="Road Image"
            className="w-full mx-auto"
            style={{
              opacity: roadImageOpacity,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
          <span className="xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide absolute -top-5 xl:right-26 md:right-16 right-10 rotate-[3.5deg] animate-bounce text-yellow-500">
            Looking for new challenges
          </span>
          <div
            className={`xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-base text-xs font-light text-gray-900 dark:text-gray-100 text-justify tracking-wide overflow-y-auto transform origin-top custom-scrollbar ${
              isTextVisible ? "scale-y-100" : "scale-y-0"
            } transition-transform duration-300 ease-in-out`}
          >
            <p className="xl:py-3 py-1 px-1 [&::first-letter]:text-red-500 [&::first-letter]:ml-5 dark:[&::first-letter]:text-yellow-500">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
      <NavigationCircles section="home"></NavigationCircles>
    </div>
  );
};

export default Hero;
