import express from 'express';
import redis from 'redis';

import testRouter from './test';
import usersRouter from './users';

const mainRouter = (redisClient: redis.RedisClient): express.Router => {
    const router: express.Router = express.Router();

    router.use('/test', testRouter);
    router.use('/users', usersRouter(redisClient));
    return router;
};

export default mainRouter;
