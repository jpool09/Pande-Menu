import React from 'react';
import Navbar from "./../../components/Navbar/Navbar";
import CountryManager from './../../components/CountryManager/CountryManager';
import Footer from "./../../components/Footer/Footer"


function MundialView() {
  return (
    <>
      <Navbar/>
      <CountryManager/>
      <Footer/>
    </>
  );
}

export default MundialView;