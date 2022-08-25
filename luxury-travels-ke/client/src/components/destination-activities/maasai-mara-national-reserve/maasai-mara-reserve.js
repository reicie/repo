import React from 'react';
import './maasai-mara-reserve.css';
import MaasaiMaraGiraffes from '../../../assets/images/Maasai-Mara-2.jpg';
import MaasaiMaraExpanse from '../../../assets/images/Maasai-Mara.jpg';
import MaasaiMaraBalloon from '../../../assets/images/Maasai-Mara-Balloon.jpg';
import Wildebeast from '../../../assets/images/wildebeest-2.jpg';

import TripHeader from '../../helper-components/trip-header-section/trip-header';
import PlaceDestinationCard from '../../helper-components/place-description-card/place-description-card';
import TransfersCard from '../../helper-components/transfers-card/transfers-card';

function MaasaiMaraReserve({duration}) {
    return (
        <div name='maasai-mara-game-reserve' className='maasai-mara-reserve'>
            <TripHeader duration={duration} destination='Maasai Mara Game Reserve'/>
            <PlaceDestinationCard bgImg={MaasaiMaraExpanse}
                                  alt='Different animals at Maasai Mara Game Reserve'
                                  header='Game on in Maasai Mara Game Reserve!'
                                  description='This is the crown jewel of Kenyan and I dare say African Travel. Maasai Mara
                                               Game Reserve is the best place to view wildlife year-round in the world. Whether you 
                                               want to see all of the big five (Lion, Leopard, Buffalo, Elephant, Rhino) or different species of herbivores or even
                                               catch the predator hunting activities as seen in National Geographic, Maasai Mara is perfect.'
            ></PlaceDestinationCard>
            <PlaceDestinationCard bgImg={Wildebeast}
                                  alt='Wildebeest Migration Maasai Mara National Reserve, Kenya'
                                  header='Wildebeest Migration'
                                  description="Experience one of the world's unique experiences that has been included in the Seven Wonders of the World.
                                  Every year between mid - late June - late October, large herds of wildebeest have to brave the treacherous waters of River Mara
                                  to cross from Tanzania's Serengeti National Park to Maasai Mara in search of greener pastures."
            ></PlaceDestinationCard>
            <PlaceDestinationCard bgImg={MaasaiMaraBalloon}
                                  alt='Hot air balloon ride in Maasai Mara Game Reserve'
                                  header='Hot Air Balloon Sunrise Experience'
                                  description="Enjoy an early morning hot air balloon ride towering over the plains of Maasai Mara.
                                               This is perfect for an eagle's view of the vast land below and varied types of animals.
                                               See the savannah come to live with a picturesque sunrise."
            ></PlaceDestinationCard>
            <h3 class='transfers-header'>Flights/Road & Transfers</h3>
            <div className="transfers">
                <TransfersCard header='Transfer' description='Private transfer to Wilson Airstrip for internal flights to Nairobi (if flying)'></TransfersCard>
                <TransfersCard header='Transfer' description='Private transfer to Wilson Airstrip via road (if road trip)'></TransfersCard>
                <TransfersCard header='Transfer' description='Transfer from Wilson Airstrip to Ukunda Airstrip'></TransfersCard>
                <TransfersCard header='Transfer' description='Transfer from Ukunda Airstrip to your beach hotel'></TransfersCard>
            </div>
            
        </div>
    )
}

export default MaasaiMaraReserve
