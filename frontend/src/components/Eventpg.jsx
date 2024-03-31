import React from "react";
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
import Slider from "react-slick";

const eventsData = [
  {
    id: 1,
    img: experttalkgate,
    name: "Expert Talk",
  },
  {
    id: 2,
    img: teachers,
    name: "Teacher's Day",
  },
  {
    id: 3,
    img: codeefiesta,
    name: "CODE-O-FIESTA",
  },
  {
    id: 4,
    img: Engineerday,
    name: "Engineer's day",
  },
  {
    id: 5,
    img: halktalk,
    name: "HACk Talks",
  },
  {
    id: 6,
    img: resessions,
    name: "A session on Recession",
  },
  {
    id: 7,
    img: experttalkfuture,
    name: "Expert Talk",
  },
  {
    id: 8,
    img: equinox,
    name: "EQUINOX 2023",
  },
  {
    id: 9,
    img: dsbda,
    name: "DSBDA MINI Project Competition",
  },
  {
    id: 10,
    img: dsa,
    name: "DSA MINI Project Competition",
  },
];

const Eventpg = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 2000,
    autoplay:true,
    autoplayspeed:2000,
    cssEase:"linear",
    pauseOnHover:false,
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
    <div className="flex flex-col justify-center items-center relative w-full h-full overflow-hidden">
      <div className="relative justify-center items-center text-center">
        <a>
        <h2 className="text-9xl font-sans font-light text-indigo-900 ">Events</h2>
        <p className="mt-2 text-2xl font-thin">Events of the Debuggers Club.</p>
        </a>
      </div>
      <div className="relative w-screen h-3/4 m-6 mt-20 overflow-hidden">
        <Slider {...settings}>
          {eventsData.map((d) => (
            <div className="card w-full h-80 md:w-20 overflow-hidden md:h-128" key={d.id}>
              <img className="w-full rounded-lg" src={d.img} alt={d.name} />
              <div className="card__content bg-opacity-5 bg-slate-400 absolute bottom-0 left-0 w-full p-4 transform translate-y-full transition duration-300 ease-in-out hover:translate-y-0">
                <p className="card__title text-lg font-semibold text-white">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Eventpg;
