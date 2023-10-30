export async function getUsersFromApi(amount = 500) {
  const response = await fetch(
    `http://localhost:3000/api/users?results=${amount}`
  );

  const { users } = await response.json();

  return users;
}
