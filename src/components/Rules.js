import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Rules.css'; // Assuming you have some basic CSS in this file

function SportRules({ sport_id }) {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get(`http://localhost:3001/api/rules/${sport_id}`)
      .then(response => {
        setRules(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching rules:', error);
        setError('Failed to fetch rules. Please try again.');
        setLoading(false);
      });
  }, [sport_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Rules</h1>
      {rules.length > 0 ? (
        <ul>
          {rules.map(rule => (
            <li key={rule.rule_id}>{rule.description}</li>
          ))}
        </ul>
      ) : (
        <p>No rules found for this sport.</p>
      )}
    </div>
  );
}

export default SportRules;
