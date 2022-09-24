import { IInsertLikeDataBaseDTO, ISelectLikeDataBaseDTO, IVerifyLikeDTO, Like } from "../model/Like";
import { IPostImputDataBaseDTO, IPostOutputDataBaseDTO, Post } from "../model/Post";
import { IUserImputDataBaseDTO, IUserOuputDataBaseDTO, User } from "../model/User";
import BaseDataBase from "./BaseDataBase";

export class UserBaseDataBase extends BaseDataBase {
    private static TableNameUser = "labook_Users"
    private static TableNamePost = "labook_Posts"
    private static TableNameLike = "labook_Likes"

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

    private likeDataBaseModel = async (like: Like) => {

        const likeDataBase: IInsertLikeDataBaseDTO = {
            id: like.getId(),
            post_id: like.getPostId(),
            user_id: like.getUserId()
        }

        return likeDataBase
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

        const allPostsDataBase: IPostOutputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(UserBaseDataBase.TableNamePost)
            .where({ user_id: idUser })

        return allPostsDataBase
    }

    public selectPostById = async (idPost: string) => {
        console.log('selectPostById')
        const postFound: IPostOutputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(UserBaseDataBase.TableNamePost)
            .where({ id: idPost })

        return postFound
    }

    public removePost = async (idPostForDelete: string) => {

        await this.getConnection()
            .delete("*")
            .from(UserBaseDataBase.TableNamePost)
            .where({ id: idPostForDelete })

    }

    public insertLikePost = async (like: Like) => {
        const newLike = await this.likeDataBaseModel(like)

        await this.getConnection()
            .insert(newLike)
            .into(UserBaseDataBase.TableNameLike)

    }

    public selectLikePostByUser = async (verifyLike: IVerifyLikeDTO) => {

        const likeFound: ISelectLikeDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(UserBaseDataBase.TableNameLike)
            .where({ post_id: verifyLike.idUserPost } && { user_id: verifyLike.idUser })

        return likeFound

    }
}