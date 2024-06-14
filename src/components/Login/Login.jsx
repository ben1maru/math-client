import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/auth/login', {
        email: email,
        password: password
      });

      console.log(response.data.token);
      localStorage.setItem('token', response.data.token)
      setError('');
      // Перенаправлення на головну сторінку після успішного входу
      window.location.href = '/';
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Авторизація
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Увійти</button>
      </form>
      <p>Немаєте акаунту? <Link to='/register'>Створити акаунт</Link></p>
    </div>
  );
}

export default Login;
