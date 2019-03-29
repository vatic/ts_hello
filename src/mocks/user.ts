import roles from '../mocks/role';

const userId = (title: String): number | null => {
    const role = roles.find((r: Role) => r.title == title);
    if(role && role.id) {
        return role.id;
    }
    return null;
};

const users: User[] = [
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

export default users;