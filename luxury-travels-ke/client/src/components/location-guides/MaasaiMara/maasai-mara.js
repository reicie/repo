import React from 'react';
import './maasai-mara.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import MaraPic from '../../../assets/images/Maasai-Mara.jpg';
import MaasaiMaraSunset from '../../../assets/images/Maasai-Mara-Sunset.jpg';
import Balloons from '../../../assets/images/Maasai-Mara-Balloon.jpg';
import Tour from '../../helper-components/tours/tour';

function MaasaiMara() {
    return (
        <div className='maasai-mara'>
            <div className="hero-img">
                <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={MaraPic} alt="Maasai Mara Plains; Zebras, Antelopes, wildebeest"/>
                    </div>
                    <div>
                        <img src={Balloons} alt="Hot air balloon over Maasai Mara National Reserve, Kenya"/>
                    </div>
                    <div>
                        <img src={MaasaiMaraSunset} alt="Sunset at Maasai Mara National Park, Kenya"/>
                    </div>
                </Carousel>
                    {/* <img  className="hero" src={MaraPic} alt="Maasai Mara National Reserve Kenya"/> */}
            </div>
            <div className="container">
                {/* <div className="section-nav">
                    <ul className="section-nav-menu">
                        <li>OVERVIEW</li>
                        <li>EXAMPLE ITINERARIES</li>
                        <li>ACCOMMODATIONS</li>
                    </ul>
                    <hr/>
                </div> */}
                <h2>Overview</h2>
                <div className="sections">
                    <div className="left">
                        <p>
                            Maasai Mara National Reserve is located in the South West park of Kenya at the 
                            border of Kenya and Tanzania.Together with Serengeti National Park in Northern 
                            Tanzania they form the Serengeti-Mara ecosystem which is arguably the most diverse, 
                            incredible and spectacular wildlife viewing ecosystems in the world. 
                        </p>
                        <br/>
                        <p>
                            Maasai Mara is roughly 580 sq. miles (1510 sq. kilometers) and is 1500 - 2170 meters above 
                            sea level. Most of the areas around the Maasai Mara National Park are incorporated into the larger
                            Mara conservancies (where both wildlife and the local community thrive together).
                        </p>
                        <br/>
                        <p>
                            Maasai Mara and its conservancies have over 95 species of mammals and over 570 recorded
                            species of birds.In addition to the famous Big Five (Lion, Leopard, Elephant, Buffalo, Rhino), expect to see over a dozen types of antelopes
                            including kudus, gazelles, waterbucks among other types, migrant and resident bird species, herbivores and 
                            a ton of African predators. 
                        </p>
                        <br/>
                        <p>
                            The main attraction to Maasai Mara is wildlife viewing usually comprising of game drives, bush walks, night game drives
                            hot air balloon rides and sometimes horse riding. 
                        </p>
                    </div>
                    <div className="right">
                        {/* map of maasai mara */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7368935.716155602!2d39.611020310899676!3d-4.308289883377705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbcf357f0c398c107!2zMcKwMjknMDUuMSJTIDM1wrAwNicwNi45IkU!5e0!3m2!1sen!2sus!4v1660080665335!5m2!1sen!2sus" 
                            width="400" height="300" style={{border:0, marginBottom:"1.5rem"}} 
                            allowFullScreen="" loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className="best-time-to-visit"></div>
                        {/* Things to do in Maasai Mara */}
                        <div className="activities-box">
                            <h3>Activities</h3>
                            <li>Day and Night Game Drives</li>
                            <li>Hot air balloon rides</li>
                            <li>Guided Walking Safaris</li>
                            <li>Bird Watching</li>
                            <li>Horse riding</li>
                            <li>ultra luxury glamping</li>
                            <li>Night out under the stars</li>
                        </div>
                        {/* annual calender */}
                    </div>
                </div>
                <h2>Best Time to Visit</h2>
                <p>Maasai Mara is a year-round destination for wildlife viewing.</p>
                <p>There are four or so distinct seasons based on wildlife activities and visitor population in the park. </p>
                <div className="season">
                    <h3>Jan - March (Calfing Season)</h3>
                    <div className="pro-cons">
                        <div className="pro">
                            <h4>Pros</h4>
                            <li>Birthing season -- lots of wildebeest, zebras and other herbivires calves around</li>
                            <li>Best time for Big Cats (lions, cheetahs, leopards) -- with losts of young animals, predator activities increases</li>
                            <li>Lots of Migratory Birds spoting</li>
                            <li>Low crowds, so that means that you can enjoy viewing animals without being crowded</li>
                            <li>Slightly less expensive than the peak season</li>
                        </div>
                        <div className="cons">
                            <h4>Cons</h4>
                            <li>There are no/less wildebeest migration, which is usually a big attraction</li>
                            <li>Some afternoon thunderstorms (though not frequently) that can make roads muddy </li>
                        </div>
                    </div>
                    <h3>April - May (Green Season)</h3>
                    <div className="pro-cons">
                        <div className="pro">
                            <h4>Pros</h4>
                            <li>Lowest number of visitors in the park</li>
                            <li>Lots of young animals; antelope birthing season</li>
                            <li>Last chance to spot some migratory birds in the park</li>
                            <li>Green lushy savannah; beautiful with flowers and trees blooming</li>
                            <li>Great for scenic photography</li>

                        </div>
                        <div className="con">
                            <h4>Cons</h4>
                            <li>Highest rainfall period with an average of 15 - 23 days of rains</li>
                            <li>Roads can be muddy and challenging during this time</li>
                            <li>There are no/less wildebeest migration, which is usually a big attraction</li>
                        </div>
                    </div>
                    <h3>June - October (Peak Season)</h3>
                    <div className="pro-cons">
                        <div className="pros">
                            <h4>Pros</h4>
                            <li>Great for Wildebeast migration experience</li>
                            <li>Sunny, cool and dry weather throughout with big clear skies</li>
                            <li>Great for photography</li>
                            <li>Highest density of animals during this time, lots of predators as well</li>
                        </div>
                        <div className="cons">
                            <h4>Cons</h4>
                            <li>Highest number of visitors during this time</li>
                            <li>Highest prices</li>
                            <li>Not a lot of migratory bird watching</li>
                        </div>
                    </div>

                </div>
                
       
                <div className="footer">
                    <h2>Example Itineraries</h2>
                    <div className="tours">
                        <Tour bgImg={MaraPic} title='Ultimate Kenya Safari' price='$8,000 PP' notes=''/>
                        <Tour bgImg={MaasaiMaraSunset} title='Family Safari and Beach Adventure' price='$33000 per family of 4' notes=''/>
                        <Tour bgImg={Balloons} title='Romance in Wilderness' price='$8,000 PP' notes=''/>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default MaasaiMara
