import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { IdeleteUserByIdInputDTO, ILoginInputDTO, ISignupImputDTO } from "../model/User";

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const imput: ISignupImputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(imput)


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

            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(imput)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const userBusiness = new UserBusiness()
            const allUsers = await userBusiness.getAllUsers(token)

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

            const userBusiness = new UserBusiness()
            await userBusiness.deleteUserById(imput)

            res.status(200).send('Usuário deletado')
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }
}