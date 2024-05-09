import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import CardItem from './CardItem';

export default function PlayersOfSport({ sport_id }) {
  const [players, setPlayers] = useState([]);

  // Array of placeholder images
  const placeholderImages = [
    'https://via.placeholder.com/150/0000FF/808080?text=Player1',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Player2',
    'https://via.placeholder.com/150/FFFF00/000000?text=Player3',
    'https://via.placeholder.com/150/00FF00/000000?text=Player4'
  ];

  useEffect(() => {
    axios.get('http://localhost:3001/api/playersOfSport', {
      params: { sport_id: sport_id }
    })
    .then(res => {
      console.log(res.data); // Log the received data
      setPlayers(res.data); // Update state with the data
    })
    .catch(err => {
      console.error('Error fetching players:', err); // Log any errors
    });
  }, [sport_id]); // Effect dependency array includes sport_id

  // Function to select a placeholder image
  const getPlaceholderImage = (index) => {
    return placeholderImages[index % placeholderImages.length]; // Cycle through the array
  };

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {players.map((player, index) => (
              <CardItem
                key={player.id || index} // Use player.id if available, otherwise use index
                src={player.imageSrc || getPlaceholderImage(index)} // Use player image or a placeholder
                text={player.name}
                label='Adventure' // Static label, adjust as needed
                path={`/sport/${player.id}`} // Path using player.id
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
