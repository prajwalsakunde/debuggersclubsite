import "./startpage.css";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import SplitTextJS from "split-text-js";
import Members from "./members";
const Startpg = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const titles = gsap.utils.toArray(".text-wrapper p");

    titles.forEach((title, index) => {
      const spiltTitle = new SplitTextJS(title);

      tl.from(
        spiltTitle.chars,
        {
          opacity: 0,
          y: 60,
          rotateX: -90,
          stagger: 0.02,
          delay: index * 0.02,
        },
        "<"
      ).to(
        spiltTitle.chars,
        {
          opacity: 0,
          y: -60,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1"
      );
    });

    return () => {
      tl.kill(); // Cleanup animation timeline
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <main className="overflow-hidden">
      <div className="p-1 sm:p-2 bg-gradient-to-r from-indigo-200 from-10%  via-sky-200 via-40% to-fuchsia-100 to-90% "></div>
      <div className="relative ">
        <div className="flex justify-center relative mt-5 items-center ">
          <div className="w-full h-screen text-wrapper relative top-20 sm:top-40 items-center font-sans font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl ">
            <Link>
              <p>Debuggers' Club</p>
              <p>Run by the student</p>
              <p>for the students</p>
              <p>of the student</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center relative w-full h-screen ">
          <div className="absolute  text-center ">
            <h2 className="text-3xl font-bold">Event</h2>
            <p className="mt-2 text-lg">Event section content goes here.</p>
          </div>
        </div>

        <div className="flex justify-center relative w-full h-screen ">
          <div className="absolute  text-center ">
            <h2 className="text-3xl font-bold">Members</h2>
            <p className="mt-2 text-lg">Members of the 2024 Debuggers Club.</p>
          </div>
          <Members />
        </div>
      </div>
    </main>
  );
};

export default Startpg;
