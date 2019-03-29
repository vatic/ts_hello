declare module 'user'

interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    role: number | null
}

interface UserDao {
    getAll (): Array<User>,
    getById (id: number): User | null,
    create (): number,
    update (id: number): User,
    delete (id: number): number,
}