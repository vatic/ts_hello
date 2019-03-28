// const oauthModel = require('./src/models/oauth')
var corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5000',
    ],
    credentials: true,
    optionsSuccessStatus: 200,
};
var oauthOptions = {
    // model: oauthModel,
    grants: ['password'],
    debug: true,
    passthroughErrors: false,
    continueAfterResponse: true,
    accessTokenLifetime: 864000,
};
var PORT = process.env.PORT || 8080;
module.exports = {
    corsOptions: corsOptions,
    oauthOptions: oauthOptions,
    PORT: PORT,
};
