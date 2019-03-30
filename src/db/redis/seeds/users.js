"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const redisClient = redis_1.default.createClient();
const user_1 = __importDefault(require("../../../mocks/user"));
const { print } = redis_1.default;
user_1.default.forEach(u => {
    const usersArr = Object.entries(u).reduce((acc, a) => [...acc, ...a], []);
    redisClient.hmset(`ts_hello:users:${u.id}`, usersArr, print);
});
redisClient.hgetall('ts_hello:users:1', (err, user) => console.dir(user));
redisClient.quit();
