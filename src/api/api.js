import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { HttpStatus } from '../lib/http-status.js';
import { jsonReponse } from '../lib/json-response.js';
import { appRoute } from './app/app.routes.js';
import { swaggerDocument } from './swagger.js';

const app = express();

// Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// App routes
app.use('/app', appRoute);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    jsonReponse.error(res, 'Not Found', HttpStatus.NOT_FOUND);
});

export const api = app;
