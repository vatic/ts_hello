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

interface Redis {
    prefix: string,
    userPrefix: string,
    userIdsPrefix: string,
}

interface Config {
    corsOptions: CorsOptions,
    oauthOptions: OauthOptions,
    redis: Redis,
    PORT: number,
}

