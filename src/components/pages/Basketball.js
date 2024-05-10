import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Playercard from '../Playercard';
import SportDescription from '../Description';
import SportRules from '../Rules';
import SportMatches from '../Matches';

export default function Baseball() {
  return (
    <>
      <HeroSection />
      <SportDescription sport_id={2}/>
      <Playercard sport_id={2}/>
      <SportRules sport_id={2}/>
      <SportMatches sport_id={2}/>
      <Footer />
    </>
  );
}