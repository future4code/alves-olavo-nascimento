import { Request, Response } from "express"
import getAllProductsByOrder from "../data/queries/getAllProductsByOrder"
import { Products } from "../types"

const getAllProductsByOrderEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        let nameOrPrice = req.query.nameOrPrice as string
        let order = req.query.order as string
        let search = req.query.search as string

        if (!nameOrPrice) {
            nameOrPrice = "name"
        }
        if (!order) {
            order = "ASC"
        }
        if (!search) {
            search = ""
        }

        const products = await getAllProductsByOrder(nameOrPrice, order, search)

        res.status(200).send(products)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getAllProductsByOrderEndpoint