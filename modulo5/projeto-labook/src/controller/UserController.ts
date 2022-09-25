import { Request, Response } from "express";
import { UseBusiness } from "../business/UseBusiness";
import { ILikePostImputDTO, IUnlikePostImputDTO } from "../model/Like";
import { IPostImputDeletePostsDTO } from "../model/Post";
import { IUserLoginInputDTO, IUserPostInputDTO, IUserSignupInputDTO } from "../model/User";

export class Usercontroller {
    constructor(
        private useBusiness: UseBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const imput: IUserSignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }

            const response = await this.useBusiness.signup(imput)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const imput: IUserLoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.useBusiness.login(imput)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public post = async (req: Request, res: Response) => {
        try {

            const imput: IUserPostInputDTO = {
                token: req.headers.authorization as string,
                content: req.body.content
            }

            await this.useBusiness.post(imput)

            res.status(201).send('Post criado.')

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public allPosts = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string


            const allPostsByThisUser = await this.useBusiness.allPosts(token)

            res.status(201).send(allPostsByThisUser)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public deletePost = async (req: Request, res: Response) => {
        try {
            const imput: IPostImputDeletePostsDTO = {
                token: req.headers.authorization as string,
                idPostForDelete: req.params.id
            }

            const response = await this.useBusiness.deletePost(imput)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public likePost = async (req: Request, res: Response) => {
        try {
            const imput: ILikePostImputDTO = {
                token: req.headers.authorization as string,
                idPostLiked: req.body.idPostLiked
            }

            const response = await this.useBusiness.likePost(imput)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public unLikePost = async (req: Request, res: Response) => {
        try {
            const imput: IUnlikePostImputDTO = {
                token: req.headers.authorization as string,
                idPostUnliked: req.body.idPostUnliked
            }

            const response = await this.useBusiness.unLikePost(imput)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }
}