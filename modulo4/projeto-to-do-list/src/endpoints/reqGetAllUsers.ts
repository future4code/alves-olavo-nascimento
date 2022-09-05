import { Request, Response } from "express";
import getAllUsers from "../data/getAllUsers";

const reqGetAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const allUsers = await getAllUsers()
        if (!allUsers) {
            res.statusCode = 500
            throw new Error('Erro no servidor, tente mais tarde.')
        }

        res.status(200).send(allUsers)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}

export default reqGetAllUsers