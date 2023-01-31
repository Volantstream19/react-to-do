import { useEffect, useState } from 'react';
import { getAll } from '../services/todos.js';

export default function useTodo() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getAll();
        setTodo(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchTodos();
  }, []);
  return { todo, setTodo };
}
