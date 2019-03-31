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

    const getUserHandler = async (req: express.Request, res: express.Response) => {
        const user = await dao.getById(req.params.id);
        res.json(user);
    };

    const createUserHandler = async (req: express.Request, res: express.Response) => {
        const user = req.body;
        const result = await dao.create(user);
        res.json(result);
    };

    const updateUserHandler = async (req: express.Request, res: express.Response) => {
        const user = req.body;
        const u = Object.assign({}, user, { id: req.params.id })
        const result = await dao.update(u);
        res.json(result);
    };

    const deleteUserHandler = async (req: express.Request, res: express.Response) => {
        const result = await dao.delete(req.params.id);
        res.json(result);
    };

    router.get('/', allUsersHandler);
    router.get('/:id', getUserHandler);
    router.post('/', createUserHandler);
    router.put('/:id', updateUserHandler);
    router.delete('/:id', deleteUserHandler);
    return router;
};

export default usersRouter;
