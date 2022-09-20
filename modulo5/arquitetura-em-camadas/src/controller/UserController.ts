import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const imput = req.body

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signup(imput)

            res.status(201).send({ message: "Usuário criado!", token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }
    public login = async (req: Request, res: Response) => {
        try {
            const imput = req.body

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
            const token = req.headers.authorization as string
            const idForDelelte = req.body.idForDelelte

            const userBusiness = new UserBusiness()
            await userBusiness.deleteUserById(token, idForDelelte)

            res.status(200).send('Usuário deletado')
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }
    }
}