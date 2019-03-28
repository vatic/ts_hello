import express from 'express';
import logger from './logger';

import testRouter from './routes/test';


module.exports = (config: Config) => {
    const app = express();
    const { PORT } = config;
    app.use('/test', testRouter);
    app.listen(PORT, () => {
        logger.info(`Simple Tasks app listening on port ${PORT}!`);
    });
};

