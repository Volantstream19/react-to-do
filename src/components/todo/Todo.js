import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import useTodo from '../../hooks/useTodo.js';
import { addTodo } from '../../services/todos.js';
import './Todo.css';

export default function Todo() {
  const [input, setInput] = useState('');
  const { user } = useContext(UserContext);
  const { todo, setTodo } = useTodo();

  const handleClick = async () => {
    try {
      const newTodos = await addTodo({ description: input, complete: false });
      setTodo((prevItems) => [...prevItems, newTodos]);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="todo-button" onClick={handleClick}>
        Add Todo
      </button>

      <div className="todo-list">
        {todo.map((todos) => (
          <div key={todos.id}>{todos.description}</div>
        ))}
      </div>
    </div>
  );
}
