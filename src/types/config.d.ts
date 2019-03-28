declare module 'config'

interface CorsOptions {
    origin: Array<string>,
    credentials: boolean,
    optionsSuccessStatus: number,
}

interface OauthOptions {
    grants: Array<string>,
    debug: boolean,
    passThroughErrors: boolean,
    continueAfterResponse: boolean,
    accessTokenLifetime: number,
}

interface Config {
    corsOptions: CorsOptions,
    oauthOptions: OauthOptions,
    PORT: number,
}

