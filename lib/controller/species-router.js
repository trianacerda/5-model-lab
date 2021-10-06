import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/speciesFetch.js';
import Species from '../model/Species.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Species.insert(getPoke);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const pokeData = await Species.getAll();
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const pokeData = await Species.getById(req.params.id);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  });
