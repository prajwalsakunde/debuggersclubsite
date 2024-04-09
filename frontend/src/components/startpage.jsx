import React, { useState, useEffect } from "react";
import "./startpage.css";
import { gsap } from "gsap";
import ReactTextTransition from 'react-text-transition';
import SplitTextJS from "split-text-js";
import backgdimg from '../assets/background.gif'

const Startpg = () => {
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const paragraphs = [
    "Club strives to enhance the coding environment within the college, fostering an atmosphere conducive to learning and innovation.",
    "Through a diverse array of events organized by and for students, the club actively engages participants, nurturing their skills and passion for coding while building a vibrant community dedicated to technological advancement."
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <main id="start1" className="start1  sm:mt-5 lg:mt-10 relative overflow-hidden w-full h-2/3 sm:h-3/4 md:h-lvh">
      <div  className=" flex justify-center w-full h-2/3 sm:h-full md:w-screen md:h-screen relative mt-5 items-center">
        <div className=" absolute top-72 right-36 w-1/4 h-1/4 hidden xl:block">
          <img src={backgdimg} alt="BAVKROUND IMG" />
        </div>
        <div className="w-full flex flex-col h-full text-wrapper justify-center sm:justify-normal relative sm:top-60 items-center font-sans font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl ">
          <a>
            <p>Debuggers' Club</p>
            <p>Run by the student</p>
            <p>for the students</p>
            <p>of the student</p>
          </a>
          <div className="relative mx-3 sm:mx-8 md:mx-14 lg:mx-28 top-28 md:top-40 lg:top-62 xl:top-72 2xl:top-80 flex flex-col text-3xl font-sens font-medium">
            <section className="text-center text-lg sm:text-xl md:text-3xl ">
              <a>
                <div className="mb-4 lg:mb-7">
                  <h2 className=" font-mono font-light">Inside the <span className=" text-sky-500">Club</span> Get to Know Us </h2>
                </div>
                <section className="inline text-base sm:text-lg md:text-xl lg:text-2xl font-extralight font-mono ">
                  <ReactTextTransition >
                    {paragraphs[paragraphIndex]}
                  </ReactTextTransition>
                </section>
              </a>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Startpg;
