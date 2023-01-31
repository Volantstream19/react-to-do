import React, { useContext, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/authentication.js';
import './Auth.css';

export default function Auth() {
  const { type } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Redirect to="/todos" />;
  }

  const signUp = async (e) => {
    e.preventDefault();
    const userData = await authUser(email, password, type);
    setUser(userData);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <div className="form-input">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            placeholder="username..."
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-input">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="password..."
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-actions">
          <button className="auth-button" type="submit" onClick={signUp}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}
