import React from 'react';
import './transfers-card.css';
import {TiArrowRightOutline} from 'react-icons/ti';

function TransfersCard({header, description}) {
    return (
        <div className='transfers-card'>
            <div className="header-section">
                <TiArrowRightOutline className='arrow-icon'/>
                <h3>{header}</h3>
            </div>
            <div className="content">
                {description}
            </div>
        </div>
    )
}

export default TransfersCard
