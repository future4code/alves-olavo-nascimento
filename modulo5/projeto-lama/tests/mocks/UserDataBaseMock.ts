import BaseDataBase from '../../src/dataBase/BaseDataBase'
import { IUserModelDataBaseDTO, IUserOutputDataBaseDTO, Role, User } from '../../src/model/User'

export class UserDataBaseMock extends BaseDataBase {
    public static TABLE_USERS = "lama_Users"

    public userModelDataBase = async (user: User) => {
        const userDataBase: IUserModelDataBaseDTO = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole(),
        }
        return userDataBase
    }

    public insertUser = async (user: User) => { }

    public selectUserByEmail = async (email: string) => {

        switch (email) {
            case "usermock@gmail.com":
                const normalUser: IUserModelDataBaseDTO = {
                    id: "id-mock",
                    name: "User Mock",
                    email: "usermock@gmail.com",
                    password: "hash-mock",
                    role: Role.NORMAL
                }

                return normalUser

            case "astrodev@gmail.com":
                const adminUser: IUserModelDataBaseDTO = {
                    id: "id-mock",
                    name: "Astrodev",
                    email: "astrodev@gmail.com",
                    password: "hash-bananinha",
                    role: Role.ADMIN
                }

                return adminUser

            default:
                return undefined
        }
    }

    public selectUserById = async (id: string) => {
        const tableUsers = UserDataBaseMock.TABLE_USERS

        const emailFound: IUserOutputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .into(tableUsers)
            .where({ id })

        return emailFound[0]
    }

}