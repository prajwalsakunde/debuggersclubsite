import React, { useState, useEffect } from 'react';
import equx from '../Imgs/Equinox2024.jpg';
import './popup.css';
function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`fixed top-20 xl:top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center  items-center transition-opacity ${showPopup ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="popup-box flex flex-col  w-96  md:w-1/2 md:h-1/2 lg:w-1/2 lg:h-1/2 xl:w-1/2 xl:h-2/3 h-1/2 rounded-lg shadow-lg p-2 transform transition-transform ease-in-out duration-300 whitespace-normal">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={handleClosePopup}>
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div className='flex w-full justify-center items-center h-full'>
            <img src={equx} className=' rounded-lg w-1/2 h-1/2 md:w-2/3 md:h-2/3 lg:w-4/5 lg:h-4/5  xl:w-11/12 xl:h-full' />
        </div>
        </div>
    </div>
  );
}

export default Popup;
