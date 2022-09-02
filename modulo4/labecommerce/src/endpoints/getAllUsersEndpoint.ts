import { Request, Response } from "express"
import getAllUsers from "../data/getAllUsers"

const getAllUsersEndpoint = async (req: Request, res: Response): Promise<any> => {
    try {
        const users = await getAllUsers()

        res.status(201).send(users)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getAllUsersEndpoint