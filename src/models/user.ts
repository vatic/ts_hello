import { promisify } from 'util';
import redis from 'redis';
import config from '../../config';
import { obj2arr } from '../util';


const { print } = redis;

const userDao = (redisClient: redis.RedisClient) => {

    const userIdsPrefix = config.redis.userIdsPrefix;

    const hgetAllAsync = promisify(redisClient.hgetall).bind(redisClient);
    const smembersAsync = promisify(redisClient.smembers).bind(redisClient);
    const hmsetAsync = promisify(redisClient.hmset.bind(redisClient));
    const delAsync = promisify(redisClient.del.bind(redisClient));

    const prefix = config.redis.userPrefix;


    return {
        async getAll(): Promise<Array<User | undefined >> {
            const ids = await smembersAsync(config.redis.userIdsPrefix);
            const usersPromises: Array<User> = ids.map((id: string) => {
                return this.getById(Number(id));
            });
            return Promise.all(usersPromises);
        },

        getById(id: number): Promise<User | undefined> {
            const pr = `${prefix}:${id}`;
            const user = hgetAllAsync(pr);
            return user;
        },

        async create(user: User): Promise<Object> {
            const ids = await smembersAsync(config.redis.userIdsPrefix);
            const newId = Math.max(...ids.map((e: string) => Number(e))) + 1;
            const u = Object.assign({}, user, { id: newId });
            const userArr = obj2arr(u);
            const result = await hmsetAsync(`${prefix}:${newId}`, userArr);
            if (result === 'OK') {
                redisClient.sadd(userIdsPrefix, newId.toString(10), print);
            }
            const pr = `${prefix}:${newId}`;
            const newUser = await hgetAllAsync(pr);
            return { result, user: newUser };
        },

        async update(user: User): Promise<Object> {
            const userArr = obj2arr(user);
            const id = user.id;
            const result = await hmsetAsync(`${prefix}:${id}`, userArr);
            return { result, user };
        },

        async delete(id: number): Promise<Object>{
            const result = await delAsync(`${prefix}:${id}`);
            return { result };
        },
    };
};

export default userDao;
