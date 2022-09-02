import { Request, Response } from "express"
import getPurchasesById from "../data/getPurchasesById"

const getPurchasesByIdEndpoint = async (req: Request, res: Response): Promise<any> => {
    try {
        const user_id = req.params.user_id

        const listPurchases = await getPurchasesById(user_id)

        res.status(200).send(listPurchases)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getPurchasesByIdEndpoint