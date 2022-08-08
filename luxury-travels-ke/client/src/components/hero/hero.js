import React from 'react';
import './hero.css';
import Video from '../../assets/lion.mp4';
import {AiOutlineSearch} from 'react-icons/ai';

function Hero() {
    return (
        <div className="hero">
            {/* video hero and properties */}
            <video autoPlay loop muted id="video">
                <source src={Video} type="video/mp4"/>
            </video>
            {/* set overlay div to enable us display text over images/videos in hero */}
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>First Class Luxury Travel</h1>
                <h2>Experience the Best of Kenya</h2>
                {/* search functionality on hero */}
                <form className="form">
                    <div>
                        <input type="text" placeholder="Search Destinations"/>
                    </div>
                    <div className="search-button">
                        <button><AiOutlineSearch className="icon"/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
