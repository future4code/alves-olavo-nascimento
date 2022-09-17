import { Request, Response } from "express";
import { FollowData } from "../data/FollowData";
import { UserData } from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class Follow {

    userFollow = async (req: Request, res: Response) => {
        try {
            const { idUserFollow } = req.body
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error('Token deve ser passado nos headers.')
            }
            if (!idUserFollow) {
                res.statusCode = 401
                throw new Error('O id a ser buscado deve ser informado.')
            }

            const authorization = new Authenticator()
            const normalPassword = authorization.verifyToken(token)
            const userId = normalPassword.id

            const userData = new UserData()
            const userDataBase = await userData.selectUserById(userId)

            const idUserFollowing = userDataBase[0].id

            const userDataBaseFollowed = await userData.selectUserById(idUserFollow)

            let idUserFollowed = userDataBaseFollowed[0].id
            const nameUserFollowed = userDataBaseFollowed[0].name

            const teste = {
                // const selectEmailExist = await userData.selectFollowers(idUserFollowed)
                // console.log(selectEmailExist)

                // if (!selectEmailExist.length) {
                //     console.log("oi")
                //     res.statusCode = 401
                //     throw new Error(`Você Ainda não segue ninguém!`)
                // }

                // const idUserFollowedDb = selectEmailExist[0].user_id_followed
                // const idUserFollowingDb = selectEmailExist[0].user_id_following

                // if (idUserFollowed === idUserFollowedDb && idUserFollowing === idUserFollowingDb) {
                //     res.statusCode = 409
                //     throw new Error(`Você já segue o ${nameUserFollowed}!`)
                // }
            }

            const generateId = new GenerateId()
            const id = generateId.generate()

            const followData = new FollowData()

            await followData.followedUser(
                id,
                idUserFollowing,
                idUserFollowed
            )

            res.status(201).send(`Você agora esta seguindo o ${nameUserFollowed}!`)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }

    userUnfollow = async (req: Request, res: Response) => {
        try {
            const { idUserUnfollow } = req.body
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error('Token deve ser passado nos headers.')
            }
            if (!idUserUnfollow) {
                res.statusCode = 401
                throw new Error('O id a ser buscado deve ser informado.')
            }

            const authorization = new Authenticator()
            const normalPassword = authorization.verifyToken(token)
            const userId = normalPassword.id

            console.log("idUserUnfollow", idUserUnfollow)
            console.log("userId        ", userId)

            const userData = new UserData()
            // const userDataBase = await userData.selectUserById(userId)

            const userUnfollowDb = await userData.selectUserById(idUserUnfollow)
            const nameUnfollowDb = userUnfollowDb[0].name

            const followData = new FollowData()
            const userUnfollowExiste = await followData.selectFollowers(idUserUnfollow)

            if (!userUnfollowExiste.length) {
                res.statusCode = 401
                throw new Error(`Você ainda não segue esse usuário para essa ação.`)
            }

            await followData.unfollowedUser(idUserUnfollow, userId)

            res.status(201).send(`Você paraou de seguir ${nameUnfollowDb}!`)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }
}