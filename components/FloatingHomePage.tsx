"use client";

import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconArrowUpDashed,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBoxMultiple6,
  IconStackFront,
  IconFingerprint,
  IconMail,
} from "@tabler/icons-react";
// import Image from "next/image";

const FloatingHomePage = () => {
  const links = [
      {
        title: "Scroll to Top",
        icon: (
          <IconArrowUpDashed className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#Home",
      },
      {
        title: "About",
        icon: (
          <IconBoxMultiple6  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#about",
      },
      {
        title: "Recent Projects",
        icon: (
          <IconStackFront className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#projects",
      },
      // {
      //   title: "HomePage",
      //   icon: (
      //     <Image
      //       src="https://assets.aceternity.com/logo-dark.png"
      //       width={20}
      //       height={20}
      //       alt="Aceternity Logo"
      //     />
      //   ),
      //   href: "#",
      // },
      {
        title: "Instagram",
        icon: (
          <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.instagram.com/sspace9/",
      },
      {
        title: "LinkedIn",
        icon: (
          <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/isael-lazcano-b22047294",
      },
      {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/iisael9",
      },
      {
        title: "Contact",
        icon: (
          <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contact",
      },
       {
        title: "More About me",
        icon: (
          <IconFingerprint className="h-full w-full text-neutral-500 dark:text-blue-300" />
        ),
        href: "/moreAboutMe",
      },
    ];
  
    return (
      <div className="flex items-center justify-center h-[35rem] w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // Adjust as needed
          desktopClassName="fixed bottom-4 inset-x-0 z-50"
          items={links}
        />
      </div>
    );
};

export default FloatingHomePage
