import { User } from "../model/User";
import BaseDataBase from "./BaseDataBase";

export class UserBaseDataBase extends BaseDataBase {
    public static TABLE_USERS = "lama_Users"

    private UserModelDataBase = async (user: User) => {
        const userDataBase = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole(),
        }
        return userDataBase
    }

    public insertUser = async (user: User) => {
        const newUser = await this.UserModelDataBase(user)
        const tableUsers = UserBaseDataBase.TABLE_USERS

        await this.getConnection()
            .insert(newUser)
            .into(tableUsers)
    }

    public selectByEmail = async (email: string) => {
        const tableUsers = UserBaseDataBase.TABLE_USERS

        const emailFound = await this.getConnection()
            .select("*")
            .into(tableUsers)
            .where({ email })

        return emailFound[0]
    }
}