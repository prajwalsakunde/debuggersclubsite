import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo.png";
import debuggers from '../assets/debuggers.png';
import { Link } from 'react-scroll';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white px-10 pt-3 pb-5 flex flex-col items-center sm:flex-row justify-between">
        <div className="pt-2 flex items-center">
          <img src={logo} className="w-14 h-14 ml-2 mr-7" alt="logo" />
          <Link to='event1' spy={true} smooth={true} offset={-70} duration={500}>
            <img src={debuggers} className="mt-2" alt="name" />
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            onClick={handleMenuToggle}
            className="block text-gray-600 focus:outline-none"
          >
            <FiChevronDown />
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col sm:flex-row items-center space-y-1 sm:space-y-0  sm:flex `}
        > 
          <Link
            to="event1"
            spy={true} smooth={true} offset={-70} duration={500}
            className="sm:text-sm md:text-lg font-extralight hover:font-semibold hover:text-black mr-0 sm:ml-10  sm:mr-32"
          >
            Event
          </Link>

          <Link
            to="member1"
            spy={true} smooth={true} offset={-70} duration={500}
            className="sm:text-sm md:text-lg font-extralight hover:font-semibold hover:text-black sm:mr-32"
          >
            Members
          </Link>
          
          <Link
            to="contact1"
            spy={true} smooth={true} offset={-70} duration={500}
            className="sm:text-sm md:text-lg font-extralight hover:font-semibold hover:text-black sm:mr-8"
          >
            Contact us
          </Link>
        </div>  
      </nav>
      <div className="p-1 sm:p-2 bg-gradient-to-r from-indigo-200 from-10%  via-sky-200 via-40% to-fuchsia-100 to-90%"></div>
    </div>
  );
}

export default NavBar;
