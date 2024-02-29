
import { NavLink ,Link} from "react-router-dom";
import { useState } from "react";
import logo from '../assets/logo.png';
function NavBar() {
    return(
        <nav>
          <div>
           <Link to={'/'}> 
              <img src={logo} className="w-10 h-10" alt="Logo" />
           </Link>
           <NavLink>
              
            </NavLink> 
          </div>  
        </nav>
    )
    
  }
  
  export default NavBar;
  