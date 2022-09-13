import { Request, Response } from "express"
import allProducts from "../data/queries/allProducts"
import createPurchases from "../data/queries/createPurchases"

const createPurchasesEndpoint = async (req: Request, res: Response): Promise<any> => {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            res.statusCode = 401
            throw new Error('Todos os campos devem estar preenchidos.')
        }

        const products = await allProducts()

        const productFilter = products.filter((prod) => prod.id === product_id)

        const sumPrice = productFilter.map((prod) => {
            const updatedPrice = prod.price * quantity
            return updatedPrice
        })

        const total_price = Number(sumPrice)

        await createPurchases(user_id, product_id, quantity, total_price)

        res.status(201).send('Compra registrada com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default createPurchasesEndpoint