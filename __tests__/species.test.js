import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  xit('should POST api pokemon to SQL table-- pokemon', () => {
    return request(app)
      .post('/api/v2/pokemon')
      .send()
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining[
            expect.objectContaining({
              id: expect.any(String),
              pokeName: expect.any(String),
              url: expect.any(String),
            })
          ]
        );
      });
  });
  afterAll(() => {
    pool.end();
  });
});
