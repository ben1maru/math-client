import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/NavBar';
import './style.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [scoreboardData, setScoreboardData] = useState([]);

  useEffect(() => {
    // Function to fetch user data and store token in local storage
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('No token found in local storage');
          return;
        }

        const response = await fetch('https://math-server-8noz.onrender.com/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUser(userData);

        // Fetch scoreboard data using userId from user data
        fetchScoreboardData(userData.id);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const fetchScoreboardData = async (userId) => {
    try {
      const response = await fetch(`https://math-server-8noz.onrender.com/api/scoreboard/scoreboardProfile?userId=${userId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch scoreboard data');
      }

      const scoreboardData = await response.json();
      setScoreboardData(scoreboardData);
    } catch (error) {
      console.error('Error fetching scoreboard data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <h2>Профіль</h2>
        {user && (
          <div>
            <p>Імя: {user.username}</p>
            <p>Електронна скринька: {user.email}</p>
            {/* Other user details you want to display */}
          </div>
        )}

        <h2>Таблиця успішності</h2>
        <table>
          <thead>
            <tr>
    
            
              <th>Рівень</th>
              <th>Категорія</th>
              <th>Бали</th>
            </tr>
          </thead>
          <tbody>
            {scoreboardData.map((score) => (
              <tr key={score.id}>
               
         
                <td>{score.level}</td>
                <td>{score.category}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;
