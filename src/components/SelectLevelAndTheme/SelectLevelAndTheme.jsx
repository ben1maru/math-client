import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectLevelAndTheme() {
    const [levels, setLevels] = useState([]);
    const [themes, setThemes] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedTheme, setSelectedTheme] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/login";
        } else {
            fetch('http://localhost:8081/api/level/level')
                .then(response => response.json())
                .then(data => setLevels(data));
            
            fetch('http://localhost:8081/api/theme/theme')
                .then(response => response.json())
                .then(data => setThemes(data));
        }
    }, []);

    const handleLevelChange = (id) => {
        setSelectedLevel(selectedLevel === id ? '' : id);
    };

    const handleThemeChange = (id) => {
        setSelectedTheme(selectedTheme === id ? '' : id);
    };

    const handleSubmit = () => {
        if (selectedLevel && selectedTheme) {
            navigate(`/exam/${selectedLevel}/${selectedTheme}`);
        }
    };

    return (
        <div className="select-container">
            <div className="select-column">
                <h2>Оберіть рівень</h2>
                <div className="checkboxes">
                    {levels.map(level => (
                        <div key={level.id}>
                            <input
                                type="checkbox"
                                id={`level-${level.id}`}
                                checked={selectedLevel === level.id}
                                onChange={() => handleLevelChange(level.id)}
                            />
                            <label htmlFor={`level-${level.id}`}>{level.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="select-column">
                <h2>Оберіть категорію</h2>
                <div className="checkboxes">
                    {themes.map(theme => (
                        <div key={theme.id}>
                            <input
                                type="checkbox"
                                id={`theme-${theme.id}`}
                                checked={selectedTheme === theme.id}
                                onChange={() => handleThemeChange(theme.id)}
                            />
                            <label htmlFor={`theme-${theme.id}`}>{theme.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleSubmit} disabled={!selectedLevel || !selectedTheme}>Почати</button>
        </div>
    );
}

export default SelectLevelAndTheme;
