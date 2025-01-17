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

const FloatingHomePage = () => {
  const links = [
    { title: "↕ Scroll to Top", icon: <IconArrowUpDashed className="h-full w-full text-purple" />, href: "#Home" },
    { title: "↕ About", icon: <IconBoxMultiple6 className="h-full w-full text-purple" />, href: "#about" },
    { title: "↕ Recent Projects", icon: <IconStackFront className="h-full w-full text-purple" />, href: "#projects" },
    { title: "https://www.instagram.com/sspace9/ ↗", icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://www.instagram.com/sspace9/" },
    { title: "https://www.linkedin.com/in/isael-lazcano-b22047294 ↗", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://www.linkedin.com/in/isael-lazcano-b22047294" },
    { title: "https://github.com/iisael9 ↗", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://github.com/iisael9" },
    { title: "↕ Contact ", icon: <IconMail className="h-full w-full text-purple" />, href: "#contact" },
    { title: "More About me →", icon: <IconFingerprint className="h-full w-full text-neutral-500 dark:text-blue-300" />, href: "/moreAboutMe" },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        desktopClassName="fixed bottom-4 inset-x-0 z-50"
        items={links}
      />
    </div>
  );
};

export default FloatingHomePage;
