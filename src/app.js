"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const test_1 = __importDefault(require("./controllers/test"));
const users_1 = __importDefault(require("./controllers/users"));
module.exports = (config) => {
    const app = express_1.default();
    const { PORT } = config;
    app.use('/test', test_1.default);
    app.use('/users', users_1.default);
    app.listen(PORT, () => {
        logger_1.default.info(`Simple Tasks app listening on port ${PORT}!`);
    });
};
