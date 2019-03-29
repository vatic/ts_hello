import express from 'express';
import usersDao from '../models/user';

const usersRouter: express.Router = express.Router();

const allUsersHandler = async (req: express.Request, res: express.Response) => {
    res.json(usersDao.getAll());
};

const userHandler = async (req: express.Request, res: express.Response) => {
    res.json(usersDao.getById(req.params.id));
};

usersRouter.get('/', allUsersHandler);
usersRouter.get('/:id', userHandler);

export default usersRouter;
