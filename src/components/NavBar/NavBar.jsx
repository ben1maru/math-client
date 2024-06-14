import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap"; // Імпорт компонентів Bootstrap Dropdown
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styleNavBar.css"

function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <header className="fixed-top" style={{ backgroundColor: "#c9a66b" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Головна
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginRight: "100px" }} // Відступ справа 100px
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/basic-math">
                    Основні математичні операції
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/development-of-logical-thinking">
                    Розвиток логічного мислення
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav-link dropdown-toggle"
                      id="dropdown-basic"
                    >
                      Геометрія
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link className="dropdown-item" to="/triangle">
                          Трикутник
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link className="dropdown-item" to="/rectangle">
                          Прямокутник
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link className="dropdown-item" to="/circle">
                          Круг
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link className="dropdown-item" to="/square">
                          Квадрат
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/choiceExam">
                    Тест
                  </Link>
                </li>
              </ul>
              {isLoggedIn ? (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <img
                        className="rounded-circle"
                        src="https://pic.onlinewebfonts.com/thumbnails/icons_206976.svg"
                        alt="Профіль"
                      />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <button
                      className="btn btn-dark align-items-center"
                      onClick={handleLogout}
                      style={{ marginRight: "200px" }}
                    >
                      Вийти
                    </button>
                  </li>
                </ul>
              ) : (
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "200px" }}
                >
                  <Link
                    to="/login"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Увійти
                  </Link>
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
