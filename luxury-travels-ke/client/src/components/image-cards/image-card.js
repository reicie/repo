import React from 'react';
import './image-card.css';

function ImageCard({bgImg, text}) {
    return (
        <div className="selects-location">
            <a href="/">
                <img src={bgImg} alt="/"/>
            </a>
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ImageCard
