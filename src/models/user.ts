import { promisify } from 'util';
import redis from 'redis';
import config from '../../config';
// import users from '../mocks/user';


const userDao = (redisClient: redis.RedisClient) => {

    const hgetAllAsync = promisify(redisClient.hgetall).bind(redisClient);
    const smembersAsync = promisify(redisClient.smembers).bind(redisClient);
    const prefix = config.redis.userPrefix;

    return {
        async getAll(): Promise<Array<User | undefined >> {
            const ids = await smembersAsync(config.redis.userIdsPrefix);
            const usersPromises: Array<User> = ids.map((id: string) => {
                return this.getById(Number(id));
                // users.push(user);
            });
            return Promise.all(usersPromises);
            // console.dir(users);
            // return users;
        },

        getById(id: number): Promise<User | undefined> {
            const pr = `${prefix}:${id}`;
            const user = hgetAllAsync(pr);
            return user;
        },

        create(): number {
            return 11;
        },

        // update(id: number): User {
        // },

        delete(id: number): number {
            return 11;
        },
    };
};

export default userDao;
