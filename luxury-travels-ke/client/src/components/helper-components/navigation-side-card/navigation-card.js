import React from 'react';
import './navigation-card.css';

import {Link} from 'react-scroll';

function NavigationCard({link, header}) {
    return (
        <div className='location-navigation-card'>
            <Link to={link} smooth={true} duration={500}>{header}</Link>
        </div>
    )
}

export default NavigationCard
