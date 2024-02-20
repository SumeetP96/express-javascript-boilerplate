import express from 'express';

const app = express();

app.use(
    express.json({
        // Limit request body size
        limit: '50mb',

        // Only parse JSON
        strict: true,
    }),
);

app.use(
    express.urlencoded({
        // Parse nested objects
        extended: true,

        // Limit request body size
        limit: '50mb',

        // Limit number of parameters
        parameterLimit: 10000,
    }),
);

export const expressPlugin = app;
