import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { IdeleteUserByIdInputDTO, ILoginInputDTO, ISignupImputDTO } from "../model/User";

export default class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const imput: ISignupImputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(imput)


            res.status(201).send(response)
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }
    public login = async (req: Request, res: Response) => {
        try {
            const imput: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.login(imput)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const allUsers = await this.userBusiness.getAllUsers(token)

            res.status(200).send(allUsers)
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public deleteUserById = async (req: Request, res: Response) => {
        try {
            const imput: IdeleteUserByIdInputDTO = {
                token: req.headers.authorization as string,
                idForDelelte: req.body.idForDelelte
            }

            await this.userBusiness.deleteUserById(imput)

            res.status(200).send('Usuário deletado')
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }
}