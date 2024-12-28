"use client";

import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import MagicButton from "./MagicButton";
import { IconBrandGooglePhotos } from "@tabler/icons-react";

const images = [
    "/static/images/p1.jpg",
    "/static/images/p2.jpg",
    "/static/images/p3.png",
    "/static/images/p16.jpg",
    "/static/images/p18.jpg",
    "/static/images/p19.jpg",
    "/static/images/p17.jpg",
    "/static/images/p8.jpg",
    "/static/images/p9.jpg",
    "/static/images/p20.jpg",
    "/static/images/p11.jpg",
    "/static/images/p12.jpg",
    "/static/images/p13.jpg",
    "/static/images/p14.jpg",
    "/static/images/p15.jpg",

    "/static/images/p25.jpg",
    "/static/images/p5.jpg",
    "/static/images/p6.png",

    "/static/images/p7.jpg",
    "/static/images/p10.jpg",
    "/static/images/p21.jpg",

    "/static/images/p22.jpg",
    "/static/images/p23.jpg",
    "/static/images/p24.jpg",
];

const Scroll = () => {
    return (
        <div id="photography" className="w-full py-20">
    <h1 className="text-4xl font-bold text-center mb-10">
        <p>Through my <span className="text-purple font-bold">Lens.</span></p>
    </h1>
    <br />
    {/* Button Above the Photos */}
    <div className="text-center mb-10">
        <a
            href="https://photos.app.goo.gl/VNNWSB61FBnnUpCx7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
        >
            <MagicButton
                title="Check out more of my photography"
                icon={<IconBrandGooglePhotos />}
                position="right"
                otherClasses="text-4xl font-bold px-12 py-4"
            />
        </a>
    </div>
    <ParallaxScroll images={images} />
</div>
    );
};

export default Scroll;
