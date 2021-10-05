import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/colorfetch.js';
import Color from '../model/Color.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Color.insert(getPoke);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Color.getAll(getPoke);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  });
