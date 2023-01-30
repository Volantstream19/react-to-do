import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/authentication.js';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [user, setUser] = useState(UserContext);

  if (user) {
    return <Redirect to="/todos" />;
  }

  const signUp = async () => {
    const userData = await authUser(email, password, type);
    setUser(userData);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth">
      Email:<input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      Password:{' '}
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={signUp}>+</button>
    </div>
  );
}
