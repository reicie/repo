import React from 'react';
import './tour.css';

function Tour({bgImg, title, price, notes, link, path="/"}) {
    return (
        <div className="tour">
            <div className="container">
                <a href={path}>
                    <img src={bgImg} alt="/"/>
                </a>
                <h3 style={{marginBottom:"1rem"}}>{title}</h3>
                <p className='price'>{price}</p>
                <p>{notes}</p>
                <hr/>
                <a href="/">{link}</a>
                {/* <p>{link}</p> */}
            </div>
        </div>
    )
}

export default Tour
