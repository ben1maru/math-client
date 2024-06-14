// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css"; // Переконайтеся, що у вас є CSS-файл для стилізації


function Home() {
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/scoreboard/scoreboard')
      .then(response => response.json())
      .then(data => setScoreboard(data))
      .catch(error => console.error('Error fetching scoreboard data:', error));
  }, []);

  return (
    <>
      <NavBar />


      <div className="cont">
        <header className="header">
          <h1>Ласкаво просимо на наш сайт!</h1>
          <p>На нашому сайті ви зможете дізнатися багато цікавого. Тут ви знайдете різноманітні тести та завдання для покращення своїх знань.</p>
        </header>
        <section className="scoreboard-section">
          <h2>Таблиця успішності</h2>
          <table className="scoreboard-table">
            <thead>
              <tr>
                <th>Користувач</th>
                <th>Рівень</th>
                <th>Категорія</th>
                <th>Бал</th>
              </tr>
            </thead>
            <tbody>
              {scoreboard.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.username}</td>
                  <td>{entry.level}</td>
                  <td>{entry.category}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default Home;
