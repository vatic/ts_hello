"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const oauthModel = require('./src/models/oauth')
const config = {
    corsOptions: {
        origin: [
            'http://localhost:3000',
            'http://localhost:5000',
        ],
        credentials: true,
        optionsSuccessStatus: 200,
    },
    oauthOptions: {
        // model: oauthModel,
        grants: ['password'],
        debug: true,
        passThroughErrors: false,
        continueAfterResponse: true,
        accessTokenLifetime: 864000,
    },
    PORT: Number(process.env.PORT) || 8080,
};
exports.default = config;
