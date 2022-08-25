import React from 'react';
import './amboseli.css';
import TripHeader from '../../helper-components/trip-header-section/trip-header';
import PlaceDestinationCard from '../../helper-components/place-description-card/place-description-card';
import TransfersCard from '../../helper-components/transfers-card/transfers-card';
import AmboseliPic from '../../../assets/images/Amboseli.jpg';

function Amboseli({duration}) {
    return (
        <div name='amboseli-safari' className='amboseli-safari'>
            <TripHeader duration={duration} destination='Amboseli National Park'/>
            <PlaceDestinationCard bgImg={AmboseliPic}
                                  alt='Elephants and view of Mount Kilimanjaro at Amboseli National Park'
                                  header='Unlimited Game Drives at Amboseli'
                                  description='If Elephants are on your to see list, you are definitely in the right place.
                                               Amboseli National Park is known for its many herd of resident elephants and lots of birds for bird watchers.
                                               Spend your days relaxed here with views and back-drop of the majestic Mount Kilimanjaro, the tallest free
                                               standing mountain in the world!'
            ></PlaceDestinationCard>
            <h3 class='transfers-header'>Flights/Road & Transfers</h3>
            <div className="transfers">
                <TransfersCard header='Transfer' description='Flight from Amboseli to Maasai Mara National Reserve (if flying)'></TransfersCard>
                <TransfersCard header='Transfer' description='Transfer to your lodge at Maasai Mara National Reserve'></TransfersCard>
                <TransfersCard header='Transfer' description='Private Luxury Vehicle transfer from Amboseli to Maasai Mara (if road trip)'></TransfersCard>
            </div>
        </div>
    )
}

export default Amboseli
