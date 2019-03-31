declare module 'user'

interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    role: number | undefined
}

interface UserDao {
    getAll (): Array<User>,
    getById (id: number): User | undefined,
    create (): number,
    update (id: number): User,
    delete (id: number): number,
}