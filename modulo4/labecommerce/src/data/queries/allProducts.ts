import { Products } from "../../types"
import connection from "../connnection"

const allProducts = async (): Promise<Products[]> => {
    try {
        const products = await connection.raw(`
            SELECT * FROM labecommerce_products
        `)
        
        return products[0]
    } catch (error) {
        throw new Error("Erro em pegar os produtos");
    }

}

export default allProducts