import connection from "../connection"
import { User } from "../data"

export const getUserId = async (idParams: string): Promise<any> => {
    const user: User[] = await connection.raw(`
        SELECT * FROM Users WHERE id = "${idParams}"
    `)
    return user[0]
}