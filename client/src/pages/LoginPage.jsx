import React, { useState } from 'react';
import AuthService from '../utils/auth';

import users from '../utils/users.json';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = users.find(u => u.username === username || u.email === email);
    if (!user) {
      setError('Invalid username or email');
      return;
    }

    if (user.password !== password) {
      setError('Invalid password');
      return;
    }

    try {
        const { token } = await AuthService.login({ username, email, password });
        localStorage.setItem('id_token', JSON.stringify(token));
        setIsAuthenticated(true);
      } catch (error) {
        setError('Invalid username/email or password');
      }
      if (isAuthenticated) {
        alert('You are now logged in as ' + username + '!');
      } 

      
    };


  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginForm;

