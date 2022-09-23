import { IPostImputDataBaseDTO, IPostOutputDataBaseDTO, Post } from "../model/Post";
import { IUserImputDataBaseDTO, IUserOuputDataBaseDTO, User } from "../model/User";
import BaseDataBase from "./BaseDataBase";

export class UserBaseDataBase extends BaseDataBase {
    private static TableNameUser = "labook_Users"
    private static TableNamePost = "labook_Posts"

    private userDataBaseModel = async (user: User) => {

        const userDataBase: IUserImputDataBaseDTO = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEMail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDataBase
    }

    private postDataBaseModel = async (post: Post) => {

        const postDataBase: IPostImputDataBaseDTO = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getIdUser()
        }

        return postDataBase
    }

    public insertUserDataBase = async (user: User) => {

        const newUser = await this.userDataBaseModel(user)

        await this.getConnection()
            .insert(newUser)
            .into(UserBaseDataBase.TableNameUser)
    }

    public selectAllUserByEmail = async (email: string) => {

        const userDataBase: IUserOuputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(UserBaseDataBase.TableNameUser)
            .where({ email })

        return userDataBase
    }

    public selectAllUserById = async (idUser: string) => {

        const userDataBase: IUserOuputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(UserBaseDataBase.TableNameUser)
            .where({ id: idUser })

        return userDataBase
    }

    public insertPost = async (post: Post) => {

        const postDataBase = await this.postDataBaseModel(post)

        await this.getConnection()
            .insert(postDataBase)
            .into(UserBaseDataBase.TableNamePost)
    }

    public selectAllPosts = async (idUser: string) => {

        const allPostsDataBase:IPostOutputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(UserBaseDataBase.TableNamePost)
            .where({ user_id: idUser })

        return allPostsDataBase
    }
}