// import { promisify } from 'util';
import redis from 'redis';
import logger from '../logger';

const redisClient: redis.RedisClient = redis.createClient();

redisClient.on('error', err => logger.error(`Redis error: ${err}`));

export default redisClient;



