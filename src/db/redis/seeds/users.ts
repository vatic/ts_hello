import redis from 'redis';

const redisClient: redis.RedisClient = redis.createClient();
import users from '../../../mocks/user';

const { print } = redis;

redisClient.flushall();

users.forEach(u => {
    const usersArr = Object.entries(u).reduce<string[]>((acc, a) => [...acc, ...a], []);
    redisClient.hmset(`ts_hello:users:${u.id}`, usersArr, print);
    redisClient.sadd('ts_hello:ids:users', u.id.toString(10), print);
});

redisClient.hgetall('ts_hello:users:1', (err, user) => console.dir(user));
redisClient.quit();
