import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection({ sportId }) {

  const videos = {
    1: 'https://sportshub.s3.us-east-2.amazonaws.com/7d8590e3e65940a68a3ae5c3e7307289.MP4', // Example URL for soccer
    2: 'https://sportshub.s3.us-east-2.amazonaws.com/basketball.mp4', // Example for basketball
    3: 'https://sportshub.s3.us-east-2.amazonaws.com/tennis.mp4', // Example for tennis
    4: 'https://sportshub.s3.us-east-2.amazonaws.com/baseball.mp4', // Example for baseball
    5: 'https://sportshub.s3.us-east-2.amazonaws.com/golf.mp4' // Example for golf
  };

  
  // Default video URL
  const defaultVideoUrl = 'https://sportshub.s3.us-east-2.amazonaws.com/2112a50e59b64327beedd1fb3a18b019.MP4';

  // Decide which video URL to use
  const videoUrl = sportId && videos[sportId] ? videos[sportId] : defaultVideoUrl;

  return (
    <div className='hero-container'>
      <video src={videoUrl} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
    </div>
  );
}

export default HeroSection;
