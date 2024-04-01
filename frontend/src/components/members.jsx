import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"; // Assuming Card component is in the same directory
import prajwal from "../Imgs/prajwal.png";
const membersData = [
  {
    id: 1,
    img: prajwal,
    name: "Prajwal Sakunde",
    info: "Website/Erp Coordinator",
  },
  {
    id: 2,
    img: prajwal,
    name: "Vedant Patil",
    info: "Placement Coordinator",
  },
  {
    id: 3,
    img: prajwal,
    name: "Om Patil",
    info: "Creatives",
  },
  {
    id: 4,
    img: prajwal,
    name: "Rugved Kulkarni",
    info: "Secretary",
  },
  {
    id: 5,
    img: prajwal,
    name: "Pruthvij Desai",
    info: "Discipline Committee",
  },
  {
    id: 6,
    img: prajwal,
    name: "Aarushi Taori",
    info: "President",
  },
  {
    id: 7,
    img: prajwal,
    name: "Abhijit Wagh",
    info: "Vice President",
  },
  {
    id: 8,
    img: prajwal,
    name: "Ashiya Ajare",
    info: "Secreatry",
  },
  {
    id: 9,
    img: prajwal,
    name: "Atharva Sangle",
    info: "Treasurer",
  },
  {
    id: 10,
    img: prajwal,
    name: "Vishakha Sainani",
    info: "Treasurer",
  },
  {
    id: 11,
    img: prajwal,
    name: "Atharva Deore",
    info: "Alumni Coordinator",
  },
  {
    id: 12,
    img: prajwal,
    name: "Pranav Salunkhe",
    info: "Alumni Coordinator",
  },
  {
    id: 13,
    img: prajwal,
    name: "Shurti Ware",
    info: "Placement Coordinator",
  },
  {
    id: 14,
    img: prajwal,
    name: "Yashraj Desale",
    info: "Website/Erp Coordinator",
  },
  {
    id: 15,
    img: prajwal,
    name: "Sharvari Borse",
    info: "Workshop/Expert Talk",
  },
  {
    id: 16,
    img: prajwal,
    name: "Srushti Nikham",
    info: "Workshop/Expert Talk",
  },
  {
    id: 17,
    img: prajwal,
    name: "Sanika Mahanjan",
    info: "Discipline Committee",
  },
  {
    id: 18,
    img: prajwal,
    name: "Roshani Amrutkar",
    info: "Creatives",
  },
  {
    id: 19,
    img: prajwal,
    name: "Deshna Shah",
    info: "Core Member",
  },
  {
    id: 20,
    img: prajwal,
    name: "Raksha Aage",
    info: "Core Member",
  },
  {
    id: 21,
    img: prajwal,
    name: "Komal Attarde",
    info: "Core Member",
  },
  {
    id: 22,
    img: prajwal,
    name: "Pritam Gaikwad",
    info: "Core Member",
  },
  {
    id: 23,
    img: prajwal,
    name: "Bhakti Joshi",
    info: "Core Member",
  },
  {
    id: 24,
    img: prajwal,
    name: "Harsh Mahale",
    info: "Core Member",
  },
  {
    id: 25,
    img: prajwal,
    name: "Rashmi Patil",
    info: "Core Member",
  },
];

const Members = () => {
  const [hoverStates, setHoverStates] = useState(membersData.map(() => false));

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
    autoplaySpeed: 2000,
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
      id="member1"
      className="flex flex-col justify-center items-center relative w-full h-screen overflow-hidden"
    >
      <div className="relative justify-center items-center text-center">
        <a>
          <h2 className="sm:text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900 ">
            Committee
          </h2>
          <p className="mt-2 sm:text-xl xl:text-2xl font-thin">
            Members of the Debuggers Club 2023-24.
          </p>
        </a>
      </div>
      <div className="relative w-1/2 h-screen m-6 mt-20 overflow-hidden">
        <Slider {...settings}>
          {membersData.map((memb) => (
            <div key={memb.id}>
              <Card name={memb.name} img={memb.img} info={memb.info} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Members;
