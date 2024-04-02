import React from 'react';
import './Card.css'; // assuming your CSS file is named Card.css
import insta from "../assets/instagram.png"
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"

const Card = ({ name, img, info }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={img} className='rounded-full' alt={name} /> 
      </div>
      <div className="card-info mb-5">
        <span className='pb-2'>{name}</span>
        <p>{info}</p>
      </div>
      <div className="relative flex gap-20 flex-row ">
      
      <section className="flex flex-row justify-center items-center">
          <a
            href="https://www.instagram.com/debuggersclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_self"
            className="group flex justify-center text-white font-semibold hover:-translate-y-3  transition-all  d1ration-500"
          >
            <img src={insta} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
          
          </a>
        </section>
        
      <section className="flex flex-row justify-center items-center">
          <a
            href="https://www.instagram.com/debuggersclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_self"
            className="group flex justify-center text-white font-semibold hover:-translate-y-3  transition-all d1ration-500"
          >
            <img src={gmail} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
          
          </a>
        </section>
        
      <section className="flex flex-row justify-center items-center">
          <a
            href="https://www.instagram.com/debuggersclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_self"
            className="group flex justify-center text-white font-semibold hover:-translate-y-3  transition-all d1ration-500"
          >
            <img src={linkedin} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
          
          </a>
        </section>
      </div>
    </div>
  );
}

export default Card;
