import { HttpStatus } from '../../lib/http-status.js';
import { swaggerDoc } from '../../lib/swagger-doc.js';

const group = 'app';

/**
 * Swagger documentation for the app routes
 */
export const appDocs = Object.assign(
    {},

    swaggerDoc({
        path: `/${group}`,
        method: 'get',
        description: 'Greets the user with a friendly message',
        responses: [
            {
                code: HttpStatus.OK,
                description: 'A list of apps.',
                properties: {
                    message: { type: 'string' },
                },
            },
        ],
    }),

    swaggerDoc({
        path: `/${group}/config`,
        method: 'get',
        description: 'Get service config.',
        responses: [
            {
                code: HttpStatus.OK,
                description: 'A list of apps.',
                properties: {
                    serviceName: { type: 'string' },
                    datetime: { type: 'string' },
                    environment: { type: 'string' },
                },
            },
        ],
    }),
);
