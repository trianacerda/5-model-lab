import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/habitatFetch.js';
import Habitat from '../model/Habitat.js';

export default Router().post('/', async (req, res, next) => {
  try {
    const getPoke = await fetchPoke();
    const pokeData = await Habitat.insert(getPoke);
    res.send(pokeData);
  } catch (err) {
    next(err);
  }
});
