import connection from "../connnection"

const createPurchases = async (
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
): Promise<any> => {
    try {
        const id = Date.now()

        await connection.raw(`
            INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
            VALUES(
            "${id}",
            "${user_id}",
            "${product_id}",
            "${quantity}",
            "${total_price}"
            )
        `)

    } catch (error) {
        throw new Error('Erro em inserir compras.')
    }

}

export default createPurchases