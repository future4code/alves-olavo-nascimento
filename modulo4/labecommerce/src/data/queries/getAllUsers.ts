import connection from "../connnection"
import { AllPurchasesPerson, AllUsersAndPurchases, Users } from "../../types"

// const getAllUsers = async (): Promise<Users[]> => {
const getAllUsers = async (): Promise<AllUsersAndPurchases[]> => {

    // const users = await connection.raw(`
    //         SELECT * FROM labecommerce_users 
    //     `)

    // return users[0]

    const users = await connection.raw(`
    SELECT labecommerce_users.id, labecommerce_users.name, labecommerce_products.name as nameProduct, labecommerce_purchases.id as idPurchase, labecommerce_purchases.quantity, labecommerce_purchases.total_price
    FROM labecommerce_purchases 
    JOIN labecommerce_users 
    ON labecommerce_purchases.user_id = labecommerce_users.id
    JOIN labecommerce_products 
    ON labecommerce_purchases.product_id = labecommerce_products.id 
    ORDER BY labecommerce_users.id
`)

    const allPurchases: AllUsersAndPurchases[] = []

    users[0].map((user: any) => {

        if (allPurchases[allPurchases.length - 1]?.idUser === user.id) {
            allPurchases[allPurchases.length - 1].allPurchases.push({
                idPurchase: user.idPurchase,
                nameProduct: user.nameProduct,
                quantity: user.quantity,
                totalPrice: user.total_price
            })
        } else {
            allPurchases.push({
                idUser: user.id,
                nameUser: user.name,
                allPurchases: [{
                    idPurchase: user.idPurchase,
                    nameProduct: user.nameProduct,
                    quantity: user.quantity,
                    totalPrice: user.total_price

                }]
            })
        }
    })

    return allPurchases

}

export default getAllUsers