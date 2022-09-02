import { Request, Response } from "express"
import getAllProducts from "../data/getAllProducts"
import purchases from "../data/purchases"

const purchasesEndpoint = async (req: Request, res: Response): Promise<any> => {
    try {
        const { user_id, product_id, quantity } = req.body

        const products = await getAllProducts()

        const productFilter = products.filter((prod) => prod.id === product_id)

        const sumPrice = productFilter.map((prod) => {
            const updatedPrice = prod.price * quantity
            return updatedPrice
        })

        const total_price = Number(sumPrice)

        await purchases(user_id, product_id, quantity, total_price)

        res.status(201).send('Compra registrada com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default purchasesEndpoint