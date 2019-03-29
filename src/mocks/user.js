"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_1 = __importDefault(require("../mocks/role"));
const userId = (title) => {
    const role = role_1.default.find((r) => r.title == title);
    if (role && role.id) {
        return role.id;
    }
    return null;
};
const users = [
    {
        id: 1,
        name: 'Petr',
        email: 'p@mail.com',
        password: '123',
        role: userId('Admin'),
    },
    {
        id: 2,
        name: 'Alex',
        email: 'a@mail.com',
        password: '123',
        role: userId('Admin'),
    },
    {
        id: 3,
        name: 'Ivan',
        email: 'i@mail.com',
        password: '123',
        role: userId('Admin'),
    },
    {
        id: 4,
        name: 'Maria',
        email: 'm@mail.com',
        password: '123',
        role: userId('Admin'),
    },
    {
        id: 5,
        name: 'John',
        email: 'j@mail.com',
        password: '123',
        role: userId('Admin'),
    },
];
exports.default = users;
