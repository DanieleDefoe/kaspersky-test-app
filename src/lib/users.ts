import { BASE_URL } from './constants';

export async function getUsersFromApi(amount = 500) {
  const response = await fetch(`${BASE_URL}?results=${amount}`, {
    method: 'GET',
  });

  const { results: users } = await response.json();

  return users;
}
