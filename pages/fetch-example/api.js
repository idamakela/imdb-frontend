const BASE_URL = 'http://localhost:3001/characters/';
const API_KEY_QUERY = '?apiKey=5';

export async function getCharacter() {
  const res = await fetch(`${BASE_URL}${API_KEY_QUERY}`, {
    method: 'GET',
  });

  const data = await res.json();
  return { data };
}

export async function deleteCharacter() {}

export async function addCharacter() {}

export async function editCharacter() {}
