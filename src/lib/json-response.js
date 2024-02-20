import { HttpStatus } from './http-status.js';

/**
 * Utility functions for sending JSON responses.
 *
 * @example
 * app.get('/', (req, res) => {
 *    jsonReponse.success(res, HttpStatus.OK, { message: 'Hello World!' });
 * });
 */
export const jsonReponse = {
    /**
     * Sends a successful JSON response with the provided data.
     */
    success: (res, data, status = HttpStatus.OK) => {
        return res.status(status).json({ success: true, data });
    },

    /**
     * Sends an error JSON response with the provided error message.
     */
    error: (res, message, status = HttpStatus.INTERNAL_SERVER_ERROR) => {
        res.status(status).json({ success: false, message });
    },
};
