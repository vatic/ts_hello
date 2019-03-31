import express from 'express';
import morgan from 'morgan';
import redis from 'redis';

import mainRouter from './routes';
import logger from './logger';
import config from '../config';
import { Server } from 'http';

const app = express();
const {PORT} = config;


// Redis connection
const redisClient: redis.RedisClient = redis.createClient();


redisClient.on('error', err => logger.error(`Redis error: ${err}`));
redisClient.on('connect', () => {
    logger.info(` Successfully connect to redis: ${redisClient.address}`);
});
// --Redis connection


app.use(morgan('tiny'));

app.use('/api', mainRouter(redisClient));
app.use('/routes', (_, res) => res.json(app.routes));

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
