import React from 'react'
import Destinations from '../destinations/destinations'
import Hero from '../hero/hero'
import Objectives from '../Objectives/objectives'
import TravelIdeas from '../travel-ideas/travel-ideas'

function Homepage() {
    return (
        <div className='home-page'>
            <Hero/>
            <TravelIdeas/>
            <Destinations/>
            <Objectives/>
        </div>
    )
}

export default Homepage
