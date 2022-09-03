import { Request, Response } from "express"
import getAllProductsByOrder from "../data/getAllProductsByOrder"

const getAllProductsByOrderEndpoint = async (req: Request, res: Response): Promise<any> => {
    try {
        let nameOrPrice = req.query.nameOrPrice as string
        let order = req.query.order as string
        let search = req.query.search as string

        if (!nameOrPrice) {
            nameOrPrice = "name"
        } else
            if (!order) {
                order = "ASC"
            } else
                if (!search) {
                    search = "a"
                }
                
        console.log(nameOrPrice, order)

        const products = await getAllProductsByOrder(nameOrPrice, order, search)
        console.log(products)

        res.status(200).send(products)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getAllProductsByOrderEndpoint