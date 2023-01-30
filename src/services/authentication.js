import { client } from './client.js';

export function getUser() {
  return client.auth.currentUser;
}

export async function authUser(type, email, password) {
  let response;
  if (type === 'sign-up') {
    response = await client.auth.signUp({ email, password });
  } else {
    response = await client.auth.signIn({ email, password });
  }
  return response.user;
}

export async function signOut() {
  await client.auth.signOut();
}
