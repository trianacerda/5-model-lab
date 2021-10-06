import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import pokemon from '../lib/controller/pokemon.js';
import color from '../lib/controller/color.js';
import habitat from '../lib/controller/habitat.js';
import shape from '../lib/controller/shape.js';
// import species from '../lib/controller/species.js';

const app = express();

app.use(express.json());

app.use('/api/v2/pokemon', pokemon);
app.use('/api/v2/pokemon-color', color);
app.use('/api/v2/pokemon-habitat', habitat);
app.use('/api/v2/pokemon-shape', shape);
// app.use('/api/v2/pokemon-species', species);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
