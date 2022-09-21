import { IUserDb, IUserOutputDbDTO, User } from "../model/User"
import BaseDataBase from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {

    public static TABLE_USER = "cookenu_back_users"

    public toUserDbModel = async (user: User) => {
        const userDb: IUserDb = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }

        return userDb
    }

    public insertUser = async (user: User): Promise<void> => {
        const userDb = await this.toUserDbModel(user)

        await this.getConnection()
            .into(UserDataBase.TABLE_USER)
            .insert(userDb)
    }

    public selectUserByEmail = async (email: string): Promise<IUserOutputDbDTO> => {
        const [userFound]: IUserOutputDbDTO[] = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_USER)
            .where("email", email)

        return userFound
    }

    public selectUserById = async (id: string): Promise<IUserOutputDbDTO> => {
        const [userFound]: IUserOutputDbDTO[] = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_USER)
            .where("id", id)

        return userFound
    }

    public selecAllUsers = async (): Promise<IUserOutputDbDTO[]> => {
        const allUsers: IUserOutputDbDTO[] = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_USER)

        return allUsers
    }

    public removeUserById = async (id: string): Promise<void> => {
        await this.getConnection()
            .delete("*")
            .from(UserDataBase.TABLE_USER)
            .where("id", id)
    }
}