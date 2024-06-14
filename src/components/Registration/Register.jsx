import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css'
import { Button } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/auth/register', formData);
      console.log(response.data); // assuming response data contains useful info
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Реєстрація</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">Логін:</label>
          <input
            type="text"
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Зареєструватися</Button>
      </form>
      <p>Маєте аккаунт <Link to='/login'>Увійти</Link></p>
    </div>
  );
};

export default Register;
