import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { UserBase } from "../model/UserBase";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class User {
    signup = async (req: Request, res: Response): Promise<void> => {
        try {

            console.log('entrou em signup')

            const { name, email, password } = req.body

            if (!name || !email || !password) {
                res.statusCode = 401
                throw new Error('Revise todos os campos a serem enviados.')
            }

            const userData = new UserData()
            const verifyEmailexist = await userData.selectUserByEmail(email)

            if (verifyEmailexist.length) {
                res.statusCode = 409
                throw new Error('Email já cadastrado no banco de dados.')
            }

            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(password)

            const generateId = new GenerateId()
            const id = generateId.generate()

            const newUser = new UserBase(id, name, email, hashPassword)

            await userData.insertUserData(newUser)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id })

            res.status(201).send({ message: 'Usuário criado com sucesso!', token })

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 401
                throw new Error('Preencha todos os campos antes do envio.')
            }

            const userData = new UserData()
            const userDataBase = await userData.selectUserByEmail(email)
            console.log(userDataBase)

            const idDataBase = userDataBase[0].id
            const emailDataBase = userDataBase[0].email
            const hashDataBase = userDataBase[0].password
            console.log(idDataBase, emailDataBase, hashDataBase)

            const hashManager = new HashManager()
            const hashIsValid = await hashManager.compare(password, hashDataBase)

            console.log(hashIsValid)

            if (email !== emailDataBase || hashIsValid === false) {
                res.statusCode = 401
                throw new Error('Credencias incorretas.')
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(password)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }
}