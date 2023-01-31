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
    <div className="auth">
      Email:
      <input
        className="auth-email"
        type="text"
        value={email}
        placeholder="username..."
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      Password:
      <input
        type="text"
        className="auth-password"
        value={password}
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={signUp}>+</button>
    </div>
  );
}
