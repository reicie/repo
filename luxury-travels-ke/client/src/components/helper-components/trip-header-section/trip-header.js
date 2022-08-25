import React from 'react';
import './trip-header.css';

function TripHeader({duration, destination}) {
    return (
        <div className='trip-header'>
            <h4>{duration}</h4>
            <h3>{destination}</h3>
        </div>
    )
}

export default TripHeader
