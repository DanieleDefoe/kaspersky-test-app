export async function getUsersFromApi(amount = 500) {
  const response = await fetch(
    `http://127.0.0.1:3000/api/users?results=${amount}`
  );

  const { users } = await response.json();

  return users;
}
