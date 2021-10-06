import { Router } from 'express';
import { fetchPoke } from '../utils/fetch/colorFetch.js';
import Colors from '../model/Color.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const getPoke = await fetchPoke();
      const pokeData = await Colors.insert(getPoke);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const pokeData = await Colors.getAll();
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const pokeData = await Colors.getById(id);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const pokeData = await Colors.patchById(id, body);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const pokeData = await Colors.deleteById(id);
      res.send(pokeData);
    } catch (err) {
      next(err);
    }
  });
