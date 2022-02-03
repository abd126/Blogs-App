import React from 'react';
import './Styles.css'
import { FaLocationArrow } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";


function Features() {
  return (
    <div className="Features">
        <div className="Features-Box">
            <i><GiBoxUnpacking /></i>
        </div>
        <div className="Features-Box">
            <i><MdDeliveryDining /></i>
        </div>
        <div className="Features-Box">
        <i><MdDeliveryDining /></i>
        </div>
        <div className="Features-Box">
            <i><FaLocationArrow /></i>        
        </div>

    </div>
  );
}

export default Features;
