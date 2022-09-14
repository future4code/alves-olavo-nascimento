import { BaseUser } from "../model/BaseUser"
import BaseDataBase from "./baseDatabase"

export class UserData extends BaseDataBase {
    insertUser = async (user: BaseUser) => {
        await this.getConnection()
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getUser_Roles()
            })
            .into("introducao_utenticacao_users")
    }

    selectUserByEmail = async (email: string): Promise<any[]> => {
        const emailExist = await this.getConnection()
            .select('*')
            .into("introducao_utenticacao_users")
            .where('email', email)

        return emailExist
    }

    selectAllUsers = async (): Promise<any[]> => {
        const allUsers = await this.getConnection()
            .select('*')
            .into("introducao_utenticacao_users")

        return allUsers
    }
}