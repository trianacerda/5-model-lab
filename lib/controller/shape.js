import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/shapeFetch.js';
import Shape from '../model/Shape.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Shape.insert(getPoke);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const pokeData = await Shape.getAll();
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const pokeData = await Shape.getById(req.params.id);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  });
