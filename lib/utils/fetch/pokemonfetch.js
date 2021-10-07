import fetch from 'node-fetch';

const rootPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

export const fetchPoke = async () => {
  const pokeGetData = await fetch(rootPokeURL);
  const allJSONpoke = await pokeGetData.json();
  return {
    name: allJSONpoke.results[0].name,
    url: allJSONpoke.results[0].url,
  };
};
