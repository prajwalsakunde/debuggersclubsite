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
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      id="member1"
      className="member1 flex justify-center relative w-full h-screen "
    >
      <div className="absolute  text-center ">
        <h2 className="text-3xl font-bold">Events</h2>
        <p className="mt-2 text-lg">Events of the Debuggers Club.</p>
      </div>
      {/* <div className="w-4/5 h-3/4 m-10"> */}
      <div className=" w-1/2 h-3/4 m-10 mt-20">
        <Slider {...settings}>
          {eventsData.map((d) => (
            <div className="card w-60 h-80 md:w-20  md:h-128" key={d.id}>
              <img className="w-full rounded-lg" src={d.img} alt={d.name} />
              <div className="card__content">
                <p className="card__title">{d.name}</p>
                <p className="card__description">{d.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Eventpg;
