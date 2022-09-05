import { Request, Response } from "express"
import getAllUsers from "../data/queries/getAllUsers"

const getAllUsersEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsers()

        res.status(200).send(users)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getAllUsersEndpoint