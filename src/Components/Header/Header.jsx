import React from 'react';
import './Style.css'
// import Banner from '../../Images/Banner.jpg'
import Feature from "../Features/Features"
import Navbaer from '../Navbar/Navbaer';



function Header() {
  return (
    <div className="Header">
        {/* <img src={Banner} alt="" /> */}
        <Navbaer />
        <Feature />
    </div>
  );
}

export default Header;
