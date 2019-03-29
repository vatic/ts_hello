"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../mocks/user"));
const userDao = {
    getAll() {
        return user_1.default;
    },
    getById(id) {
        const user = user_1.default.find((u) => u.id == id);
        return user || null;
    },
    create() {
        return 11;
    },
    update(id) {
        return user_1.default[id];
    },
    delete(id) {
        return user_1.default[id].id;
    },
};
exports.default = userDao;
