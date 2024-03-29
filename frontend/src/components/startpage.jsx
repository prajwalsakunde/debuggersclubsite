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
        <main>
            <div className="p-1 sm:p-2 bg-gradient-to-r from-indigo-200 from-10%  via-sky-200 via-40% to-fuchsia-100 to-90% ">
                
            </div>
            <div className="relative mt-5 items-center ">
                <div className="text-wrapper relative top-20 sm:top-40 items-center font-sans font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl ">
                    <p>Debuggers' Club</p>
                    <p>Run by the student</p>
                    <p>for the students</p>
                    <p>of the student</p>
                </div>
            </div>
            <div>

            </div>

        </main>
    );
}

export default Startpg;
