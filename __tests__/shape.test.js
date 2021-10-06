import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const shape = {
    name: 'ball',
    url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
  };

  it('should post api pokemon shape to SQL table-- shape', () => {
    return request(app)
      .post('/api/v2/pokemon-shape')
      .send(shape)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'ball',
          url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
        });
      });
  });

  it('gets all shape from SQL table', async () => {
    await request(app).post('/api/v2/pokemon-shape').send(shape);
    return request(app)
      .get('/api/v2/pokemon-shape')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'ball',
          url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
        });
      });
  });

  it('gets a shape by id', async () => {
    await request(app).post('/api/v2/pokemon-shape').send(shape);
    return request(app)
      .get('/api/v2/pokemon-shape/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'ball',
          url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
        });
      });
  });

  it('should patch shape name by id', async () => {
    await request(app).post('/api/v2/pokemon-shape').send(shape);
    await request(app).patch('/api/v2/pokemon-shape/1').send({
      name: 'heart-shaped',
    });
    return request(app)
      .get('/api/v2/pokemon-shape/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'heart-shaped',
          url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
        });
      });
  });
  afterAll(() => {
    pool.end();
  });
});
