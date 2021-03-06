import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const species = {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  };
  it('should post api species to SQL table-- species', async () => {
    return await request(app)
      .post('/api/v2/pokemon-species')
      .send(species)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        });
      });
  });

  it('gets pokemon speices from SQL table', async () => {
    await request(app).post('/api/v2/pokemon-species').send();
    return request(app)
      .get('/api/v2/pokemon-species')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        });
      });
  });

  it('gets a specific species by id', async () => {
    await request(app).post('/api/v2/pokemon-species').send(species);
    return request(app)
      .get('/api/v2/pokemon-species/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        });
      });
  });

  it('should update || patch species name by id', async () => {
    await request(app).post('/api/v2/pokemon-species').send(species);
    await request(app).patch('/api/v2/pokemon-species/1').send({
      name: 'tri-dino',
    });
    return request(app)
      .get('/api/v2/pokemon-species/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'tri-dino',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        });
      });
  });

  it('should delete a species by id', async () => {
    await request(app).post('/api/v2/pokemon-species').send(species);
    return request(app)
      .delete('/api/v2/pokemon-species/1')
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
