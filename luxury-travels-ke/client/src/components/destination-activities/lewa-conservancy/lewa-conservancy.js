import React from 'react';
import './lewa-conservancy.css';
import Laikipia from '../../../assets/images/Laikipia.jpg';
import QuadBiking from '../../../assets/images/Quad-Biking.jpg';
import HorseRiding from '../../../assets/images/HorseRiding.jpg';

import TripHeader from '../../helper-components/trip-header-section/trip-header';
import TransfersCard from '../../helper-components/transfers-card/transfers-card';
import PlaceDestinationCard from '../../helper-components/place-description-card/place-description-card';

function LewaConservancy({duration}) {
    return (
        <div name='lewa-wildlife-conservancy' className='lewa-conservancy'>
            <TripHeader duration={duration} destination='Lewa Wildlife Conservancy'/>
            <PlaceDestinationCard bgImg={Laikipia}
                                  alt='Black Rhinos at Lewa Wildlife Conservancy'
                                  header='Lewa Wildlife Safari'
                                  description='Enjoy expert guided unlimited game drives, 
                                            walking safaris and horse riding around the conservancy 
                                            where you will enjoy the best rhino viewing experience which 
                                            it is famous for. Lewa is also home to multiple other wildlife 
                                            such as giraffes, gazelles, antelopes, zebras, etc. 
                                            Because Lewa is situated near the cradle of mankind, you will 
                                            also enjoy some archaelogical excursions and visit local 
                                            communities as well.'
            ></PlaceDestinationCard>
            <PlaceDestinationCard bgImg={QuadBiking}
                                  alt='Black Rhinos at Lewa Wildlife Conservancy'
                                  header='Let the Adrenaline Kick In'
                                  description="Enjoy more active fun adventurous activities such as quad biking,
                                                a day trip to Ngare Ndare Forest Trust where you will enjoy canopy walk and view
                                                the elephants beneath you, a hike to pristine blue water pools where you can enjoy swimming
                                                or a hike on the Original Pride Rock that inspired Disney's Lion King movie and enjoy a picnic or sundowner."
            ></PlaceDestinationCard>
            <PlaceDestinationCard bgImg={HorseRiding}
                                  alt='Intimate Wildlife Viewing on Horse Ride'
                                  header='Intimate Wildlife Viewing on Horse Ride'
                                  description="Experience an intimate wildlife viewing on horse back. 
                                               This is the best way to be as close to the herbivores as possible. Your expert guide will make
                                               sure that you are matched with horse based on your horse-riding experience and personality. "
            ></PlaceDestinationCard>
            <h3 class='transfers-header'>Flights/Road & Transfers</h3>
            <div className="transfers">
                <TransfersCard header='Transfer' description='Flight from Lewa to Amboseli National Park (if flying)'></TransfersCard>
                <TransfersCard header='Transfer' description='Transfer to your lodge at Amboseli from airstrip'></TransfersCard>
                <TransfersCard header='Transfer' description='Private Luxury Vehicle transfer from Lewa to Amboseli (if road trip)'></TransfersCard>
            </div>
            
        </div>
    )
}

export default LewaConservancy
