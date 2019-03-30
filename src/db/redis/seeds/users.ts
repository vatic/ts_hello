import redis from 'redis';

const redisClient: redis.RedisClient = redis.createClient();
import users from '../../../mocks/user';

const { print } = redis;

users.forEach(u => {
    const usersArr = Object.entries(u).reduce<string[]>((acc, a) => [...acc, ...a], []);
    redisClient.hmset(`ts_hello:users:${u.id}`, usersArr, print);
});

redisClient.hgetall('ts_hello:users:1', (err, user) => console.dir(user));
redisClient.quit();
