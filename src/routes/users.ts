import express from 'express';
import usersDao from '../models/user';
import redis from 'redis';

const usersRouter = (redisClient: redis.RedisClient): express.Router => {
    const router: express.Router = express.Router();
    const dao = usersDao(redisClient);

    const allUsersHandler = async (_: express.Request, res: express.Response) => {
        const users = await dao.getAll();
        console.dir(users);
        res.json(users);
    };

    const userHandler = async (req: express.Request, res: express.Response) => {
        const user = await dao.getById(req.params.id);
        res.json(user);
    };

    router.get('/', allUsersHandler);
    router.get('/:id', userHandler);
    return router;
};

export default usersRouter;
