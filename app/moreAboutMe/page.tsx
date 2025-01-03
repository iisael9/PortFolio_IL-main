import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline"; // Reuse Timeline
// import Photography from "@/components/Photography"; // Reuse Photography
import { aboutMeNavItems } from "@/data";
import HeroAbMe from "@/components/HeroAbMe";
import Scroll from "@/components/Scroll";
import Floating from "@/components/Floating";


export const dynamic = "force-dynamic";

export default function MoreAboutMe() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={aboutMeNavItems} />
        
        <HeroAbMe />
        <Timeline /> {/* Reuse Timeline */}
        <Scroll />
        <Footer /> {/* Reuse Footer */}
        <Floating />
      </div>
    </main>
  );
}
