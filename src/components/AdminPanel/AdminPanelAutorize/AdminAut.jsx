import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminAuth.css'; // Підключення файлу стилів

function AdminAuth() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/auth/loginAdmin', formData);
      const { isAdmin } = response.data;

      if (isAdmin) {
        navigate('/dashboards');
      } else {
        setError('You are not authorized to access the admin panel');
        navigate('/');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setError('An error occurred during authentication');
    }
  };

  return (
    <div className="admin-auth-container">
      <h2>Авторизація адміністратора</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Пошта:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Пароль:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}

export default AdminAuth;
