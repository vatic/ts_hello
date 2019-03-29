import express from 'express';
import logger from './logger';

import testRouter from './controllers/test';
import usersRouter from "./controllers/users";

module.exports = (config: Config) => {
    const app = express();
    const { PORT } = config;

    app.use('/test', testRouter);
    app.use('/users', usersRouter);

    app.listen(PORT, () => {
        logger.info(`Simple Tasks app listening on port ${PORT}!`);
    });
};

