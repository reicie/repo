import React from 'react';
import './destinations.css';

import MaasaiMara from '../../assets/images/Maasai-Mara.jpg';
import Amboseli from '../../assets/images/Amboseli.jpg';
import Laikipia from '../../assets/images/Laikipia.jpg';
import Diani from '../../assets/images/Diani_Kenya.jpg';
import Nakuru from '../../assets/images/Nakuru.jpg';
import Samburu from '../../assets/images/Samburu.jpg';
import ImageCard from '../image-cards/image-card';

function Destinations() {
    return (
        <div className="destinations">
            <div className="header">
                <h2>Where The Journey Takes You ....</h2>
            </div>
            <div className="container">
                <ImageCard bgImg={MaasaiMara} text='Maasai Mara'/>
                <ImageCard bgImg={Amboseli} text='Amboseli'/>
                <ImageCard bgImg={Laikipia} text='Laikipia'/>
                <ImageCard bgImg={Diani} text='Kenyan Coast'/>
                <ImageCard bgImg={Nakuru} text='Rift Valley Lakes'/>
                <ImageCard bgImg={Samburu} text='Samburu'/>

                {/* <h1>The Best Places to Visit Kenya</h1>
                <p>For Adventure, relaxation and incredible Wildlife viewing</p>
                <div className="img-container">
                    <img src={MaasaiMara} alt="Maasai Mara National Park" className="span-3 image-grid-row-2"/>
                    <img src={Amboseli} alt="Amboseli National Park"/>
                    <img src={Laikipia} alt="Laikipia region, Kenya"/>
                    <img src={Diani} alt="Diani Beach, Kenyan Coast, Watamu & Malindi Marine Park"/>
                    <img src={Nakuru} alt="Rift valley lakes; Lake Nakuru, Lake Elementaita"/>

                </div> */}
            </div>
            
        </div>
    )
}

export default Destinations
