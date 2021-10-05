import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should POST api pokemon COLOR to SQL table-- color', () => {
    return request(app)
      .post('/api/v2/pokemon-color/')
      .send()
      .then((res) => {
        expect(res.body).toEqual({
          color: 'black',
          url: 'https://pokeapi.co/api/v2/pokemon-color/1/',
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
