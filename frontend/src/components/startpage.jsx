import React, { useState, useEffect } from "react";
import "./startpage.css";
import { gsap } from "gsap";
import ReactTextTransition from 'react-text-transition';
import SplitTextJS from "split-text-js";

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
    <main className="my-10 relative overflow-hidden w-screen h-screen">
      <div id="start1" className="start1 flex justify-center w-screen h-screen relative mt-5 items-center">
        <div className="w-full flex flex-col h-full text-wrapper relative top-40 sm:top-60 items-center font-sans font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl ">
          <a>
            <p>Debuggers' Club</p>
            <p>Run by the student</p>
            <p>for the students</p>
            <p>of the student</p>
          </a>
          <div className="relative mx-10 top-60 flex flex-col text-3xl font-sens font-medium">
            <section className="text-center">
              <a>

              <div className="mb-7">
              <h2 className=" text-3xl font-mono font-light">Inside the Debuggers Club Get to Know Us </h2>
              </div>
              <section className="inline text-xl font-extralight font-mono ">
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
