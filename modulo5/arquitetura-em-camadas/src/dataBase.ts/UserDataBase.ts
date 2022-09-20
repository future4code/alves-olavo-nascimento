import { User } from "../model/User"
import BaseDataBase from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {

    public insertUser = async (user: User) => {
        await this.getConnection()
            .into("cookenu_back_users")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
    }

    public selectUserByEmail = async (email: string): Promise<any> => {
        const [userFound] = await this.getConnection()
            .select("*")
            .from("cookenu_back_users")
            .where("email", email)

        return userFound
    }

    public selectUserById = async (id: string): Promise<any> => {
        const [userFound] = await this.getConnection()
            .select("*")
            .from("cookenu_back_users")
            .where("id", id)

        return userFound
    }

    public selecAllUsers = async (): Promise<any> => {
        const allUsers = await this.getConnection()
            .select("*")
            .from("cookenu_back_users")

        return allUsers
    }

    public removeUserById = async (id: string): Promise<void> => {
        await this.getConnection()
            .delete("*")
            .from("cookenu_back_users")
            .where("id", id)

    }
}