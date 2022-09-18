import { RecipesBase } from "../model/RecipesBase";
import { UserBase } from "../model/UserBase";
import BaseDataBase from "./baseDataBase";

export class UserData extends BaseDataBase {
    insertUserData = async (user: UserBase) => {
        try {
            console.log('entrei em insertUserData')
            await this.getConnection()
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
                .into("cookenu_back_users")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserByEmail = async (email: string): Promise<any[]> => {
        try {
            const userFound = await this.getConnection()
                .select("*")
                .into("cookenu_back_users")
                .where("email", email)

            return userFound

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserById = async (id: string): Promise<any[]> => {
        try {
            const userFound = await this.getConnection()
                .select("*")
                .into("cookenu_back_users")
                // .where("id", id)
                .where({ id })

            return userFound

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}