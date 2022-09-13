import BaseDataBase from "./baseDataBase"

export class UserData extends BaseDataBase {

    insertUser = async (
        id: string,
        email: string,
        password: string
    ) => {
        await this.getConnection()
            .insert({
                id: id,
                email: email,
                password: password
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
    selectUserByPassword = async (password: string): Promise<any[]> => {
        const passwordExist = await this.getConnection()
            .select('*')
            .into("introducao_utenticacao_users")
            .where({ password })

        return passwordExist
    }
}