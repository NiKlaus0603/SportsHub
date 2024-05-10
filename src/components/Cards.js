import React, { useEffect, useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/sports')
      .then(response => response.json())
      .then(data => setSports(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {sports[0] && (
              <CardItem
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgM6vfreSiZImtAZ7jBwRrfh8kHxeNO_Svg&usqp=CAU'
                text={`${sports[0].name}`}
                label='Adventure'
                path='/Football'
              />
            )}
            {sports[1] && (
              <CardItem
                src='https://static.printler.com/cache/6/e/3/9/0/2/6e390208b9b5c84db18f31add74912dcde1872b3.jpg'
                text={`${sports[1].name}`}
                label='Speed'
                path='/Basketball'
              />
            )}
          
            {sports[2] && (
              <CardItem
                src='https://www.thestatesman.com/wp-content/uploads/2020/02/000_1OK50R.jpg'
                text={`${sports[2].name}`}
                label='Mystery'
                path='/Cricket'
              />
            )}
            {sports[3] && (
              <CardItem
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rNI9o2a-gUkxI0iW210rPSbombRWL30aOg&usqp=CAU'
                text={`${sports[3].name}`}
                label='Adventure'
                path='/Baseball'
              />
            )}
            {sports[4] && (
              <CardItem
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAEwEoCr07YmG1TiP5q3fIC2emFI8iAMsmg&usqp=CAU'
                text={`${sports[4].name}`}
                label='Adrenaline'
                path='/Formula1'
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
