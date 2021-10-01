import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import pokemonController from '../lib/controller/pokemon.js';

const app = express();

app.use(express.json());

app.use('/api/v2/pokemon', pokemonController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
