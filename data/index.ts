import { Company } from "@/types";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    // { name: "Timeline", link: "#TimeLine" },
    // { name: "Photography", link: "#photography" },
    { name: "Contact", link: "#contact" },
    { name: "More About Me", link: "/moreAboutMe" },
];

export const aboutMeNavItems = [
    { name: "Home", link: "/" },
    { name: "Timeline", link: "#TimeLine" },
    { name: "Photography", link: "#photography" },
    { name: "Contact", link: "#footer" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/static/images/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I\'m very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Get to know me a little better",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 flex flex-col items-center justify-between",
        imgClassName: "",
        titleClassName: "justify-center text-center",
        img: "/static/images/p13.jpg",
        spareImg: "/b4.svg",
        button: {
        title: "Learn More About Me",
        link: "/moreAboutMe",
    },
    },
    {
        id: 5,
        title: "Currently building Jackbox-Like Spotify Guessing Game.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/static/images/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Whose Song Is It? - Spotify Party Game",
        des: "An interactive web app where users log in with Spotify, contribute their playlists, and compete to guess whose playlist a song belongs to!",
        img: "/static/images/spotify-game.webp",
        iconLists: [
            "/static/images/spf.svg", 
            "/static/images/tail.svg", 
            "/static/images/ts.svg", 
            "/static/images/git.svg", 
            "/static/images/re.svg"],
        link: "https://github.com/iisael9/spotify-guess-game",
    },
    {
        id: 2,
        title: "Forest of Enchantment",
        des: "Forest of Enchantment is a 2D platformer set in a lush, mystical forest teeming with magical creatures and hidden secrets.",
        img: "/static/images/FOE.png",
        iconLists: [
            "/static/images/c--4.svg", 
            "/static/images/icons8-unity.svg", 
            "/static/images/git.svg", 
            "/static/images/pacman.svg",],
        link: "https://github.com/iisael9/__Forest_Of_Enchantment",
    },
    {
        id: 3,
        title: "G2 Insurance Business Website",
        des: "G2 Insurance Website is a single-page application (SPA) built to showcase the services offered by G2 Business & Auto Insurance.",
        img: "/static/images/G2.PNG",
        iconLists: [
            "/static/images/re.svg", 
            "/static/images/tail.svg", 
            "/static/images/ts.svg",],
        link: "https://github.com/iisael9/G2Insurance",
    },
    {
        id: 4,
        title: "Autonomous Drone Shadowing with AI",
        des: "This project focuses on developing a system for autonomous drone detection and tracking using AI-powered technologies.",
        img: "/static/images/drone.PNG",
        iconLists: [
            "/static/images/pi.svg", 
            "/static/images/drr.svg", 
            "/static/images/Qg.svg", 
            "/static/images/py.svg", 
            "/static/images/tf.svg"],
        link: "https://github.com/iisael9/DroneCode",
    },
];


export const testimonials = [
    {
        quote: "Isael Lazcano did an outstanding job creating the website for G2 Insurance. From start to finish, he made the process seamless, taking the time to understand our business needs and delivering a site that is both professional and easy to navigate. The final product exceeded my expectations, and we've already seen an increase in inquiries from clients thanks to the site’s user-friendly design. Isael's communication, attention to detail, and timely delivery were exceptional. I highly recommend him to anyone looking for a dependable and skilled web developer!",
        name: "Veronica Parra",
        title: "Owner of G2 Insurance",
        image: "/static/images/veronica-parra.jpg",
    },
    {
        quote: "Isael is a cool cat! He delivered beyond expectations and the website he created for us is both functional and visually appealing. Highly recommend his services.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
        image: "/static/images/profile.svg",
    },
];


export const companies: Company[] = [
    // {
    //     id: 1,
    //     name: "Cloudinary",
    //     img: "/cloud.svg",
    //     nameImg: "/cloudName.svg",
    // },
    // {
    //     id: 2,
    //     name: "Appwrite",
    //     img: "/app.svg",
    //     nameImg: "/appName.svg",
    // },
    // {
    //     id: 3,
    //     name: "HOSTINGER",
    //     img: "/host.svg",
    //     nameImg: "/hostName.svg",
    // },
    // {
    //     id: 4,
    //     name: "Stream",
    //     img: "/s.svg",
    //     nameImg: "/streamName.svg",
    // },
    // {
    //     id: 5,
    //     name: "Docker",
    //     img: "/dock.svg",
    //     nameImg: "/dockerName.svg",
    // },
];

export const workExperience = [
    {
        id: 1,
        title: "Centers of Research Excellence in Science and Technology (CREST) Program (Internship) July-December 2024",
        desc: "Developed an AI-driven drone tracking system. Created an adaptive Python algorithm. Analyzed and improved detection accuracy.",
        className: "md:col-span-2",
        thumbnail: "/static/images/exp1.svg",
    },
    {
        id: 2,
        title: "Game Design - 2D Top-Down Adventure",
        desc: "Led a team of 7 students to build a top-down 2D game and SRS document outlining scope, user interface, communication interface, memory, runtime, error handling, design constraints, and product functions.",
        className: "md:col-span-2",
        thumbnail: "/static/images/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance Business Website Project",
        desc: "G2 Insurance Website is a single-page application (SPA) built to showcase the services offered by G2 Business & Auto Insurance.",
        className: "md:col-span-2",
        thumbnail: "/static/images/exp3.svg",
    },
    {
        id: 4,
        title: "Education",
        desc: "California State University, San Bernardino B.S Computer Science & Minor in Data Science.",
        className: "md:col-span-2 font-semi-bold",
        thumbnail: "/static/images/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/static/images/git.svg",
        url: "https://github.com/iisael9",
    },
    {
        id: 2,
        img: "/static/images/insta.svg",
        url: "https://www.instagram.com/sspace9/",
    },
    {
        id: 3,
        img: "/static/images/link.svg",
        url: "https://www.linkedin.com/in/isael-lazcano-b22047294",
    },
    {
        title: "More About Me",
        id: 4,
        img: "/static/images/fingerprint.svg",
        url: "/moreAboutMe",
    },
];
