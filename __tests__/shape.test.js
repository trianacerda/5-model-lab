import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const shape = {
    shape: 'ball',
    url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
  };

  it('should post api pokemon shape to SQL table-- shape', () => {
    return request(app)
      .post('/api/v2/pokemon-shape')
      .send(shape)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          shape: 'ball',
          url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
        });
      });
  });
  afterAll(() => {
    pool.end();
  });
});
