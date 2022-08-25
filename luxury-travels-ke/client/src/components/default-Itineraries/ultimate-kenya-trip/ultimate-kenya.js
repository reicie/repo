import React from 'react';
import './ultimate-kenya.css';
import Mara from '../../../assets/images/Maasai-Mara.jpg';

import {Link} from 'react-scroll';

import {FaRoute} from 'react-icons/fa';
import {AiOutlineDollarCircle, AiOutlineCheckCircle} from 'react-icons/ai';
import {BiSupport} from 'react-icons/bi';
import {MdOutlineCancel} from 'react-icons/md';

import NairobiArrival from '../../destination-activities/nairobi-arrivals/nairobi-arrivals';
import LewaConservancy from '../../destination-activities/lewa-conservancy/lewa-conservancy';
import Amboseli from '../../destination-activities/amboseli/amboseli';
import MaasaiMaraReserve from '../../destination-activities/maasai-mara-national-reserve/maasai-mara-reserve';
import DianiBeach from '../../destination-activities/diani/diani-beach';
import NairobiDeparture from '../../destination-activities/nairobi/nairobi';
import NavigationCard from '../../helper-components/navigation-side-card/navigation-card';


function UltimateKenyaTrip() {
    return (
        <div className='ultimate-kenya'>
            <div className="hero-img">
                <img src={Mara} alt="Maasai Mara National Reserve, Kenya"/>
            </div>
            <div className="container">
                <div className="places-included">
                    <p>Nairobi | Lewa | Amboseli | Maasai Mara | Kenyan Coast</p>
                </div>
                <h2>Why Work with Us</h2>
                <div className="about-us">
                    <div className="personalized-trips">
                        <div className="icon-container">
                            <FaRoute className="icon" />
                        </div>
                        <p>Bespoke Vacation trips. We personalise your trips from start to finish based on your wants without sacrificing the luxury</p>
                    </div>
                    <div className="pay-per-month">
                        <div className="icon-container">
                            <AiOutlineDollarCircle className="icon" />
                        </div>
                        <p>Flexible Payments. Pay the deposit and then pay the balance 2 weeks before your trip</p>
                    </div>
                    <div className="detail-oriented">
                        <div className="icon-container">
                            <FaRoute className="icon" />
                        </div>
                        <p>Detail oriented team of experts to help you plan the perfect vacation and experience you'll never forget</p>
                    </div>
                    <div className="support">
                        <div className="icon-container">
                            <BiSupport className="icon" />
                        </div>
                        <p>Dedicated support expert before, during and after your trip so that you have the best possible experience</p>
                    </div>
                </div>
                {/* Itinerary Highights, what is included and not included */}
                {/* <div className="inclusion-section">
                    <div className="itinerary-highlights card">
                        <h3>Itinerary Highlights</h3>
                        <ul>
                            <li><AiOutlineCheckCircle className="checked"/>Quad biking in Northern Kenya</li>
                            <li><AiOutlineCheckCircle className="checked"/>Wildlife and horse riding in Lewa</li>
                            <li><AiOutlineCheckCircle className="checked"/>Spectacular wildlife viewing</li>
                            <li><AiOutlineCheckCircle className="checked"/>Day and Night Game Drives</li>
                            <li><AiOutlineCheckCircle className="checked"/>Feed giraffes & elephants in Nairobi</li>
                            <li><AiOutlineCheckCircle className="checked"/>Spot all Big 5</li>
                            <li><AiOutlineCheckCircle className="checked"/>Bush breakfast/Lunch</li>
                            <li><AiOutlineCheckCircle className="checked"/>Dinner under the stars</li>
                        </ul>
                    </div>
                    <div className="included card">
                        <h3>What Is Included</h3>
                        <ul>
                            <li><AiOutlineCheckCircle className="checked"/>All accommodations and meals</li>
                            <li><AiOutlineCheckCircle className="checked"/>Complementary drinks</li>
                            <li><AiOutlineCheckCircle className="checked"/>Internal transfers</li>
                            <li><AiOutlineCheckCircle className="checked"/>All Government fees and taxes</li>
                            <li><AiOutlineCheckCircle className="checked"/>Expert guiding at all places</li>
                            <li><AiOutlineCheckCircle className="checked"/>Flying doctors medical insurance</li>
                            <li><AiOutlineCheckCircle className="checked"/>Full support from planning, during & after</li>
                        </ul>
                    </div>
                    <div className="excluded card">
                        <h3>What Is Not Included</h3>
                        <ul>
                            <li><MdOutlineCancel class='canceled'/>International flights to/from Kenya</li>
                            <li><MdOutlineCancel class='canceled'/>International flights to/from Kenya</li>
                            <li><MdOutlineCancel class='canceled'/>Premium drinks and cocktails</li>
                            <li><MdOutlineCancel class='canceled'/>Any extra personal expenses</li>
                            <li><MdOutlineCancel class='canceled'/>Passport and Visas where applicable</li>
                            <li><MdOutlineCancel class='canceled'/>Personal Travel insurance</li>
                            <li><MdOutlineCancel class='canceled'/>Activities not included in the itinerary</li>
                            <li><MdOutlineCancel class='canceled'/>Tips and gratuities to drivers/guides/etc.</li>
                        </ul>
                    </div>
                </div> */}
                <div className="map-section">
                    <div className="map">
                    {/* <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1UzJDR0CYihKnbXFo-caaZS02baLrmrs&hl=en&ehbc=2E312F" 
                        width="640" 
                        height="480">
                    </iframe> */}
                    </div>
                    <div className="at-a-glance"></div>
                </div>
                <div className="example-itinerary">
                    <div className="itinerary">
                        <NairobiArrival duration = 'Day 1 - 2'/>
                        <LewaConservancy duration='Day 2 - 5'/>
                        <Amboseli duration='Day 5 - 7'/>
                        <MaasaiMaraReserve duration='Day 7 - 11'/>
                        <DianiBeach duration='Day 11 - 14'/>
                        <NairobiDeparture duration='Day 14 - 15'/>
                    </div>
                    <div className="side-card" style={{border:"1px solid green"}}>
                        <div className="navigation-card" style={{border:"1px solid purple"}}>
                            <NavigationCard link='nairobi-karibu-kenya' header='Days 1 - 2: Nairobi - Karibu Kenya'/>
                            <NavigationCard link='lewa-wildlife-conservancy' header='Days 2 - 5: Lewa Wildlife Conservancy'/>
                            <NavigationCard link='amboseli-safari' header='Days 5 - 7: Amboseli National Park'/>
                            {/* <div className="location active">
                                <Link to='nairobi-karibu-kenya'>Days 1 - 2: Nairobi - Karibu Kenya</Link>
                            </div>
                            <div className="location">
                                <Link to='lewa-wildlife-conservancy'>Days 2 - 5: Lewa Wildlife Conservancy</Link>
                            </div>
                            <div className="location">
                                <Link to='amboseli-safari'>Days 5 - 7: Amboseli National Park</Link>
                            </div>
                            <div className="location">
                                <Link to='maasai-mara-game-reserve'>Days 7 - 11: Maasai Mara Game Reserve</Link>
                            </div>
                            <div className="location">
                                <Link to='diani-beachfront'>Days 11 - 14: Diani Beach</Link>
                            </div>
                            <div className="location">
                                <Link to='nairobi-kwaheri-kenya'>Days 14 - 15: Nairobi -- Kwaheri Kenya</Link>
                            </div> */}
                        </div>
                        <div className="map"></div>
                        <div className="substitutions"></div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default UltimateKenyaTrip
