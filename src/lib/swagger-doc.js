import { HttpStatus } from './http-status.js';

/**
 * This function generates a swagger specification doc for a given route options.
 *
 * NOTE: This function assumes that the response will be wrapped in a data object.
 * If you don't want to wrap the response in a data object, set the usesJsonResponse to false.
 */
export const swaggerDoc = ({
    path,
    method,
    summary,
    description,
    responses,
    usesJsonResponse = true,
    includeGenricServerError = true,
}) => {
    const responseObj = {};

    responses.forEach((response) => {
        const responseSchema = {
            description: response.description,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {},
                    },
                },
            },
        };

        if (usesJsonResponse) {
            responseSchema.content['application/json'].schema.properties = {
                success: { type: 'boolean' },
                data: {
                    type: 'object',
                    properties: {
                        ...response.properties,
                    },
                },
            };
        } else {
            responseSchema.content['application/json'].schema.properties =
                response.properties;
        }

        responseObj[response.code] = responseSchema;
    });

    // Add generic error response if not already defined
    if (includeGenricServerError) {
        const hasErrorResponse = responses.find(
            (response) => response.code === 500,
        );

        if (!hasErrorResponse) {
            responseObj[HttpStatus.INTERNAL_SERVER_ERROR] = {
                description: 'Internal Server Error',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                success: { type: 'boolean' },
                                message: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            };
        }
    }

    const doc = {
        [path]: {
            [method]: {
                summary: summary,
                description: description,
                responses: responseObj,
            },
        },
    };

    return doc;
};
