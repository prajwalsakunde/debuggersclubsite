import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"; 
import prajwal from '../assets/MembersPhotos/PrajwalSakunde.jpg';
import vedant from '../assets/MembersPhotos/VedantPatil.jpg'
import om from '../assets/MembersPhotos/OmPatil.jpg';
import rugved from '../assets/MembersPhotos/Rugved.jpg';
import pruthvij from '../assets/MembersPhotos/Pruthvij.jpg';
import aarushi from '../assets/MembersPhotos/Aarushi.jpg';
import abhijit from '../assets/MembersPhotos/Abhijit.jpg';
import ashiya from '../assets/MembersPhotos/Ashiya.jpg';
import atharvaS from '../assets/MembersPhotos/AtharvaSangle.jpg';
import vishakha from '../assets/MembersPhotos/VishakhaSainani.jpg';
import atharvaD from '../assets/MembersPhotos/AtharvaDeore.jpg';
import pranav from '../assets/MembersPhotos/PranavSalunkhe.jpg';
import shurti from '../assets/MembersPhotos/ShrutiWare.jpg';
import yashraj from '../assets/MembersPhotos/yashrajdesale.jpg';
import sharvari from '../assets/MembersPhotos/SharvariBorse.jpg';
import srushti from '../assets/MembersPhotos/SrushtiNikham.jpg';
import sanika from '../assets/MembersPhotos/SanikaMahajan.jpg';
import roshani from '../assets/MembersPhotos/RoshaniAmrutkar.jpg';
import deshna from '../assets/MembersPhotos/DeshnaShah.jpg';
import raksha from '../assets/MembersPhotos/RakshaAage.jpg';
import komal from '../assets/MembersPhotos/KomalAttarde.jpg';
import pritam from '../assets/MembersPhotos/PritamGaikwad.jpg';
import bhakti from '../assets/MembersPhotos/BhaktiJoshi.jpg';
import harsh from '../assets/MembersPhotos/HarshMahale.jpg';
import rashmi from '../assets/MembersPhotos/RashmiPatil.jpg';

const membersData = [
  {
    id: 1,
    img: prajwal,
    name: "Prajwal Sakunde",
    info: "Website/Erp Coordinator",
    insta:"https://www.instagram.com/prajwal.main?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==",
    linkedin:"https://www.linkedin.com/in/prajwals976757?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"prajwalsakunde1234@gmail.com",
  },
  {
    id: 2,
    img: vedant,
    name: "Vedant Patil",
    info: "Placement Coordinator",
    insta:"https://www.instagram.com/vedd___?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin:"https://www.linkedin.com/in/vedant-patil-b42b1925b/",
    mail:"vedantp2509@gmail.com",
  
  },
  {
    id: 3,
    img: om,
    name: "Om Patil",
    info: "Creatives",
    insta:"https://www.instagram.com/ompatil.7/",
    linkedin:"https://www.linkedin.com/in/om-patil-560a82249/",
    mail:"ompatil4749@gmail.com",
  
  },
  {
    id: 4,
    img: rugved,
    name: "Rugved Kulkarni",
    info: "Secretary",
    insta:"https://www.instagram.com/rugvedmkulkarni?igsh=MXBicnd5dWVxa3RocA==",
    linkedin:"https://www.linkedin.com/in/rugved-kulkarni-4aa728249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"rugvedmkulkarni@gmail.com",
  
  },
  {
    id: 5,
    img: pruthvij,
    name: "Pruthvij Desai",
    info: "Discipline Committee",
    insta:"https://www.instagram.com/pruthvij_008?igsh=ZGQyMTNlM2Z5MXlo",
    linkedin:"https://www.linkedin.com/in/pruthvij-desai/",
    mail:"desaipruthvij1@gmail.com",
  
  },
  {
    id: 6,
    img: aarushi,
    name: "Aarushi Taori",
    info: "President",
    insta:"https://www.instagram.com/_aaru_3009?igsh=YmV3ZmlicHo5aHlm&utm_source=qr",
    linkedin:"https://www.linkedin.com/in/aarushi-taori-b5b279229/",
    mail:"aarushit2003@gmail.com ",
  
  },
  {
    id: 7,
    img: abhijit,
    name: "Abhijit Wagh",
    info: "Vice President",
    insta:"https://www.instagram.com/abhijit._2?igsh=YmkxN2g1Y2RwbTM2",
    linkedin:"https://www.linkedin.com/in/abhijit-wagh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"abhi.wagh2712@gmail.com",
  
  },
  {
    id: 8,
    img: ashiya,
    name: "Ashiya Ajare",
    info: "Secretary",
    insta:"https://www.instagram.com/ashiyaajare",
    linkedin:"https://www.linkedin.com/in/ashiya-ajare-b85266233",
    mail:"ashiya.ajare@gmail.com",
  
  },
  {
    id: 9,
    img: atharvaS,
    name: "Atharva Sangle",
    info: "Treasurer",
    insta:"https://www.instagram.com/atharva_sangle1063?igsh=MWVnajFuOWp5ajdqOA==",
    linkedin:"https://www.linkedin.com/in/atharva-sangle-a7789a239/",
    mail:"atharvasangle004@gmail.com",
  
  },
  {
    id: 10,
    img: vishakha,
    name: "Vishakha Sainani",
    info: "Treasurer",
    insta:"https://www.instagram.com/kyoko_chan26?igsh=Y2l6bzNuaTg3dGcy",
    linkedin:"https://www.linkedin.com/in/vishakha-sainani-85266b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"vishakhasainani26@gmail.com",
  
  },
  {
    id: 11,
    img: atharvaD,
    name: "Atharva Deore",
    info: "Alumni Coordinator",
    insta:"https://www.instagram.com/a_t_h_a_r_v_0402?igsh=c2tyczFrbG92NWF4",
    linkedin:"https://www.linkedin.com/in/atharv-deore-2a9b62248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"atharvadeore9934@gmail.com",
  
  },
  {
    id: 12,
    img: pranav,
    name: "Pranav Salunkhe",
    info: "Alumni Coordinator",
    insta:"https://www.instagram.com/pranavsalunkhe2003/",
    linkedin:"https://www.linkedin.com/in/pranav-salunkhe-89926822a/",
    mail:"pranavsalunkhe327@gmail.com",
  
  },
  {
    id: 13,
    img: shurti,
    name: "Shurti Ware",
    info: "Placement Coordinator",
    insta:"https://www.instagram.com/shrutiware_30?igsh=ZGt1dHZ5dnZsNjln",
    linkedin:"https://www.linkedin.com/in/shruti-ware-598943229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"shrutiware1@gmail.com",
  
  },
  {
    id: 14,
    img: yashraj,
    name: "Yashraj Desale",
    info: "Website/Erp Coordinator",
    insta:"https://www.linkedin.com/in/bkyashrajdesale/",
    linkedin:"https://www.instagram.com/yashrajdesale02?igsh=MWlnenE2a2JuemFmeg==",
    mail:"yashrajdesale1@gmail.com",
  
  },
  {
    id: 15,
    img: sharvari,
    name: "Sharvari Borse",
    info: "Workshop/Expert Talk",
    insta:"https://www.instagram.com/sharvari1587?igsh=MTNvdnA1eXN0YWZqOA==",
    linkedin:"https://in.linkedin.com/in/sharvari-borse-38a88024a",
    mail:"sharvariborse03@gmail.com",
  
  },
  {
    id: 16,
    img: srushti,
    name: "Srushti Nikham",
    info: "Workshop/Expert Talk",
    insta:"",
    linkedin:"",
    mail:"",
  
  },
  {
    id: 17,
    img: sanika,
    name: "Sanika Mahanjan",
    info: "Discipline Committee",
    insta:"https://www.instagram.com/mahajan_sanika_72?igsh=NWh4bWhvNnVnbHBz",
    linkedin:"www.linkedin.com/in/sanika-mahajan-8896a622b",
    mail:"sanikamahajan03@gmail.com",
  
  },
  {
    id: 18,
    img: roshani,
    name: "Roshani Amrutkar",
    info: "Creatives",
    insta:"https://www.instagram.com/roshaniamrutkar14?igsh=MWV0eGxoanQxdGE2Yg==",
    linkedin:"https://www.linkedin.com/in/roshani-amrutkar-15039b22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"roshaniamrutkar14@gmail.com",
  
  },
  {
    id: 19,
    img: deshna,
    name: "Deshna Shah",
    info: "Core Member",
    insta:"https://www.instagram.com/_deshna_shah_27?igsh=MXNsYXMxcjVhMDlhNw==",
    linkedin:"https://www.linkedin.com/in/deshna-shah-2602b0253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"deshnashah03@gmail.com",
  
  },
  {
    id: 20,
    img: raksha,
    name: "Raksha Aage",
    info: "Core Member",
    insta:"https://www.instagram.com/_raksha__21?igsh=aWtkNXlhYjI5cTg=",
    linkedin:"https://www.linkedin.com/in/raksha-aage",
    mail:"aageraksha21@gmail.com",
  
  },
  {
    id: 21,
    img: komal,
    name: "Komal Attarde",
    info: "Core Member",
    insta:"https://www.instagram.com/_komalll.04__?igsh=YmszZmp0ZGppYzg=",
    linkedin:"https://www.linkedin.com/in/komal-attarde-43a9aa228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"komalattarde04@gmail.com",
  
  },
  {
    id: 22,
    img: pritam,
    name: "Pritam Gaikwad",
    info: "Core Member",
    insta:"https://www.instagram.com/_pritam.27?igsh=amVwZ2xjdnN6MmFo",
    linkedin:"https://www.linkedin.com/in/pritam-gaikwad-58ab332a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"gaikwadpritamk23@gmail.com",
  
  },
  {
    id: 23,
    img: bhakti,
    name: "Bhakti Joshi",
    info: "Core Member",
    insta:"",
    linkedin:"",
    mail:"",
  
  },
  {
    id: 24,
    img: harsh,
    name: "Harsh Mahale",
    info: "Core Member",
    insta:"https://www.instagram.com/harsh_.075?igsh=OXB2OHhoYzZ5eDky",
    linkedin:"https://www.linkedin.com/in/harsh-mahale-7a53b6277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    mail:"harshmahale0@gmail.com",
  
  },
  {
    id: 25,
    img: rashmi,
    name: "Rashmi Patil",
    info: "Core Member",
    insta:"",
    linkedin:"",
    mail:"",
  
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
    speed: 2000,
    autoplay: true,
    slidesToScroll:1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
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
      className="member1 flex flex-col justify-center items-center relative w-full h-screen overflow-hidden"
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
      <div className="relative w-1/2 h-screen m-4 mt-20 overflow-hidden">
        <Slider {...settings}>
          {membersData.map((memb) => (
            <div key={memb.id} className="mb-14">
              <Card name={memb.name} img={memb.img} info={memb.info} insta={memb.insta} linkedin={memb.linkedin} mail={memb.mail} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Members;

        