import React from 'react';
import './Style.css';
import Logo from '../../Images/Logo1.png'


function Navbaer() {
  return (
    <div className='Navbar'>
        <div className="logo">
            <img src={Logo} alt="" width={100} height={100} />
        </div>
    	<div className="nav-links">
            <ul>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                
                <li>
                    <a href="#">
                        Product
                    </a>
                </li>
                
                <li>
                    <a href="#">
                        About Us
                    </a>
                </li>
                
                <li>
                    <a href="#">
                        Contacts
                    </a>
                </li>
            </ul>
        </div>

    </div>
  );
}

export default Navbaer;
