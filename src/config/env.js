import dotenv from 'dotenv';

dotenv.config();

const { env: e } = process;

export const envConfig = {
    // Environment
    NODE_ENV: e.NODE_ENV ?? 'development',

    // Port on which this service will run
    NODE_PORT: Number(e.NODE_PORT),

    // Address on which this service will run
    NODE_HOST: e.NODE_HOST || 'localhost',

    // Base url of this service
    NODE_BASE_URL: e.NODE_BASE_URL || 'http://localhost:3000',

    // Name of this service
    NODE_SERVICE_NAME: e.NODE_SERVICE_NAME || 'express-typescript-boilerplate',

    // Auth salt rounds
    AUTH_SALT_ROUNDS: Number(e.AUTH_SALT_ROUNDS) || 10,

    // Auth expiration time
    AUTH_EXPIRATION: Number(e.AUTH_EXPIRATION) || 3600000,

    // Auth public secret
    AUTH_ADMIN_SECRET: e.AUTH_ADMIN_SECRET || 'very-secret-admin-secret',

    // JWT private secret for Admin
    AUTH_CLIENT_SECRET: e.AUTH_CLIENT_SECRET || 'very-secret-client-secret',

    // Origin of admin facing client
    ADMIN_ORIGIN: e.ADMIN_ORIGIN || 'http://localhost:5173',

    // Origin of customer facing client
    CLIENT_ORIGIN: e.CLIENT_ORIGIN || 'http://localhost:5174',

    // MongoDB Atlas URI
    MONGO_ATLAS_URI: e.MONGO_ATLAS_URI || '',

    // AWS S3 bucket name
    AWS_S3_BUCKET_NAME: e.AWS_S3_BUCKET_NAME || '',

    // AWS S3 bucket region
    AWS_S3_BUCKET_REGION: e.AWS_S3_BUCKET_REGION || '',

    // AWS S3 bucket access key id
    AWS_S3_BUCKET_ACCESS_KEY_ID: e.AWS_S3_BUCKET_ACCESS_KEY_ID || '',

    // AWS S3 bucket secret access key
    AWS_S3_BUCKET_SECRET_ACCESS_KEY: e.AWS_S3_BUCKET_SECRET_ACCESS_KEY || '',
};
