import React from 'react';
import './nairobi-arrivals.css';
import TripHeader from '../../helper-components/trip-header-section/trip-header';
import TransfersCard from '../../helper-components/transfers-card/transfers-card';
import PlaceDestinationCard from '../../helper-components/place-description-card/place-description-card';
import Nairobi from '../../../assets/images/Nairobi.jpg';

function NairobiArrival({duration}) {
    return (
        <div name='nairobi-karibu-kenya' className='nairobi-arrivals'>
            <div className="card-header">
                <TripHeader duration={duration} destination='Nairobi'/>
            </div>
            <div className="transfers-details">
                <h3 class='transfers-header'>Flights/Road & Transfers</h3>
                <div className="transfers">
                    <TransfersCard header='Transfer' description='Arrive in Nairobi'></TransfersCard>
                    <TransfersCard header='Transfer' description='Private Transfer from JKIA airport to Nairobi Hotel'></TransfersCard>
                </div>
            </div>
            <div className="trip-itinerary">
                <PlaceDestinationCard bgImg={Nairobi} 
                                      alt='Nairobi city skyline' 
                                      header='Overnight in Nairobi' 
                                      description='This trip starts at Nairobi. Our team will meet you at 
                                                   the aiport and transfer you to your luxury hotel where 
                                                   you will have time to unwind after long journey.
                                                   Explore the city if you feel up to the challenge; 
                                                   our team is always ready to give you recommendations depending 
                                                   on what you are looking for'
                ></PlaceDestinationCard>
                <h3 class='transfers-header'>Flights/Road & Transfers</h3>
                <div className="transfers">
                    <TransfersCard header='Transfer' description='Private transfer to Wilson Airport for internal flights to Lewa (if flying)'></TransfersCard>
                    <TransfersCard header='Transfer' description='Transfer from Lewa Airstrip to your Lodge'></TransfersCard>
                    <TransfersCard header='Transfer' description='Private transfer to Lewa via road (if road trip)'></TransfersCard>
                </div>
            </div>
            
        </div>
    )
}

export default NairobiArrival
