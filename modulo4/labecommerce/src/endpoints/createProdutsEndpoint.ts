import { Request, Response } from "express"
import createProducts from "../data/createProduts"

const createProdutsEndpoint = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, price, image_url } = req.body

        await createProducts(name, price, image_url)

        res.status(201).send('Produto cadastrado com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default createProdutsEndpoint