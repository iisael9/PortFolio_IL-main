"use client";

import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconHomeSpark,
//   IconNewSection,
  IconCalendar ,
  IconArrowUpDashed,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconCamera,
  IconBrandGooglePhotos,
} from "@tabler/icons-react";
// import Image from "next/image";

const Floating = () => {
  const links = [
    {
      title: "↕ Scroll to Top",
      icon: (
        <IconArrowUpDashed className="h-full w-full text-purple" />
      ),
      href: "#Home",
    },
    {
      title: "↕ Timeline",
      icon: (
        <IconCalendar  className="h-full w-full text-purple" />
      ),
      href: "#TimeLine",
    },
    {
      title: "↕ Photography",
      icon: (
        <IconCamera className="h-full w-full text-purple" />
      ),
      href: "#photography",
    },
    {
      title: "https://photos.app.goo.gl/VNNWSB61FBnnUpCx7 ↗",
      icon: (
        <IconBrandGooglePhotos className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://photos.app.goo.gl/VNNWSB61FBnnUpCx7",
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
      title: "https://www.instagram.com/sspace9/ ↗",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/sspace9/",
    },
    {
      title: "https://www.linkedin.com/in/isael-lazcano-b22047294 ↗",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/isael-lazcano-b22047294",
    },
    {
      title: "https://github.com/iisael9 ↗",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/iisael9",
    },
    {
        title: "↕ Contact",
        icon: (
          <IconMail className="h-full w-full text-purple" />
        ),
        href: "#contact",
      },
     {
      title: "← Home Page ",
      icon: (
        <IconHomeSpark className="h-full w-full text-neutral-500 dark:text-blue-300" />
      ),
      href: "/",
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

export default Floating;
