const express = require('express');
const logger = require('./logger');

const { testRouter } = require('./routes/test');

module.exports = (config) => {
    const app = express();
    const { PORT } = config;
    app.use('/test', testRouter);
    app.listen(PORT, () => {
        logger.info(`Simple Tasks app listening on port ${PORT}!`);
    });
};
