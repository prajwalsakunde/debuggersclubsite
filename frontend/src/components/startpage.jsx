import React from "react";
import "./startpage.css";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import SplitTextJS from "split-text-js";
const Startpg = () => {
    useLayoutEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        const titles = gsap.utils.toArray('.text-wrapper p');

        titles.forEach((title, index) => {
            const spiltTitle = new SplitTextJS(title);

            tl.from(spiltTitle.chars, {
                opacity: 0,
                y: 60,
                rotateX: -90,
                stagger: 0.02,
                delay: index * 0.02
            }, "<")

            .to(spiltTitle.chars, {
                opacity: 0,
                y: -60,
                rotateX: 90,
                stagger: 0.02
            }, "<1");
        });

        return () => {
            tl.kill(); // Cleanup animation timeline
        };
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <main className="overflow-hidden">
           
           <div className="relative ">
            
            <div id='start1' className="start1 flex justify-center relative mt-5 items-center ">
                <div className="w-full h-screen text-wrapper relative top-20 sm:top-40 items-center font-sans font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl ">
                <a>
                    <p>Debuggers' Club</p>
                    <p>Run by the student</p>
                    <p>for the students</p>
                    <p>of the student</p>
                </a>
                </div>
                </div>
            </div> 

        </main>
    );
}

export default Startpg;
