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
            <div className="container relative mt-5 font-sans font-light text-4xl sm:text-6xl md:text-7xl">
                <div className="text-wrapper absolute top-16 sm:top-24 md:top-40 left-28 sm:left-20 ">
                    <p>Debuggers' Club</p>
                    <p>Run by the student</p>
                    <p>for the students</p>
                    <p>of the student</p>
                </div>
            </div>
        </main>
    );
}

export default Startpg;
