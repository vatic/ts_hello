import express from 'express';
import redis from 'redis';

import testRouter from './controllers/test';
import usersRouter from "./controllers/users";
import logger from './logger';
import config from "../config";
import {Server} from "http";

const app = express();

const {PORT} = config;

app.use('/test', testRouter);
app.use('/users', usersRouter);

// Redis connection
const redisClient: redis.RedisClient = redis.createClient();

redisClient.on('error', err => logger.error(`Redis error: ${err}`));
redisClient.on('connect', err =>
    logger.info('Successfully connect to redis'));
// --Redis connection


const server: Server = app.listen(PORT, () => {
    logger.info(`Simple Tasks app listening on port ${PORT}!`);
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received.');
  logger.info('Closing http server.');
  server.close(() => {
    logger.info('Http server closed.');
    redisClient.quit(() => {
      logger.info('Redis connection closed.');
      process.exit(0);
    });
  });
});

export = redisClient;
