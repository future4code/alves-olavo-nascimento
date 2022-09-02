import { Request, Response } from "express"
import connection from "./connnection"

const createdUser = async (
    name: string,
    email: string,
    password: string
): Promise<any> => {
    try {
        const id = Date.now()

        await connection.raw(`
        INSERT INTO labecommerce_users(id, name, email, password)
        VALUES(
        "${id}",
        "${name}",
        "${email}",
        "${password}"
        )
        `)

    } catch (error) {
        throw new Error('Erro no servidor')
    }
}

export default createdUser