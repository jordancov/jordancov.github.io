async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    document.write(data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();