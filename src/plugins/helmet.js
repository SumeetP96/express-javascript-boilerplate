import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());

export const helmetPlugin = app;
