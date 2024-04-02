import React from 'react';
import './Card.css'; // assuming your CSS file is named Card.css
import insta from "../assets/instagram.png"

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
      <a href="#" target='_blank'>
      <img src={insta} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-7 h-7" />
            <span
              className="absolute opacity-0 group-hover:opacity-100 group-hover: text-slate-200  group-hover:text-sm group-hover:-translate-y-7 duration-700"
            >
              Instagram
            </span>
            </a> 
    </div>
  );
}

export default Card;
