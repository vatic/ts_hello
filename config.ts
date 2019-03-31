// const oauthModel = require('./src/models/oauth')
const config: Config = {
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

    redis: {
        prefix: 'ts_hello',
        userPrefix: 'ts_hello:users',
        userIdsPrefix: 'ts_hello:ids:users',
    },

    PORT: Number(process.env.PORT) || 8080,

};

export default config;
