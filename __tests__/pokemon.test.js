import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('pokemon routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const bulbasaur = {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  };

  it('post api pokemon to SQL table-- pokemon', () => {
    return request(app)
      .post('/api/v2/pokemon')
      .send(bulbasaur)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        });
      });
  });

  it('gets all pokemon from SQL table', async () => {
    await request(app).post('/api/v2/pokemon').send();
    return request(app)
      .get('/api/v2/pokemon')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
