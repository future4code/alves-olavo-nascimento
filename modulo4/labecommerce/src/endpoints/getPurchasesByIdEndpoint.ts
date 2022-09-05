import { Request, Response } from "express"
import getPurchasesById from "../data/queries/getPurchasesById"
import getAllUsers from "../data/queries/getAllUsers"


const getPurchasesByIdEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.user_id

        const users = await getAllUsers()

        const user = users.find((user: any) => user.id === userId)

        if (user === undefined) {
            res.statusCode = 401
            throw new Error('Usuário não encontrado.')
        }


        const listPurchases = await getPurchasesById(userId)

        res.status(200).send(listPurchases)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getPurchasesByIdEndpoint