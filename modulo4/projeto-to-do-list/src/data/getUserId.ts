import connection from "./baseDataBase"

type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

const getUserId = async (idParams: string): Promise<any> => {
    const user: User[] = await connection.raw(`
        SELECT * FROM Users WHERE id = "${idParams}"
    `)
    return user[0]
}

export default getUserId