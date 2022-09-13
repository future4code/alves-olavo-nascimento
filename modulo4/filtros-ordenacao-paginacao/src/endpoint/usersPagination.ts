import { Request, Response } from "express"
import selectUsersPagination from "../data/selectUsersPagination"

export const usersPagination = async (req: Request, res: Response): Promise<any> => {
    try {
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        const size: number = 10;
        const offset = size * (page - 1);
        const users = await selectUsersPagination(size, offset)

        console.log("page", page)
        if (!users.length) {
            res.statusCode = 404
            throw new Error("Usuários não encontrados")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
