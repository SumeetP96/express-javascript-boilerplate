import {
    DeleteObjectCommand,
    GetObjectCommand,
    PutObjectCommand,
    S3Client,
} from '@aws-sdk/client-s3';
import { envConfig } from '@config/env';

/**
 * Default AWS S3 bucket name
 */
const s3Bucket = envConfig.AWS_S3_BUCKET_NAME;

/**
 * AWS S3 client configuration
 */
const s3Config = {
    region: envConfig.AWS_S3_BUCKET_REGION,

    credentials: {
        accessKeyId: envConfig.AWS_S3_BUCKET_ACCESS_KEY_ID,

        secretAccessKey: envConfig.AWS_S3_BUCKET_SECRET_ACCESS_KEY,
    },
};

/**
 * Get file from AWS S3 bucket
 */
const getObject = async (path, bucket = s3Bucket) => {
    const s3Client = new S3Client(s3Config);

    const command = new GetObjectCommand({
        Bucket: bucket,
        Key: path,
    });

    try {
        return await s3Client.send(command);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Put file to AWS S3 bucket
 */
const putObject = async (buffer, path, bucket) => {
    const s3Client = new S3Client(s3Config);

    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: path,
        Body: buffer,
    });

    try {
        return await s3Client.send(command);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Delete file from AWS S3 bucket
 */
const deleteObject = async (path, bucket) => {
    const s3Client = new S3Client(s3Config);

    const command = new DeleteObjectCommand({
        Bucket: bucket,
        Key: path,
    });

    try {
        return await s3Client.send(command);
    } catch (error) {
        console.error(error);
    }
};

export const awsS3 = {
    putObject,
    getObject,
    deleteObject,
};
