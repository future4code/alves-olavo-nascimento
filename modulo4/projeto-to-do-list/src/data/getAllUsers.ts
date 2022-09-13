import connection from "./baseDataBase"

const getAllUsers = async (): Promise<any> => {
    const allUsers = await connection.raw(`
            SELECT * FROM Users
        `)
    return allUsers[0]
}

export default getAllUsers