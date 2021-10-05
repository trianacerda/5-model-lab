import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const black = {
    color: 'black',
    url: 'https://pokeapi.co/api/v2/pokemon-color/1/',
  };

  it('should POST api pokemon COLOR to SQL table-- color', () => {
    return request(app)
      .post('/api/v2/pokemon-color')
      .send(black)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          color: 'black',
          url: 'https://pokeapi.co/api/v2/pokemon-color/1/',
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
