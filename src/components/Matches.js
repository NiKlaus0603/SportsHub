import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch matches by sport ID
  const fetchMatchesBySportId = (sportId) => {
    setLoading(true);
    setError('');
    axios.get(`http://localhost:3001/api/matches/sports/${sportId}`)
      .then(res => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error fetching matches for sport ${sportId}:`, err);
        setError('Failed to fetch matches for this sport');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllMatches();  // Fetch all matches on initial load
  }, []);

  return (
    <div>
      <h1>Match List</h1>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button onClick={() => fetchMatchesBySportId(1)}>Show Football Matches</button>
          <button onClick={() => fetchMatchesBySportId(2)}>Show Basketball Matches</button>
          <ul>
            {matches.map(match => (
              <li key={match.match_id}>
                {match.summary} (Date: {match.match_date})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MatchList;
