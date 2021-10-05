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

  xit('post api pokemon to SQL table-- pokemon', () => {
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

  xit('gets all pokemon from SQL table', async () => {
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

  xit('gets a pokemon by ID', async () => {
    await request(app).post('/api/v2/pokemon').send();
    return request(app)
      .get('/api/v2/pokemon/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        });
      });
  });

  xit('should update/patch pokemon by id', async () => {
    await request(app).post('/api/v2/pokemon').send({
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    });
    await request(app).patch('/api/v2/pokemon/1').send({
      name: 'TRIANAasaur',
    });
    return request(app)
      .get('/api/v2/pokemon/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'TRIANAasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        });
      });
  });

  xit('should DELETE a pokemon by id', async () => {
    await request(app).post('/api/v2/pokemon').send(bulbasaur);
    return request(app)
      .delete('/api/v2/pokemon/1')
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
