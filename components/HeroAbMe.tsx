import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const HeroAbMe = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] 
          bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            A little more about me
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Discover My Journey and Captured Moments"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {``}
          </p>

          {/* Magic Buttons in Row */}
          <div className="flex items-center space-x-4 mt-5">
            <a href="/">
              <MagicButton
                title="Home Page"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#TimeLine">
              <MagicButton
                title="Timeline"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#photography">
              <MagicButton
                title="Photography"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbMe;
