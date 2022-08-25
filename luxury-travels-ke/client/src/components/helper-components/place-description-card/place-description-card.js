import React from 'react';
import './place-description-card.css';
import {FaStar} from 'react-icons/fa';

function PlaceDestinationCard({bgImg, alt, header, description}) {
    return (
        <div className='place-destination-card'>
            <div className="image">
                <img src={bgImg} alt={alt}/>
            </div>
            <div className="description">
                <div className="place">
                    <FaStar className='star-icon'/>
                    <h3>{header}</h3>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    )
}
export default PlaceDestinationCard
