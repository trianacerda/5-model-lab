/* eslint-disable space-before-function-paren */
/* eslint-disable keyword-spacing */
import { Router } from 'express';
import { fetchPoke } from '../utils/fetch.js';
import Pokemon from '../model/Pokemon.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Pokemon.insert(getPoke);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const pokeData = await Pokemon.getAll();
      res.json(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const pokeData = await Pokemon.getById(req.params.id);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .patch('/:id', async (req, res, next) => {
    try {
      const pokeData = await Pokemon.patchById(req.params.id, req.body);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const pokeData = await Pokemon.deleteById(req.params.id);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  });
