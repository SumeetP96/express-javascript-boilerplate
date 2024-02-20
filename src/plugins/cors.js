import cors from 'cors';
import express from 'express';
import { envConfig } from '../config/env.js';

const corsConfig = {
    // Allowed HTTP methods
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    // Allowed origins
    origin: [envConfig.CLIENT_ORIGIN, envConfig.ADMIN_ORIGIN],

    // Allow cookies
    credentials: true,

    // Allowed headers
    allowedHeaders: ['Content-Type', 'Authorization'],
};

const corsPlugin = express();

corsPlugin.use(cors(corsConfig));

export { corsConfig, corsPlugin };
