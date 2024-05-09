import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';

export default function PlayersOfSport({sport_id}) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/playersOfSport',{
      params: {
        sport_id:sport_id
      }
    }).then((res)=>{
      setPlayers(res)
    })
    .catch((err)=>{

    })
  }, []);
  return (
    <>
   <h1>Display players of sport here </h1>
    </>
  );
}
