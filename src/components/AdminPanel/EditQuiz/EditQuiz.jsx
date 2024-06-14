import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Імпортуємо Axios
import "./EditQuiz.css"; // Підключаємо файл зі стилями

function EditQuiz() {
  const { id } = useParams();
  const [levels, setLevels] = useState([]);
  const [themes, setThemes] = useState([]);
  const [questionData, setQuestionData] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchQuestionData();
    fetchLevels();
    fetchThemes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchQuestionData = () => {
    axios.get(`http://localhost:8081/api/questions/questionsEdit/${id}`)
      .then((response) => {
        const data = response.data[0];
        console.log("Fetched question data:", data);
        setQuestionData(data);
        setSelectedLevel(data.level_name);
        setSelectedTheme(data.category_name);
        setAnswerOptions(JSON.parse(data.answer)); // Розпарсене значення поля "answer"
        setCorrectAnswer(data.correct_answer); 
        setDescription(data.description);
      })
      .catch((error) => console.error("Error fetching question data:", error));
  };

  const fetchLevels = () => {
    axios.get("http://localhost:8081/api/level/level")
      .then((response) => {
        const data = response.data;
        console.log("Levels fetched:", data);
        setLevels(data);
      })
      .catch((error) => console.error("Error fetching levels:", error));
  };

  const fetchThemes = () => {
    axios.get("http://localhost:8081/api/theme/theme")
      .then((response) => {
        const data = response.data;
        console.log("Themes fetched:", data);
        setThemes(data);
      })
      .catch((error) => console.error("Error fetching themes:", error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.vahyt6lue);
    setQuestionData((prevData) => ({
      ...prevData,
      level_id: event.target.value,
    }));
  };

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
    setQuestionData((prevData) => ({
      ...prevData,
      category_id: event.target.value,
    }));
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answerOptions];
    updatedAnswers[index] = value.toString(); // Привести значення до рядкового формату
    setAnswerOptions(updatedAnswers);
  
    // Перетворити масив чисел у масив рядків і потім у JSON-рядок
    const jsonString = JSON.stringify(updatedAnswers.map(String));
    
    // Очистити рядок від бекслешів
    const cleanedJsonString = jsonString.replace(/\\/g, '');
    
    setQuestionData((prevData) => ({
      ...prevData,
      answer: cleanedJsonString,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Оновити стан питання з поточним значенням масиву відповідей
    setQuestionData(prevData => ({
      ...prevData,
      answer: answerOptions.map(value => value.toString()),
    }));
  
    // Відправити дані на сервер
    axios.post(`http://localhost:8081/api/questions/questionsUpdate/${id}`, questionData)
      .then((response) => {
        const data = response.data;
        console.log(questionData);
        console.log(data);
        console.log("Question updated successfully:", data);
        // Додайте логіку обробки успішного оновлення, наприклад, перенаправлення на іншу сторінку
      })
      .catch((error) => console.error("Error:", error));
  };
  
  


  if (!questionData || !levels || !themes || levels.length === 0 || themes.length === 0) {
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
        {answerOptions.map((answer, index) => (
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
            value={correctAnswer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Опис:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Рівень:</label>
          <select value={selectedLevel} onChange={handleLevelChange}>
            {levels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Тема:</label>
          <select value={selectedTheme} onChange={handleThemeChange}>
            {themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Оновити</button>
      </form>
    </div>
  );
}

export default EditQuiz;
