import users from '../mocks/user';

const userDao: UserDao = {
    getAll(): Array<User> {
        return users;
    },

    getById(id): User | null {
        const user = users.find((u: User) => u.id == id);
        return user || null;
    },

    create(): number {
        return 11;
    },

    update(id): User {
        return users[id];
    },

    delete(id): number {
        return users[id].id;
    },
};

export default userDao;