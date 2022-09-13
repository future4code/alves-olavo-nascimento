import { Request, Response } from "express"
import selectAllUsersType from "../data/selectAllUsersAllTypes"

export const getAllUsersAllType = async (req: Request, res: Response): Promise<any> => {
    try {
        const type = req.query.type as string
        const users = await selectAllUsersType(type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Usuários não encontrados")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
