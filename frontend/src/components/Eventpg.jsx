import React, { useState } from "react";
import Slider from "react-slick";
import experttalkgate from "../assets/events/experttalkgate.jpg";
import teachers from "../assets/events/teachersday.png";
import codeefiesta from "../assets/events/codeefiesta.jpg";
import Engineerday from "../assets/events/engineersday.jpg";
import halktalk from "../assets/events/halktalk.jpg";
import resessions from "../assets/events/resession.jpg";
import experttalkfuture from "../assets/events/experttalkfuture.jpg";
import equinox from "../assets/events/equinox.jpg";
import dsbda from "../assets/events/dsbda.jpg";
import dsa from "../assets/events/dsa.jpg";

const eventsData = [
  {
    id: 1,
    img: experttalkgate,
    name: "Expert Talk",
    info: "Engaging discussions with industry leaders.",
  },
  {
    id: 2,
    img: teachers,
    name: "Teacher's Day",
    info: "Celebrating educators' contributions with gratitude.",
  },
  {
    id: 3,
    img: codeefiesta,
    name: "CODE-O-FIESTA",
    info: "A thrilling coding competition for tech enthusiasts.",
  },
  {
    id: 4,
    img: Engineerday,
    name: "Engineer's day",
    info: "Honoring the brilliance of engineering minds",
  },
  {
    id: 5,
    img: halktalk,
    name: "HACk Talks",
    info: "Inspiring dialogues on the latest hacking trends",
  },
  {
    id: 6,
    img: resessions,
    name: "A session on Recession",
    info: "Understanding economic downturns and strategies.",
  },
  {
    id: 7,
    img: experttalkfuture,
    name: "Expert Talk",
    info: "Further insights from seasoned professionals",
  },
  {
    id: 8,
    img: equinox,
    name: "EQUINOX 2023",
    info: "The highlight event of the year, featuring diverse activities.",
  },
  {
    id: 9,
    img: dsbda,
    name: "DSBDA MINI Project Competition",
    info: "Showcasing innovative data science and big data analytics projects.",
  },
  {
    id: 10,
    img: dsa,
    name: "DSA MINI Project Competition",
    info: "Spotlighting creative solutions in data structures and algorithms.",
  },
];

const Eventpg = () => {
  const [hoverStates, setHoverStates] = useState(eventsData.map(() => false));

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = false;
      return newState;
    });
  };

  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 4000,
    autoplay: true,
    autoplayspeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center relative w-full h-screen overflow-hidden">
      <div className="relative justify-center items-center text-center">
        <a>
          <h2 className="sm:text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900 ">
            Events
          </h2>
          <p className="mt-2 sm:text-xl xl:text-2xl font-thin">
            Events of the Debuggers Club.
          </p>
        </a>
      </div>
      <div className="relative w-5/6 h-screen m-6 mt-20 overflow-hidden">
        <Slider {...settings}>
          {eventsData.map((event, index) => (
            <div
              className="relative h-96 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden perspective-1000px shadow-box transition-transform duration-600 ease-in-out transform-gpu"
              key={event.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-full transition-transform duration-600 ease-in-out transform-gpu"
                style={{
                  transform: hoverStates[index] ? "scale(0)" : "scale(1)",
                  opacity: hoverStates[index] ? 0 : 1,
                }}
              />
              <div
                className="absolute top-0 left-0 w-full h-full p-4 bg-gray-100 transform rotate-x-90 transform-origin-bottom transition-all duration-600 ease-in"
                style={{
                  transform: hoverStates[index]
                    ? "rotateX(0deg)"
                    : "rotateX(-90deg)",
                }}
              >
                <p className=" text-xl font-sans font-bold text-black">
                  {event.name}
                </p>
                <p className="mt-6 text-sm font-mono font-light text-black leading-5">
                  {event.info}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Eventpg;
