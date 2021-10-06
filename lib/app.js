import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import pokemon from './controller/pokemons.js';
import color from './controller/colors.js';
import habitat from './controller/habitats.js';
import shape from './controller/shapes.js';
import species from './controller/species-router.js';

const app = express();

app.use(express.json());

app.use('/api/v2/pokemon', pokemon);
app.use('/api/v2/pokemon-color', color);
app.use('/api/v2/pokemon-habitat', habitat);
app.use('/api/v2/pokemon-shape', shape);
app.use('/api/v2/pokemon-species', species);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
