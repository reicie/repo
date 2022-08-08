import React from 'react';
import './travel-ideas.css';

import Wildebeest from '../../assets/images/wildebeest-2.jpg';
import MaasaiMara from '../../assets/images/Maasai-Mara.jpg';
import Couple from '../../assets/images/romantic-couples.jpg';
import Balloon from '../../assets/images/Maasai-Mara-Balloon.jpg';
import Nakuru from '../../assets/images/Nakuru.jpg';
import QuadBiking from '../../assets/images/Quad-Biking.jpg';

import Tour from '../tours/tour';


function TravelIdeas() {
    return (
        <div className="travel-ideas">
            <h2>Our Most Popular Luxury Trip Packages</h2>
            <div className="container">
                {/* <div className="left"> */}
                    {/* Ultimate Kenyan Safari */}
                    <Tour bgImg={Balloon} title='The Ultimate Kenyan Experience' 
                        price='PRICES START FROM $12000 PP' notes='Experience all that Kenya has to offer including Game drives, Adrenaline inducing adventure in the wild, Relaxation at the Kenyan coast'
                        link='EXPLORE THIS TRIP'
                    />
                    {/* The Kenyan Honeymoon/Anniversary Experience */}
                    <Tour bgImg={Couple}
                        title='Romantic Gateaway in Kenya (Honeymoon or Anniversary)'
                        price='PRICES START FROM $10499 PP'
                        notes='Enjoy a romantic gateaway which includes hot air balloon ride, beautiful beaches and safari.'
                        link='EXPLORE THIS TRIP'
                    />
                    {/* Classic Kenyan Family Safari */}
                    <Tour bgImg={MaasaiMara}
                        title='Classic Kenyan Family Safari'
                        price='PRICES START FROM $8999'
                        notes='Perfect package for families with young children. Includes giraffe and elephant feeding in Nairobi.'
                        link='EXPLORE THIS TRIP'
                    />
                    {/* Adrenaline and Safari */}
                    <Tour bgImg={QuadBiking}
                        title='Adrenaline Kick and Safari'
                        price='PRICES START FROM $7499'
                        notes='Explore adrenaline inducing activities in Northern Kenya and unwind with a safari in Maasai Mara. 
                                Activities include Quad biking, mini hikes, horse riding, etc.'
                        link='EXPLORE THIS TRIP'
                    />
                    {/* Luxury Kenyan Safari on a Budget */}
                    <Tour bgImg={Nakuru}
                        title='Luxury Safari on a Budget'
                        price='PRICES START FROM $7499'
                        notes='Explore adrenaline inducing activities in Northern Kenya and unwind with a safari in Maasai Mara. 
                                Activities include Quad biking, mini hikes, horse riding, etc.'
                        link='EXPLORE THIS TRIP'
                    />
                    {/* The Wildebeest Migration */}
                    <Tour bgImg={Wildebeest}
                        title='World Famous Wildebeest Migration'
                        price='PRICES START FROM $7499'
                        notes='Explore adrenaline inducing activities in Northern Kenya and unwind with a safari in Maasai Mara. 
                                Activities include Quad biking, mini hikes, horse riding, etc.'
                        link='EXPLORE THIS TRIP'
                    />
                {/* </div> */}
                {/* <div className="right"> */}
                    {/* <div className="contact-box">
                        <h4 className="header">Create Your Bespoke Kenyan Safari</h4>
                        <p className="customize">Completely customized to your tastes, desires and budget</p>
                        <p className="more"></p>
                    </div> */}
                    {/* <form> */}
                        {/* name */}
                        {/* <div className="name">
                            <div className="input-wrapper">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text"/>
                            </div>
                        </div> */}
                        {/* type of trip you are interested in */}
                        {/* <div className="input-wrapper">
                            <label htmlFor="trip-type">Who are you traveling with?</label>
                            <select>
                                <option value="couple">Couple</option>
                                <option value="family">family</option>
                                <option value="group-friends">Group of Friends</option>
                                <option value="solo">Solo</option>
                                <option value="2+families">2+ Families</option>
                                <option value="other">Other</option>
                            </select>
                        </div> */}
                        {/* Adventures that matters most to you */}
                        {/* <div className="input-wrapper">
                            <label htmlFor="experience-type">What Experiences are most important to you?</label>
                            <select>
                                <option value="safari">See all the Big 5 and other animals in the wild</option>
                                <option value="family">Create a custom family adventure for all ages</option>
                                <option value="romantic">Enjoy a romantic gateaway with a touch of African Safari</option>
                                <option value="Active/Sporty">Get adrenaline kick in the wild</option>
                                <option value="Beach/Marine-parks">Enjoy Kenya's sandy beaches and diverse marine life</option>
                            </select>
                        </div> */}
                        {/* dates */}
                        {/* <div className="date">
                            <div className="input-wrapper">
                                <label htmlFor="start-date">Start Date</label>
                                <input type="date"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="end-date">End Date</label>
                                <input type="date"/>
                            </div>
                        </div> */}
                        {/* text area  */}
                        {/* <div className="input-wrapper">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message">
                            </textarea>
                        </div> */}
                        
                        {/* submit button */}
                        {/* <button>Enquire</button> */}
                    {/* </form> */}
                {/* </div> */}
            </div>
            
        </div>
    )
}

export default TravelIdeas
