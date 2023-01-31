import { checkError, client } from './client.js';

export async function getAll() {
  const resp = await client.from('todos').select();
  return checkError(resp);
}

export async function addTodo(newTodo) {
  const resp = await client.from('todos').insert(newTodo);
  return checkError(resp);
}
