import { Request, Response } from "express"
import allProducts from "../data/queries/allProducts"
import createProducts from "../data/queries/createProduts"

const createProdutsEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            res.statusCode = 401
            throw new Error('Todos os campos devem estar preenchidos.')
        }

        const products = await allProducts()

        products.filter((prod) => {
            if (prod.name === name) {
                res.statusCode = 401
                throw new Error('Name já esta sendo usado, tente outro.')
            }
        })

        await createProducts(name, price, image_url)

        res.status(201).send('Produto cadastrado com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default createProdutsEndpoint