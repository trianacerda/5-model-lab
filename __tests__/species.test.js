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
          name: 'cave',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        });
      });
  });
  afterAll(() => {
    pool.end();
  });
});
