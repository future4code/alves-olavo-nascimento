import { AllPurchasesPerson, AllUsersAndPurchases, Purchases } from "../../types"
import connection from "../connnection"

const getPurchasesById = async (userId: string): Promise<AllUsersAndPurchases[]> => {
    try {

        const users = await connection.raw(`
            SELECT labecommerce_users.id, labecommerce_users.name, labecommerce_products.name as nameProduct, labecommerce_purchases.id as idPurchase, labecommerce_purchases.quantity, labecommerce_purchases.total_price
            FROM labecommerce_purchases 
            JOIN labecommerce_users 
            ON labecommerce_purchases.user_id = labecommerce_users.id
            JOIN labecommerce_products 
            ON labecommerce_purchases.product_id = labecommerce_products.id
            WHERE labecommerce_users.id ="${userId}"
        `)

        let infoUser: any = {}

        const allPurchases: AllPurchasesPerson[] = []

        users[0].map((user: any) => {
            allPurchases.push({
                idPurchase: user.idPurchase,
                nameProduct: user.nameProduct,
                quantity: user.quantity,
                totalPrice: user.total_price
            })

            infoUser = {
                idUser: user.id,
                nameUser: user.name
            }
        })

        const userPurchases: AllUsersAndPurchases[] = [{
            idUser: infoUser.idUser,
            nameUser: infoUser.nameUser,
            allPurchases: allPurchases
        }]

        return userPurchases

    } catch (error) {
        throw new Error('Erro em inserir compras.')
    }

}

export default getPurchasesById