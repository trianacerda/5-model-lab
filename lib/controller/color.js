import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/colorfetch.js';
import Pokemon from '../model/Pokemon.js';

export default Router().post('/', async (req, res, next) => {
  try {
    const getPoke = await fetchPoke();
    const pokeData = await Pokemon.insert(getPoke);
    res.send(pokeData);
  } catch (err) {
    next(err);
  }
});
