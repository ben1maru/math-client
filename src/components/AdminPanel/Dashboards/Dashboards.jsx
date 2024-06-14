import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

function Dashboard() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/api/questions/questionsAdmin")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit question with ID: ${id}`);
    navigate(`/adminEditQuestion/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete question with ID: ${id}`);

    fetch(`http://localhost:8081/api/questions/questionsDelete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Question deleted successfully:", data);
        // Оновити список питань, щоб відобразити зміни
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  };

  const handleAddQuestion = () => {
    navigate('/addQuiz'); // Перенаправлення на сторінку додавання нового питання
  };

  return (
    <div className="mainDashboards">
      <div className="dashboard-header">
        <h1>Дошка питань</h1>
        <button className="add-button" onClick={handleAddQuestion}>
          Додати питання
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Питання</th>
            <th>Відповіді</th>
            <th>Правильна відповідь</th>
            <th>Рівень</th>
            <th>Категорія</th>
            <th>Опис</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>
                <img src={question.photo} alt="question" width="70" height="70" />
              </td>
              <td>{question.question}</td>
              <td>{question.answers.join(", ")}</td>
              <td>{question.correct_answer}</td>
              <td>{question.level_name}</td>
              <td>{question.category_name}</td>
              <td>{question.description}</td>
              <td className="actions">
                <button className="edit" onClick={() => handleEdit(question.id)}>
                  Редагувати
                </button>
                <button className="delete" onClick={() => handleDelete(question.id)}>
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
