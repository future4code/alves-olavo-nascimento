import { Request, Response } from "express"
import getAllProducts from "../data/getAllProducts"

const getAllProductsEndpoint = async (req: Request, res: Response): Promise<any> => {
    try {
        const products = await getAllProducts()
        console.log(products)

        res.status(200).send(products)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getAllProductsEndpoint