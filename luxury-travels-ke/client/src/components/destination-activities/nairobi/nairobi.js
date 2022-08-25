import React from 'react';
import './nairobi.css';

import FeedingGiraffes from '../../../assets/images/feeding-giraffes.jpg';

import TripHeader from '../../helper-components/trip-header-section/trip-header';
import TransfersCard from '../../helper-components/transfers-card/transfers-card';
import PlaceDestinationCard from '../../helper-components/place-description-card/place-description-card';

function NairobiDeparture({duration}) {
    return (
        <div name='nairobi-kwaheri-kenya' className='nairobi-departures'>
            <TripHeader duration={duration} destination='Nairobi -- Kwaheri Kenya'/>
            <PlaceDestinationCard bgImg={FeedingGiraffes} 
                                  alt='tourists feeding giraffes at The Giraffe Center, Nairobi Kenya' 
                                  header='Last Days in the City Under the Sun'
                                  description="Enjoy the last days of your Kenyan adventure in Kenya's capital city.
                                               Whether you want to just relax before your long travels home, or want to explore the city, 
                                               the choice is yours. If you have time before your flight, check out the giraffe center where you 
                                               can feed the giraffe. You can also book a walking tour of the city which includes a stop at Maasai 
                                               Market for your last minute souvenirs and gifts from Kenya."/>
            <h3 class='transfers-header'>Flights/Road & Transfers</h3>
            <div className="transfers">
                <TransfersCard header='Transfer' description='Private Transfer to the airport for your flights home'></TransfersCard>
            </div>
        </div>
    )
}

export default NairobiDeparture
