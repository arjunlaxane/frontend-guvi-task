import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { API } from '../Global';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const data = { email, password };
    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    alert('Log in Successful');
    return navigate('/me');
  };

  return (
    <div className="sign-container">
      <form className="sign-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
            minLength={7}
          />
        </div>
        <div>
          <input id="submit" type="submit" value="Login" />
        </div>
        <button onClick={() => navigate('/')}>Back</button>
      </form>
    </div>
  );
};

export default Login;
