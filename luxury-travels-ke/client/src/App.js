import React from 'react';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import {Routes, Route, Link, Switch} from "react-router-dom";
import MaasaiMara from './components/location-guides/MaasaiMara/maasai-mara';
import Amboseli from './components/location-guides/Amboseli/amboseli';
import Laikipia from './components/location-guides/Laikipia/laikipia';
import Diani from './components/location-guides/Diani/diani';
import Nakuru from './components/location-guides/Nakuru/nakuru';
import Samburu from './components/location-guides/Samburu/samburu';
import Homepage from './components/Homepage/homepage';
import UltimateKenyaTrip from './components/default-Itineraries/ultimate-kenya-trip/ultimate-kenya';



function App() {
  return (
    <div >
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/maasai-mara' element={<MaasaiMara/>}></Route>
          <Route exact path='/ultimate-kenyan-trip' element={<UltimateKenyaTrip/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
