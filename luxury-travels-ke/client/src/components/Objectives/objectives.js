import React from 'react';
import './objectives.css';
import {FaRoute, FaEnvira, FaHandHoldingHeart} from 'react-icons/fa';
import {BsAward} from 'react-icons/bs';

function Objectives() {
    return (
        <div className="objectives">
            <h2>Why Book With Us?</h2>
            <div className="container">
                <div className="left">
                    <div className="icon-container">
                        <FaRoute className="icon" />
                    </div>
                    <h3>Trip Planning</h3>
                    <p>
                        We create personalised journeys from start to end.
                        We work with all ages from toddlers to the elderly and ensure that everyone has the best time possible during your travel.
                        Nanny services included to allow for adult/romantic dates during the trips. 
                    </p>
                </div>
                <div className="middle-1">
                    <div className="icon-container">
                        <BsAward className="icon"/>
                    </div>
                    <h3>Authentic Experiences</h3>
                    <p>
                        We have genuine local experts for each and every destination with many years of experience. 
                        We match your interests, tastes and budget with commitment to quality and exceptional 
                        experiences.
                    </p>
                </div>
                <div className="middle-2">
                    <div className="icon-container">
                        <FaHandHoldingHeart className="icon"/>
                    </div>
                    <h3>Community Partnerships</h3>
                    <p>10% of all of gross revenue goes to the local community to support education, women empowernment 
                        and welfare improvement of the Maasai community
                    </p>
                </div>
                <div className="right">
                    <div className="icon-container">
                        <FaEnvira className="icon"/>
                    </div>
                    <h3>Responsible Travel</h3>
                    <p>
                        We work with local vendors who adhere to eco-friendly and sustainability practices. 
                        Our aim is to ensure that your trips are as carbon neutral and include tree planting
                        for each of our guests.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Objectives
