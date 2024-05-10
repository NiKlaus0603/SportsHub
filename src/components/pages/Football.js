import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Playercard from '../Playercard';
import SportDescription from '../Description';
import SportRules from '../Rules';


export default function Baseball() {
  return (
    <>
      <HeroSection />
      <SportDescription sport_id={1}/>
      <Playercard sport_id={1}/>
      <SportRules sport_id={1}/>
      <Footer />
    </>
  );
}