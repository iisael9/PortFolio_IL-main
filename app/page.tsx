export const dynamic = 'force-dynamic';

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import Lamp from "@/components/Lamp";
import RecentProjects from "@/components/RecentProjects";
// import TimeLine from "@/components/Timeline";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import FloatingHomePage from "@/components/FloatingHomePage";
// import Scroll from "@/components/Scroll";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Clients />
        {/* <TimeLine /> */}
        <Footer />
        <FloatingHomePage />
      </div>
    </main>
  );
}
