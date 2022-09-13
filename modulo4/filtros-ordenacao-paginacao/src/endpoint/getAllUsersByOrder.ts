import { Request, Response } from "express"
import selectAllUsersByOrder from "../data/selectAllUsersByOrder"

export const getAllUsersByOrder = async (req: Request, res: Response): Promise<any> => {
    try {
        let sort: string = req.query.sort as string
        let order: string = req.query.order as string
        const email: string = 'email'

        if (!(sort === "name" || sort === "type")) {
            sort = "email"
        }

        if (!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")) {
            order = "ASC"
        }
        
        const users = await selectAllUsersByOrder(sort, order, email)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Usuários não encontrados")
        }

        res.status(200).send(users)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}