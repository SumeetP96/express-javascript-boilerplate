import express from 'express';
import { corsPlugin } from './cors.js';
import { expressPlugin } from './express.js';
import { helmetPlugin } from './helmet.js';
import { morganPlugin } from './morgan.js';

const app = express();

app.use(expressPlugin);

app.use(corsPlugin);

app.use(helmetPlugin);

app.use(morganPlugin);

export const plugins = app;
