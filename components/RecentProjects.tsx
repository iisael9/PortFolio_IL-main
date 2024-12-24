"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            {/* The entire PinContainer is clickable */}
            <PinContainer
              title={item.title}
              href={item.link}
              containerClassName="hover:scale-105 transition-transform duration-300"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {/* Image Section */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                    <img
                      src="/static/images/bg.png"
                      alt="background"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute bottom-0 z-10 w-full lg:w-auto lg:h-auto"
                  />
                </div>

                {/* Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center">
                  {item.title}
                </h1>

                {/* Description */}
                <p className="lg:text-xl font-light text-sm text-center mt-3 text-gray-400">
                  {item.des}
                </p>

                {/* Icons and Links */}
                <div className="flex flex-col items-center mt-7">
                  <div className="flex space-x-3">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center mt-5">
                    <p className="text-purple hover:underline lg:text-xl md:text-sm text-xs">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;