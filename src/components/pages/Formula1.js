import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Playercard from '../Playercard';
import Description from '../Description';

export default function Baseball() {
  return (
    <>
      <HeroSection />
      <Description sport_id={5}/>
      <Playercard sport_id={5}/>
      <Footer />
    </>
  );
}