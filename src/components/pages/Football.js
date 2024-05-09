import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import PlayersOfSport from './PlayersOfSport';

export default function Football() {
  return (
    <>
      <HeroSection />
      <PlayersOfSport sport_id={1}/>
      <Footer />
    </>
  );
}
