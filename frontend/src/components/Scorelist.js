import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ScoreList = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/scores', {

          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch scores');
        }

        const data = await response.json();
        setScores(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching scores:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchScores();
  }, [token]);

  if (loading) return <div>Loading scores...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>My Scores</h2>
      {scores.length === 0 ? (
        <p>No scores found.</p>
      ) : (
        <ul>
          {scores.map(score => (
            <li key={score.id}>
              <h3>{score.name}</h3>
              <p>Composer: {score.composer}</p>
              <p>Type: {score.score_type}</p>
              <a href={score.score_pdf} target="_blank" rel="noopener noreferrer">View Score</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScoreList;
