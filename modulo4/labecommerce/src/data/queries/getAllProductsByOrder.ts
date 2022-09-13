import connection from "../connnection"
import { Products } from "../../types"

const getAllProductsByOrder = async (
    nameOrPrice: string,
    order: string,
    search: string
): Promise<Products[]> => {

    try {
        const products = await connection.raw(`
            SELECT * FROM labecommerce_products WHERE name LIKE "%${search}%" ORDER BY ${nameOrPrice} ${order}
        `)

        return products[0]
    } catch (error) {
        throw new Error("Erro em pegar os produtos");
    }

}

export default getAllProductsByOrder