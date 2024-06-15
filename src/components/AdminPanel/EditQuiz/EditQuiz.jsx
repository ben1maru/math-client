import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EditQuiz.css";

function EditQuiz() {
  const { id } = useParams();
  const [levels, setLevels] = useState([]);
  const [themes, setThemes] = useState([]);
  const [questionData, setQuestionData] = useState({
    question: '',
    photo: '',
    answer: ['', '', '', ''],
    correct_answer: '',
    description: '',
    id_level: '',
    id_theme: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchQuestionData();
    fetchLevels();
    fetchThemes();
  }, [id]);

  const fetchQuestionData = async () => {
    try {
      const response = await axios.get(`https://math-server-8noz.onrender.com/api/questions/questionsEdit/${id}`);
      const data = response.data[0]; // Assuming response.data is an array with a single object
      setQuestionData({
        question: data.question || '',
        photo: data.photo || '',
        answer: data.answer || ['', '', '', ''], // Ensure answer is initialized as an array of strings
        correct_answer: data.correct_answer || '',
        description: data.description || '',
        id_level: data.id_level || '',
        id_theme: data.id_themes || ''
      });
      console.log("Fetched question data:", data); // Debugging log
    } catch (error) {
      console.error("Error fetching question data:", error);
    }
  };

  const fetchLevels = async () => {
    try {
      const response = await axios.get("https://math-server-8noz.onrender.com/api/level/level");
      setLevels(response.data);
    } catch (error) {
      console.error("Error fetching levels:", error);
    }
  };

  const fetchThemes = async () => {
    try {
      const response = await axios.get("https://math-server-8noz.onrender.com/api/theme/theme");
      setThemes(response.data);
    } catch (error) {
      console.error("Error fetching themes:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...questionData.answer];
    updatedAnswers[index] = value;
    setQuestionData((prevData) => ({
      ...prevData,
      answer: updatedAnswers,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Ensure none of the answers are null or undefined
      const answersValid = questionData.answer.every(answer => answer !== null && answer !== undefined);
      if (!answersValid) {
        throw new Error("Answers cannot be null or undefined.");
      }

      // Perform the update request
      await axios.post(`https://math-server-8noz.onrender.com/api/questions/questionsUpdate/${id}`, questionData);
      setMessage("Питання оновлено!");
      setIsError(false);
    } catch (error) {
      console.error("Error updating question:", error);
      setMessage("Упс якась помилка!");
      setIsError(true);
    }
  };

  // Only render the form if data has been fetched
  if (!questionData || levels.length === 0 || themes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-form">
      <h1>Редагування питань</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Питання:</label>
          <input
            type="text"
            id="question"
            name="question"
            value={questionData.question}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Фото:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={questionData.photo}
            onChange={handleInputChange}
            required
          />
        </div>
        {questionData.answer.map((answer, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`answer_${index + 1}`}>Відповідь {index + 1}:</label>
            <input
              type="text"
              id={`answer_${index + 1}`}
              name={`answer_${index + 1}`}
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="correct_answer">Правильна відповідь:</label>
          <input
            type="text"
            id="correct_answer"
            name="correct_answer"
            value={questionData.correct_answer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Опис:</label>
          <input
            type="text"
            name="description"
            value={questionData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Рівень:</label>
          <select
            value={questionData.id_level}
            name="id_level"
            onChange={handleInputChange}
          >
            {levels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Тема:</label>
          <select
            value={questionData.id_theme}
            name="id_theme"
            onChange={handleInputChange}
          >
            {themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Оновити</button>
      </form>
      {message && (
        <div className={isError ? "error-message" : "success-message"}>
          {message}
        </div>
      )}
    </div>
  );
}

export default EditQuiz;
