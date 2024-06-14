import React, { useEffect, useState } from "react";
import Modal from "./modal/Modal";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar"
function Exam() {
  const { id_level, id_themes } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage");
      navigate("/login");
      return;
    }

    fetch(
      `http://localhost:8081/api/auth/user`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    .then((response) => response.json())
    .then((data) => {
      const userId = data.id;
      setUserId(userId);
    })
    .catch((error) => console.error('Error fetching user data:', error));

    fetch(
      `http://localhost:8081/api/questions/questions/${id_level}/${id_themes}`
    )
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, [id_level, id_themes]);

  const handleAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect =
      String(selectedAnswer).trim().toLowerCase() ===
      currentQuestion.correct_answer.trim().toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
    }

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = {
      ...currentQuestion,
      status: isCorrect ? "correct" : "incorrect",
    };
    setQuestions(updatedQuestions);

    if (!isCorrect) {
      setDescription(currentQuestion.description);
    } else {
      setDescription("");
    }

    setSelectedAnswer(null);
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);

    if (currentQuestionIndex === questions.length - 1) {
      setShowModal(true);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    setDescription("");
    setSelectedAnswer(null);
  };

  const pushDataToDatabase = () => {
    const data = {
      userId: userId,
      score: score,
      levelId: Number(id_level),
      categoryId: Number(id_themes)
    };

    fetch('http://localhost:8081/api/scoreboard/scoreboardPushData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response.ok) {
        console.log('Score data successfully pushed to the database');
        // Додайте будь-яку логіку, яка потрібна після успішного додавання даних до бази даних
      } else {
        console.error('Failed to push score data to the database');
      }
    })
    .catch((error) => console.error('Error pushing score data to the database:', error));
  };

  return (
    <><NavBar /><div className="app">
      <div className="sidebar">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question ${questions[index].status || ""}`}
            onClick={() => handleQuestionClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="main-content">
        {questions.length > 0 && (
          <>
            <div className="question-text">
              {questions[currentQuestionIndex].question}
            </div>
            <div className="answers">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <div key={index} className={`radio-container ${selectedAnswer === answer ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    id={`answer-${index}`}
                    name="answer"
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={() => setSelectedAnswer(answer)} />
                  <label htmlFor={`answer-${index}`}>{answer}</label>
                </div>
              ))}

            </div>
            <button className="next-button" onClick={handleAnswer}>
              Наступне питання
            </button>
            {description && <div className="description">{description}</div>}
            {showModal && (
              <Modal score={score} onClose={() => {
                setShowModal(false);
                pushDataToDatabase();
              } } />
            )}
          </>
        )}
      </div>
    </div></>
  );
}

export default Exam;
