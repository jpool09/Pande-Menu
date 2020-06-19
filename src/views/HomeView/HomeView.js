import React from 'react';
import Navbar from "./../../components/Navbar/Navbar"
import InfoManager from './../../components/InfoManager/InfoManager';
import Footer from "./../../components/Footer/Footer"


function HomeView() {
  return (
    <>
      <Navbar/>
      <InfoManager/>
      <Footer/>
    </>
  );
}

export default HomeView;