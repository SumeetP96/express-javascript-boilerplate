import express from 'express';
import { api } from '../api/api.js';
import { envConfig } from '../config/env.js';
import { plugins } from '../plugins/plugins.js';

const app = express();

const bootstrap = () => {
    try {
        app.use(plugins);

        app.use(api);

        app.listen(envConfig.NODE_PORT, () => {
            console.log(`Server running on port 3000`);
        });
    } catch (error) {
        console.log(error);
    }
};

export default bootstrap;
