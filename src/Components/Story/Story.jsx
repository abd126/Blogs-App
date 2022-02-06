import React from 'react';
import './Style.css';
import Image from '../../Images/Story.jpg'

function Story() {
    return (
        <div className="Story">
            <div className="Story-Detail">
                <h1 className='Heading'>New Product</h1>
                <h1>Lorem ipsum dolor sit amet consectetur,</h1>
            </div>
            <div className='Story-Img'>
                <img src={Image} alt="" />
            </div>
        </div>
    );
}

export default Story;
