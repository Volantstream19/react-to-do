import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';

export default function Todo() {
  return (
    <div>
      <input></input>
      <button>Add Todo</button>
    </div>
  );
}
