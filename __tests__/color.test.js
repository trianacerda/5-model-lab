import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('color routes', () => {
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

  it('gets all color-pokemon from SQL table', async () => {
    await request(app).post('/api/v2/pokemon-color').send(black);
    return request(app)
      .get('/api/v2/pokemon-color')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          color: 'black',
          url: 'https://pokeapi.co/api/v2/pokemon-color/1/',
        });
      });
  });

  it('gets a color of pokemon by Id', async () => {
    await request(app).post('/api/v2/pokemon-color').send(black);
    return request(app)
      .get('/api/v2/pokemon-color/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          color: 'black',
          url: 'https://pokeapi.co/api/v2/pokemon-color/1/',
        });
      });
  });

  it('should patch the color of the pokemon-color by id', async () => {
    await request(app).post('/api/v2/pokemon-color').send(black);
    await request(app).patch('/api/v2/pokemon-color/1').send({
      color: 'matte black with a hint of sparkle',
    });
    return request(app)
      .get('/api/v2/pokemon-color/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          color: 'matte black with a hint of sparkle',
          url: 'https://pokeapi.co/api/v2/pokemon-color/1/',
        });
      });
  });

  it('should Delete a pokemon-color by id', async () => {
    await request(app).post('/api/v2/pokemon-color').send(black);
    return request(app)
      .delete('/api/v2/pokemon-color/1')
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
