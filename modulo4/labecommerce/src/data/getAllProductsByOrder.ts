import connection from "./connnection"

const getAllProductsByOrder = async (nameOrPrice: string, order: string, search: string): Promise<any[]> => {
    try {
        const products = await connection.raw(`
            SELECT * FROM labecommerce_products WHERE name "%${search}%" ORDER BY ${nameOrPrice} ${order}
        `)
        console.log(products[0])
        return products[0]
    } catch (error) {
        throw new Error("Erro em pegar os produtos");
    }

}

export default getAllProductsByOrder