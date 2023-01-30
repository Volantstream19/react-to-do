import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [user, setUser] = useState(UserContext);

  return (
    <div className="auth">
      Email:<input></input>
      Password: <input></input>
    </div>
  );
}
