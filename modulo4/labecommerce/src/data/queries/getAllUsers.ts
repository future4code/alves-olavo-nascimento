import connection from "../connnection"
import { AllPurchasesPerson, AllUsersAndPurchases, Users } from "../../types"

const getAllUsers = async (): Promise<Users[]> => {

    const users = await connection.raw(`
            SELECT * FROM labecommerce_users 
        `)

    return users[0]
}

export default getAllUsers