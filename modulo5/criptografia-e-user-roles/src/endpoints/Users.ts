import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { BaseUser, User_Roles } from "../model/BaseUser";
import generateId from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { HashManager } from "../services/HashManager";

export class Users {
    async createUser(req: Request, res: Response) {
        try {
            const { email, password, role } = req.body

            if (!email || !password) {
                res.statusCode = 401
                throw new Error('Todos od dados precesam ser passados.')
            } else if (email.indexOf('@') === -1) {
                res.statusCode = 401
                throw new Error('Um email precisa ser informado.')
            } else if (password.length < 6) {
                res.statusCode = 401
                throw new Error('O campo senha precisa no mínimo de seis caracteres.')
            }

            const id = generateId()

            const userData = new UserData()

            const verifyEmailExist = await userData.selectUserByEmail(email)

            // console.log(verifyEmailExist)

            if (verifyEmailExist.length) {
                res.statusCode = 401
                throw new Error('Erro, o email informado já existe.')
            }

            const hashPassword = await new HashManager().hash(password)

            const user = new BaseUser(id, email, hashPassword, role)

            await userData.insertUser(user)

            const token = generateToken(id)

            res.status(201).send({ message: 'Usuário criado com sucesso!', token })

        } catch (error: any) {

            res.status(res.statusCode || 500).send({ error: error.message })

        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 401
                throw new Error('Todos os dados precesam ser passados.')
            }

            const user = new UserData()
            const emailExist = await user.selectUserByEmail(email)

            console.log(emailExist)

            const hashDataBase = emailExist[0].password

            const hashIsTrue = await new HashManager().compare(password, hashDataBase)

            const id = emailExist[0].id

            if (emailExist[0].email !== email || hashIsTrue === false) {
                res.statusCode = 401
                throw new Error('As credencias estão incorretas.')
            }

            const token = generateToken(id)

            res.status(200).send({ token })

        } catch (error: any) {

            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }
    async getAllUsers(req: Request, res: Response) {
        try {
            const tokenBody  = req.headers.authorization

            if (!tokenBody) {
                res.statusCode = 401
                throw new Error('Necessário ser admin para executar essa ação.')
            }

            const user = new UserData()
            const emailExist = await user.selectUserByEmail(email)

            console.log(emailExist)

            const hashDataBase = emailExist[0].password

            const hashIsTrue = await new HashManager().compare(password, hashDataBase)

            const id = emailExist[0].id

            if (emailExist[0].email !== email || hashIsTrue === false) {
                res.statusCode = 401
                throw new Error('As credencias estão incorretas.')
            }

            const token = generateToken(id)

            res.status(200).send({ token })

        } catch (error: any) {

            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }
}
