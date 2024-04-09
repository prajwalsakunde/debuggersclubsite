import React, { useState } from "react";
import Slider from "react-slick";
import experttalkgate from "../assets/events/experttalkgate.jpg";
import teachers from "../assets/events/teachersday.jpg";
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
    info: `Expert Talk on “Career after GATE Examination”\nDate: 1st Aug 2022\nSpeaker: Mr. Suraj Singh Thakur(AIR GATE 4)\nTopics Covered: 
    ● Career pathways after B.E. 
    ● Current industry situation for IT and Computer students.
    ● Importance of Geometric Progression in personal development.
    ● GATE paper pattern and preparation strategies.
    ● Time management tips which are extremely crucial when writing competitive examinations.
    ● How to secure scholarships for M.Tech like Reliance Foundation Scholarship, TATA Steel Millennium Scholarship, and DRDO scholarship for girls.`,
  },
  {
    id: 2,
    img: teachers,
    name: "Teacher's Day",
    info: `Teacher's Day\nDate : 5th sept 2022\n
    ● Fun activities planned for teachers and staff members.
    ● Followed official announcement of new committee 22-23.`,
  },
  {
    id: 3,
    img: codeefiesta,
    name: "CODE-O-FIESTA",
    info: `CODE-O-FIESTA\nDate: 14th sept 2022\n
    ● The very first event of Debuggers' club.
    ● Exclusively conducted for 2nd year students.
    ● Python programming language.\n
    The competition consisted of three rounds-
    ● First round consisted of MCQ's conducted on Kahoot.
    ● Second round was error detection round where students had to find errors in question which had 3-4 lines of code each.
    ● Third round was a debugging round where students were given questions and code as well which had the wrong output. They had to make changes in the code and display the right output.
    `,
  },
  {
    id: 4,
    img: Engineerday,
    name: "Engineer's day",
    info: `Engineer's day\nDate: 15th sept 2022\n
    ● Few words about engineers day.
    ● Felicitation of hackathon winners : SIH and UNESCO india africa.
    ● Installation of Debuggers' and CSI.`,
  },
  {
    id: 5,
    img: halktalk,
    name: "HACk Talks",
    info: `HACk Talks\nDate: 5th December 2022\n
    ● Hacks Talks event was organized to give a brief introduction and share the journey of the students who participated in various International and National Hackathons.
    ● Our eminent speakers were the Smart India Hackathon 2022 Winners of hardware and software category - Sharyu Marwadi, Rucha Choudhari, Vaidehi Patil, Parimal Thakre, Riya Jain.
    ● We also had Sharyu and Rucha to share their experience who recently got selected and participated UNESCO India-African Hackathon.
    ● The session was concluded with a questionnaire session from the participants giving them a clear perspective.`,
  },
  {
    id: 6,
    img: resessions,
    name: "A session on Recession",
    info: `A session on Recession\nDate: 21st Feb 2023\n
    ● increased awareness and understanding of the impact of economic recession on the engineering industry.
    ● improved knowledge and skills in navigating the job market during an economic downturn.
    ● focused on developing a long-term perspective on their career goals and aspirations.`,
  },
  {
    id: 7,
    img: experttalkfuture,
    name: "Expert Talk",
    info: `Expert Talk on The Role of Computer
    Engineers in Industry and future Scope\nDate: 25th April 2023 \nConducted by: Sagar Nikam sir, ELC Nashik.\n The session was aimed at providing insights on when to start preparing for Post Graduation like M.tech, MS and MBA, the career opportunities in these fields, and the benefits of pursuing these programs.\n
    ● increased awareness and understanding of the impact of economic recession on the engineering industry.
    ● improved knowledge and skills in navigating the job market during an economic downturn.
    ● focused on developing a long-term perspective on their career goals and aspirations.`,
  },
  {
    id: 8,
    img: equinox,
    name: "EQUINOX 2023",
    info: `EQUINOX 2023\nDate: 28th April 2023\n
    Equinox included various events like-
    ● Furious Finders ➔ It was a “Treasure hunt” competition where clues were placed all over the college campus. Students had to unravel the clues, solve the puzzles, and uncover the hidden treasure to reach the destination.
    ● Web Battles ➔ 'Web-Battles' was an event where technical skills related to Web Development were tested.
    ● Ideathon ➔ participants came up with unique start-up and project ideas with the solution and presented them in 7 min pitch using presentation (ppt).
    ● ShutterBug ➔ Photography-based competition. Each participant had to submit their best clicked pictures.
    ● Project Wars ➔ 'Project Wars' was an event exclusively for the ready projects with prototypes/websites.`,
  },
  {
    id: 9,
    img: dsbda,
    name: "DSBDA MINI Project Competition",
    info: "DSBDA MINI Project Competition\nDate : 15th May 2023\nShowcasing innovative data science and big data analytics projects.",
  },
  {
    id: 10,
    img: dsa,
    name: "DSA Mini-Project Competition",
    info: "DSA Mini-Project Competition\nDate : 27 th May 2023\nSpotlighting creative solutions in data structures and algorithms.",
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
    <div
      id="event1"
      className="event1 flex flex-col justify-center items-center relative w-full h-2/3 sm:h-3/4 md:h-lvh overflow-hidden"
    >
      <div className="relative justify-center items-center text-center">
        <a>
          <h2 className="text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900 ">
            Events
          </h2>
          <p className="mt-2 text-xl xl:text-2xl font-thin">
            Events of the Debuggers Club.
          </p>
        </a>
      </div>
      <div className="relative w-4/5 h-1/2 sm:h-5/6  md:h-full md:w-2/3 md:m-6 sm:mt-20 overflow-hidden">
        <Slider {...settings}>
          {eventsData.map((event, index) => (
            <div
              className="relative bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden perspective-1000px shadow-box transition-transform duration-600 ease-in-out transform-gpu"
              key={event.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={event.img}
                alt={event.name}
                className=" w-fit h-fit transition-transform duration-600 ease-in-out transform-gpu"
                style={{
                  transform: hoverStates[index] ? "scale(0)" : "scale(1)",
                  opacity: hoverStates[index] ? 0 : 1,
                }}
              />
              <div
                className="absolute top-0 left-0 w-full h-full p-4 bg-gray-100 transform rotate-x-90 transform-origin-bottom transition-all duration-600 ease-in-out "
                style={{
                  transform: hoverStates[index]
                    ? "rotateX(0deg)"
                    : "rotateX(-90deg)",
                }}
              >
                {event.info.split("\n").map((line, idx) => (
                  <p
                    key={idx}
                    className="mt-1 text-sm font-mono font-light text-black leading-5"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Eventpg;
