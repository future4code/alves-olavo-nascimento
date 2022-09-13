import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

export const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const name = req.query.name as string
        const users = await selectAllUsers(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Usuários não encontrados")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
