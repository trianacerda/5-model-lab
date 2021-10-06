import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/habitatFetch.js';
import Habitat from '../model/Habitat.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Habitat.insert(getPoke);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Habitat.getAll(getPoke);
      res.send(pokeData);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const pokeData = await Habitat.getById(req.params.id);
      res.send(pokeData);
    } catch (error) {
      next(error);
    }
  })
  .patch('/:id', async (req, res, next) => {
    try {
      const pokeData = await Habitat.patchById(req.params.id, req.body);
      res.send(pokeData);
    } catch (error) {
      next(error);
    }
  });
