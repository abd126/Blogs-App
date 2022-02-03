import React from 'react';
import './Style.css'
import Banner from '../../Images/Banner.jpg'



function Header() {
  return (
    <div className="Header">
        <img src={Banner} alt="" />
    </div>
  );
}

export default Header;
