import React from 'react';
import './Styles.css'
import { FaLocationArrow } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import FeatureBox from './FeatureBox';


function Features() {
  return (
    <div className="Features">
      
        <FeatureBox Text="Some Text" icon={<GiBoxUnpacking />}/>
        <FeatureBox Text="Some Text" icon={<GiBoxUnpacking />}/>
        <FeatureBox Text="Some Text" icon={<GiBoxUnpacking />}/>
        <FeatureBox Text="Some Text" icon={<GiBoxUnpacking />}/>
        <FeatureBox Text="Some Text" icon={<GiBoxUnpacking />}/>
        <FeatureBox Text="Some Text" icon={<GiBoxUnpacking />}/>
    </div>
  );
}

export default Features;
