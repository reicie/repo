import React from 'react';
import './destinations.css';
import MaasaiMaraImg from '../../assets/images/Maasai-Mara.jpg';
import AmboseliImg from '../../assets/images/Amboseli.jpg';
import LaikipiaImg from '../../assets/images/Laikipia.jpg';
import DianiImg from '../../assets/images/Diani_Kenya.jpg';
import NakuruImg from '../../assets/images/Nakuru.jpg';
import SamburuImg from '../../assets/images/Samburu.jpg';
import ImageCard from '../helper-components/image-cards/image-card';
import {Link} from "react-router-dom";

function Destinations() {
    return (
        <div name="destinations" className="destinations">
            <div className="header">
                <h2>Where The Journey Takes You ....</h2>
            </div>
            <div className="container">
                <Link to='/maasai-mara'>
                    <ImageCard bgImg={MaasaiMaraImg} text='Maasai Mara'/>
                </Link>
                <ImageCard bgImg={AmboseliImg} text='Amboseli'/>
                <ImageCard bgImg={LaikipiaImg} text='Laikipia'/>
                <ImageCard bgImg={DianiImg} text='Kenyan Coast'/>
                <ImageCard bgImg={NakuruImg} text='Rift Valley Lakes'/>
                <ImageCard bgImg={SamburuImg} text='Samburu'/>
            </div>
            
        </div>
    )
}

export default Destinations
