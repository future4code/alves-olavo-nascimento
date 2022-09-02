import connection from "./connnection"

const getAllUsers = async (): Promise<any[]> => {

    const users = await connection.raw(`
            SELECT * FROM labecommerce_users
        `)
    console.log(users[0])
    return users[0]
}

export default getAllUsers