import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import CardItem from './CardItem';

export default function PlayersOfSport({ sport_id }) {
  const [players, setPlayers] = useState([]);

  // Array of placeholder images
  const placeholderImages = [
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRga_7qpqIvs6e3Rc1VOeBk16_RBVAdnKRuh3HB0mhXTdF9TQi5EbFvt4aucEICO1P2pDY&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpXAC6A0XT-fBn6HdM1DEGRq_sp856oKh2Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwGo_HH-y6DVTd7vQldW1XMtAPZC2l4ASwg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTNGbzrsGnHjiWsh9uFziKsnulvqfcOmDZA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysLBzoC6mzo1Ot5awdbuEzY7fTleUhEmspw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_Hadpe6hhdU4YC-fnkvWit5-XLtnEDcIvg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uutRRs6_wrkvJWKmsOFr80Fq1zNnGg0eoAx&usqp=CAU'],

    ['https://media.cnn.com/api/v1/images/stellar/prod/230523093708-01-lebron-james-052223.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp',
    ' https://s22928.pcdn.co/wp-content/uploads/2024/03/Anthony-Davis-24-640x430.jpg',
    ' https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAyMjYwODY0NjkzNDQ1NzAw/usatsi_21848912.webp',
    ' https://cdn.nba.com/manage/2023/07/derozan-iso072123.jpg',
    'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-02/Fred%20VanVleet%20020924.jpeg?h=920929c4&itok=FJAqEkYU',
    ' https://media.bleacherreport.com/image/upload/x_0,y_53,w_1800,h_1196,c_crop/w_800,h_533,c_fill/v1703961282/xfsnc3ixviugbahwwyq1.jpg'
  ],
  [

  ],
  [],
  [],
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
  const getPlaceholderImage = (sportId, index) => {
    // Adjust for zero-based index of the array
    const adjustedIndex = sportId - 1;
    // Check if the sport ID is valid and has images
    if (adjustedIndex < placeholderImages.length && placeholderImages[adjustedIndex].length > 0) {
      return placeholderImages[adjustedIndex][index % placeholderImages[adjustedIndex].length];
    }
    return 'https://example.com/default.jpg'; // Default image if no placeholders are available
  };

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {players.map((player, index) => (
              <CardItem
                key={player.id || index}
                src={player.imageSrc || getPlaceholderImage(sport_id, index)}
                text={player.name}
                label='Adventure'
                path={`/sport/${player.id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}