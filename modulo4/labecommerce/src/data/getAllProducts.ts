import connection from "./connnection"

const getAllProducts = async (): Promise<any[]> => {
    try {
        const products = await connection.raw(`
    SELECT * FROM labecommerce_products
`)
        console.log(products[0])
        return products[0]
    } catch (error) {
        throw new Error("Erro em pegar os produtos");
    }

}

export default getAllProducts