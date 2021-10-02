import fetch from 'node-fetch';

const rootPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

export const fetchPoke = async () => {
  const pokeGetData = await fetch(rootPokeURL);
  const allJSONpoke = await pokeGetData.json();
  console.log('inFETCH', allJSONpoke.results);
  return allJSONpoke.results;
};
