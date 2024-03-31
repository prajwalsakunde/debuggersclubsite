import React from 'react';
import './Card.css'; // assuming your CSS file is named Card.css

const Card = ({ name, img, info }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={img} className='rounded-full' alt={name} /> {/* Provide alt attribute for accessibility */}
      </div>
      <div className="card-info">
        <span>{name}</span>
        <p>{info}</p>
      </div>
      <a href="#" className="button">Know more</a> {/* You might want to provide a proper href */}
    </div>
  );
}

export default Card;
