import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const habitat = {
    name: 'cave',
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/1/',
  };

  it('should POST api habitat to SQL table-- habitat', () => {
    return request(app)
      .post('/api/v2/pokemon-habitat')
      .send(habitat)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'cave',
          url: 'https://pokeapi.co/api/v2/pokemon-habitat/1/',
        });
      });
  });

  it('gets all habitat from SQL table', async () => {
    await request(app).post('/api/v2/pokemon-habitat').send(habitat);
    return request(app)
      .get('/api/v2/pokemon-habitat')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'cave',
          url: 'https://pokeapi.co/api/v2/pokemon-habitat/1/',
        });
      });
  });
  afterAll(() => {
    pool.end();
  });
});
