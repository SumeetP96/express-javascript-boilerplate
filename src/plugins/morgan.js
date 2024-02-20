import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));

export const morganPlugin = app;
