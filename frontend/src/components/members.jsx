import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const membersData = [
  { id:1,
    name: "Om Patil",
    img: `https://res.cloudinary.com/dpn9zrpa8/image/upload/v1711731345/images/Om_Patil_djppab.jpg`,
    position: "Creatives",
    link: "Link",
  },
  { id:2,
    name: "Prajwal Sakunde",
    img: "https://res.cloudinary.com/dpn9zrpa8/image/upload/v1711731341/images/Prajwal_Sakunde_mfulx6.jpg",
    position: "Web ERP",
    link: "Link",
  },
  { id:3,
    name: "Rugved Kulkarni",
    img: "https://res.cloudinary.com/dpn9zrpa8/image/upload/v1711731336/images/RugvedPhoto_ktxluq.jpg",
    position: "Secretary",
    link: "Link",
  },
  { id:4,
    name: "Pruthvij Desai",
    img: "https://res.cloudinary.com/dpn9zrpa8/image/upload/v1711731338/images/Pruthvij_hczpo2.jpg",
    position: "Descipline",
    link: "Link",
  },
];

const members = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
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
    <div id='member1' className="member1 flex justify-center relative w-full h-screen ">
    <div className="absolute  text-center ">
      <h2 className="text-3xl font-bold">Members</h2>
      <p className="mt-2 text-lg">Members of the 2024 Debuggers Club.</p>
    </div> 
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {membersData.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-xl" key={d.id}>
              <div className="h-56 rounded-t-xl flex justify-center items-center ">
                <img
                  src={d.img}
                  className="h-44 w-44 rounded-full"
                  alt="image not loading"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.position}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Link
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default members;
