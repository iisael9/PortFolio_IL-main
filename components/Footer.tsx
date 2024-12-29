import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";;

const Footer = () => {
  return (
    <footer id="contact" className="w-full pb-10 mb-[100px] md:mb-5 relative">
      {/* Background Grid */}
      <div>
        <hr />
        <br />
        <br />
      </div>
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-[-1]">
        <img
          src="/static/images/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Main Content */}
      <div>
        {/* Call-to-Action Section */}
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] text-center">
            Let&apos;s connect and see how{" "}
            <span className="text-purple">my skills</span> can help bring your 
            <span className="text-purple"> ideas </span>
             to life.
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Learn more about my journey and experiences in the{" "}
            <a
              href="/moreAboutMe"
              className="text-purple underline"
            >
              More About Me
            </a>{" "}
            section.
          </p>

          <a
            href="mailto:iisael090@gmail.com"
            className="text-purple-500 hover:underline z-10"
          >
            <MagicButton
              title="Let&apos;s get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16">
          {/* Copyright */}
          <p className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
            Copyright © 2024 Isael
          </p>

          {/* Social Media Links */}
          <div className="flex items-center md:gap-8 gap-6 z-10">
            {socialMedia.map((profile) => (
              <a
                title={profile.title || ""}
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-purple-500 hover:underline"
              >
                <div
                  className={`w-16 h-16 flex flex-col items-center justify-center space-y-1 backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300`}
                >
                  {/* Icon */}
                  <img
                    src={profile.img}
                    alt={String(profile.id)}
                    width={30}
                    height={30}
                    className="flex-shrink-0 filter invert dark:invert-0 dark:brightness-110 text-blue-300"
                  />
                  {/* Title */}
                  {profile.title && (
                    <span className="text-purple-500 text-[10px] font-medium text-center leading-tight">
                      {profile.title}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
