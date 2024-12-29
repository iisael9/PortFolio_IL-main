import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
// import Lamp from "./Lamp";

interface TimelineEntry {
    title: React.ReactNode; // Allow JSX elements
    content: React.ReactNode; // Allow JSX elements
}

const TimeLine = () => {
    const data: TimelineEntry[] = [
        {
            title: <span className="text-purple">2024</span>,
            content: (
                <div>
                    <p className="text-purple dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        Interned @ Centers of Research Excellence in Science and Technology (CREST) Program (Internship)
                        <br />
                        From July to December 2024, I interned at the Centers of Research Excellence in Science and Technology (CREST) Program, contributing to research projects that enhanced my skills in data analysis and software development. This experience deepened my understanding of real-world technology applications. Graduating in December 2024 with a major in Computer Science and a minor in Data Science, I am ready to take on new challenges in the tech industry.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/static/images/drone.PNG"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/static/images/csusb.webp"
                            alt="Drone"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: <span className="text-purple">2023</span>,
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        In 2023, I dedicated myself to advancing my education, fully committing to pursuing a dual major in Computer Science and Data Science. Alongside my academic journey, I channeled my creativity and technical skills into developing Forest of Enchantment, a captivating 2D platformer game. This project allowed me to explore game design, programming, and storytelling, resulting in an immersive experience that brings a magical world to life.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/static/images/FOE.png"
                            alt="Forest of Enchantment"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/static/images/student.png"
                            alt="Student"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: <span className="text-purple">2022</span>,
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        2022 marked the beginning of my academic journey in Computer Science and Data Science. This year was all about laying a strong foundation, immersing myself in the fundamentals of programming, algorithms, and data analysis. I focused on building a growth mindset and developing the skills needed to navigate the exciting and challenging world of technology.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/static/images/new.jpeg"
                            alt="Journey Start"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/static/images/1.jpg"
                            alt="CS Journey"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: <span className="text-purple">Before 2022</span>,
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
                        For nine years, I worked as a Utility Service Worker for OmniTrans, a local bus company. During this time, I gained valuable work experience and developed a strong work ethic. However, I realized I wanted more out of life and aspired to pursue a career that aligned with my passions. This realization led me to make a life-changing decision: to go back to school and embark on a journey toward a future in technology.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/static/images/bus.avif"
                            alt="Bus Job"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <Image
                            src="/static/images/bus-01.jpg"
                            alt="Bus Experience"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div id="TimeLine" className="w-full py-20">
            <h1 className="text-4xl font-bold text-center mb-10">
                <span className="text-purple-600">My Timeline</span>
            </h1>
            {/* <Lamp /> */}
            <Timeline data={data} />
        </div>
    );
};

export default TimeLine;
