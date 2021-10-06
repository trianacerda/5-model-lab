import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/speicesFetch.js';
import Species from '../model/Species.js';

export default Router().post('/', async (req, res, next) => {
  try {
    const getPoke = await fetchPoke();
    const pokeData = await Species.insert(getPoke);
    res.send(pokeData);
  } catch (err) {
    next(err);
  }
});
