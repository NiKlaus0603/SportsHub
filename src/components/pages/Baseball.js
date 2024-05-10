import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Playercard from '../Playercard';
import SportDescription from '../Description';
import SportRules from '../Rules';
import Matches from '../Matches';

export default function Baseball() {
  return (
    <>
      <HeroSection />
      <SportDescription sport_id={4}/>
      <Playercard sport_id={4}/>
      <SportRules sport_id={4}/>
      <Matches sport_id={4}/>
      <Footer />
    </>
  );
}
