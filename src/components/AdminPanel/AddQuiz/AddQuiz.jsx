import React, { useState, useEffect } from 'react';
import './AddQuiz.css'

function AddQuiz() {
  const [levels, setLevels] = useState([]);
  const [themes, setThemes] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [description, setDescription] = useState('');
  const [photoLink, setPhotoLink] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Отримання списку рівнів
    fetch('https://math-server-8noz.onrender.com/api/level/level')
      .then(response => response.json())
      .then(data => setLevels(data))
      .catch(error => console.error('Error fetching levels:', error));

    // Отримання списку тем
    fetch('https://math-server-8noz.onrender.com/api/theme/theme')
      .then(response => response.json())
      .then(data => setThemes(data))
      .catch(error => console.error('Error fetching themes:', error));
  }, []);

  const handleAddQuestion = () => {
    // Валідація та підготовка даних для відправки на сервер
    const data = {
      question,
      answer: answerOptions,
      correct_answer: correctAnswer,
      id_level: selectedLevel,
      id_themes: selectedTheme,
      description,
      photo: photoLink
    };

    // Відправлення даних на сервер
    fetch('https://math-server-8noz.onrender.com/api/questions/questionsPush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        setMessage('Нове питання додано!');
        setIsError(false);
        // Очистити поля форми після успішного додавання
        setQuestion('');
        setAnswerOptions(['', '', '', '']);
        setCorrectAnswer('');
        setDescription('');
        setPhotoLink('');
        setSelectedLevel('');
        setSelectedTheme('');
      } else {
        setMessage('Помилка при додаванні');
        setIsError(true);
      }
    })
    .catch(error => {
      setMessage('Error adding question');
      setIsError(true);
      console.error('Error adding question:', error);
    });
  };

  return (
    <div className="add-quiz">
      <h2>Додати нове питання</h2>
      {/* Форма для додавання тесту */}
      <div className="form">
        {/* Вибір рівня */}
        <div className="form-group">
          <label>Оберіть рівень:</label>
          <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)}>
            <option value="">Оберіть рівень</option>
            {levels.map(level => (
              <option key={level.id} value={level.id}>{level.name}</option>
            ))}
          </select>
        </div>
        {/* Вибір теми */}
        <div className="form-group">
          <label>Оберіть тему:</label>
          <select value={selectedTheme} onChange={e => setSelectedTheme(e.target.value)}>
            <option value="">Оберіть тему</option>
            {themes.map(theme => (
              <option key={theme.id} value={theme.id}>{theme.name}</option>
            ))}
          </select>
        </div>
        {/* Питання */}
        <div className="form-group">
          <label>Питання:</label>
          <textarea value={question} onChange={e => setQuestion(e.target.value)} />
        </div>
        {/* Посилання на фото */}
        <div className="form-group">
          <label>Посилання на фото:</label>
          <input type="text" value={photoLink} onChange={e => setPhotoLink(e.target.value)} />
        </div>
        {/* Варіанти відповідей */}
        <div className="form-group">
          <label>Відповіді до питання:</label>
          {answerOptions.map((option, index) => (
            <input key={index} type="text" value={option} onChange={e => {
              const updatedOptions = [...answerOptions];
              updatedOptions[index] = e.target.value;
              setAnswerOptions(updatedOptions);
            }} />
          ))}
        </div>
        {/* Правильна відповідь */}
        <div className="form-group">
          <label>Правильна відповідь:</label>
          <input type="text" value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)} />
        </div>
        {/* Опис */}
        <div className="form-group">
          <label>Опис при помилці:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        {/* Кнопка для додавання питання */}
        <button onClick={handleAddQuestion}>Додати</button>
      </div>
      {/* Повідомлення про успіх або помилку */}
      {message && (
        <div className={isError ? "error-message" : "success-message"}>
          {message}
        </div>
      )}
    </div>
  );
}

export default AddQuiz;
