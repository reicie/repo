import React from 'react';
import Destinations from './components/destinations/destinations';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Objectives from './components/Objectives/objectives';
import TravelIdeas from './components/travel-ideas/travel-ideas';


function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <TravelIdeas/>
      <Destinations/>
      <Objectives/>
      {/* <TravelIdeas/> */}
      
    </div>
  );
}

export default App;
