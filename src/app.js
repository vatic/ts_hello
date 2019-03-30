"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const redis_1 = __importDefault(require("redis"));
const test_1 = __importDefault(require("./controllers/test"));
const users_1 = __importDefault(require("./controllers/users"));
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("../config"));
const app = express_1.default();
const { PORT } = config_1.default;
app.use('/test', test_1.default);
app.use('/users', users_1.default);
// Redis connection
const redisClient = redis_1.default.createClient();
redisClient.on('error', err => logger_1.default.error(`Redis error: ${err}`));
redisClient.on('connect', err => logger_1.default.info('Successfully connect to redis'));
// --Redis connection
const server = app.listen(PORT, () => {
    logger_1.default.info(`Simple Tasks app listening on port ${PORT}!`);
});
process.on('SIGINT', () => {
    logger_1.default.info('SIGINT signal received.');
    logger_1.default.info('Closing http server.');
    server.close(() => {
        logger_1.default.info('Http server closed.');
        redisClient.quit(() => {
            logger_1.default.info('Redis connection closed.');
            process.exit(0);
        });
    });
});
module.exports = redisClient;
