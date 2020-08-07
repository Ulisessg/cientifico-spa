const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  const APIUrl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(APIUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

export default getData;
