import { envConfig } from '../../config/env.js';
import { HttpStatus } from '../../lib/http-status.js';
import { jsonReponse } from '../../lib/json-response.js';

/**
 * Get service info
 */
const showGreeting = (req, res) => {
    const data = {
        message: 'Welcome to Node Express Boilerplate service',
    };

    jsonReponse.success(res, data, HttpStatus.OK);
};

/**
 * Get service config
 */
const getConfig = (req, res) => {
    const data = {
        serviceName: envConfig.NODE_SERVICE_NAME,
        datetime: new Date(),
        environment: envConfig.NODE_ENV,
    };

    jsonReponse.success(res, data, HttpStatus.OK);
};

export default {
    showGreeting,
    getConfig,
};
