import redis from 'redis';

import users from '../../../mocks/user';
import config from '../../../../config';
import { obj2arr } from '../../../util';

const redisClient: redis.RedisClient = redis.createClient();

const { print } = redis;
const userPrefix = config.redis.userPrefix;
const userIdsPrefix = config.redis.userIdsPrefix;

redisClient.flushall();

users.forEach(u => {
    const usersArr = obj2arr(u);
    redisClient.hmset(`${userPrefix}:${u.id}`, usersArr, print);
    redisClient.sadd(userIdsPrefix, u.id.toString(10), print);
});

redisClient.hgetall('ts_hello:users:1', (_, user) => console.dir(user));
redisClient.quit();
