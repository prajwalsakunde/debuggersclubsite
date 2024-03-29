import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaOpencart } from "react-icons/fa";
import logo from "../assets/logo.png";
import debuggers from '../assets/debuggers.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (tab) => {
    if (activeTab === tab) {
      window.location.reload();
    } else {
      setActiveTab(tab);
    }
  };

  // <div className="pt-2">
  // <Link to="/">
  // <img src={debuggers} className="w-26 h-8" alt="Logo" />  
  // </Link>
  // </div>
  // <div className="px-5 sm:ml-5">
  // <Link to="/">
  // <img src={logo} className="w-16 h-16" alt="Logo" />  
  // </Link>
  // </div>
  return (
    <nav className="bg-white px-10 pt-3 pb-7 flex flex-col items-center sm:flex-row justify-between">
     <div className="pt-2">
          <Link to="/">
          <img src={debuggers} className="" alt="Logo" />  
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
        <NavLink
          to="/"
          className={`text-lg font-extralight hover:font-semibold hover:text-black mr-0 sm:ml-10  sm:mr-32 ${
            activeTab === "event" ? "text-black font-semibold" : "text-lg font-extralight text-black"
          }`}
          onClick={() => handleNavLinkClick("event")}
        >
          Event
        </NavLink>
        <NavLink
          to="/"
          className={`text-lg font-extralight hover:font-semibold hover:text-black sm:mr-32 ${
            activeTab === "members" ? "text-black font-semibold" : "text-lg font-extralight text-black"
          }`}
          onClick={() => handleNavLinkClick("members")}
        >
        Members
        </NavLink>
        
        <NavLink
          to="/"
          className={`text-lg font-extralight hover:font-semibold hover:text-black sm:mr-8 ${
            activeTab === "contact" ? "text-black font-semibold" : "text-lg font-extralight text-black"
          }`}
          onClick={() => handleNavLinkClick("contact")}
        >
          Contact us
        </NavLink>
        </div>
      
        
    </nav>
  );
}

export default NavBar;
