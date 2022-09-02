import connection from "./connnection"

const getPurchasesById = async (user_id: string): Promise<any> => {
    try {
        const listPurchases = await connection.raw(`
        SELECT labecommerce_users.id, labecommerce_users.name, labecommerce_purchases.product_id, labecommerce_purchases.quantity, labecommerce_purchases.total_price
        FROM labecommerce_purchases 
        JOIN labecommerce_users 
        ON labecommerce_purchases.user_id = labecommerce_users.id
        WHERE labecommerce_users.id ="${user_id}";
        `)

        return listPurchases[0]

    } catch (error) {
        throw new Error('Erro em inserir compras.')
    }

}

export default getPurchasesById