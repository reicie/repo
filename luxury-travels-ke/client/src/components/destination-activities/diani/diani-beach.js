import React from 'react';
import './diani-beach.css';
import Dhow from '../../../assets/images/Dhow.jpg';
import KenyaBeach from '../../../assets/images/kenya-beach.jpg';

import TripHeader from '../../helper-components/trip-header-section/trip-header';
import PlaceDestinationCard from '../../helper-components/place-description-card/place-description-card';
import TransfersCard from '../../helper-components/transfers-card/transfers-card';

function DianiBeach({duration}) {
    return (
        <div name='diani-beachfront' className='diani-beach'>
            <TripHeader duration={duration} destination='Diani Beach'/>
            <PlaceDestinationCard bgImg={KenyaBeach} 
                                  alt='Diani Beach in Kenya coastline with palm trees and sunset'
                                  header='Idyllic white sandy Beaches'
                                  description='Enjoy a restful couple of days from your hotel on one of the best beaches in the world.
                                               Whether you want to just hang out and get a tan, or go snorkelling and diving, Diani is the 
                                               perfect destination for you. Enjoy the rich swahili culture (a melting pot of Arab, African & 
                                               European cultures) and learn about the earliest history of the country.'/>
            <PlaceDestinationCard bgImg={Dhow} 
                                  alt='Traditional african dhow to Kisite Marine Park'
                                  header='Full Day Trip to Kisite Marine Park on a Dhow Sail'
                                  description='A trip to the beautiful Kenyan southern coast is incomplete without a day trip to arguably one 
                                               of the best snorkelling destinations in the world. This trip is inclusive of a seafood (vegetarian/vegan available) buffet and you will 
                                               enjoy the amazing marine life at the park such as turtles, eels, spinner dolphins and even Humpback whales if you visit during 
                                               their migration season (August - October)'/>
            <h3 class='transfers-header'>Flights/Road & Transfers</h3>
                <div className="transfers">
                    <TransfersCard header='Transfer' description='Private transfer to Ukunda Airstrip/ Mombasa Aiport for internal flights to Nairobi'></TransfersCard>
                    <TransfersCard header='Transfer' description='Transfer from Nairobi Airport to your luxury hotel in Nairobi'></TransfersCard>
                </div>
        </div>
    )
}

export default DianiBeach
