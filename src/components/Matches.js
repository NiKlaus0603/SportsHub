import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Matches.css'; // Ensure this CSS file is linked in your project

function Matches({ sport_id }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // URL array for demo purposes. Replace or dynamically fetch as needed.
  const matchLinks = [
    'https://www.youtube.com/watch?v=OzsYsAvVaTk',
    'https://www.youtube.com/watch?v=OzsYsAvVaTk',
    'https://www.youtube.com/watch?v=OzsYsAvVaTk',
    // Continue adding URLs for all your matches
  ];

  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get(`http://localhost:3001/api/matches/sports/${sport_id}`)
      .then(response => {
        if (response.data && response.data.length > 0) {
          setMatches(response.data);
          setLoading(false);
        } else {
          setError('No matches found for this sport.');
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching matches:', error);
        setError('Failed to fetch matches. Please try again.');
        setLoading(false);
      });
  }, [sport_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="match-cards-container">
      <h1>GREATEST KNOCKS</h1>
      <br></br>
      <div className="cards_m">
        {matches.map((match, index) => (
          <a key={match.match_id} href={matchLinks[index]} target="_blank" rel="noopener noreferrer" className="card">
            <div className="card-content">
              <h2>{formatDate(match.match_date)}</h2>
              <p>{match.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// Helper function to format date
function formatDate(dateString) {
    return dateString.split('T')[0];  // Takes only the date part before the 'T'
}

export default Matches;
