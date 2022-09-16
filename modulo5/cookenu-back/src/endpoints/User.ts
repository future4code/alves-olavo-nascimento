import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { Recipes } from "../model/Recepes";
import { UserBase } from "../model/UserBase";
import { Authenticator, IdTokenPayload } from "../services/Authenticator";
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
        console.log('entrei em login')
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 401
                throw new Error('Preencha todos os campos antes do envio.')
            }

            const userData = new UserData()
            const userDataBase = await userData.selectUserByEmail(email)

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
            const token = authenticator.generateToken({ id: idDataBase })

            console.log(token)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }

    getProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error('Token deve ser passado nos headers.')
            }
            console.log(token)

            const authorization = new Authenticator()
            const normalPassword = authorization.verifyToken(token)

            if (!normalPassword) {
                res.statusCode = 401
                throw new Error('token invalid.')
            }

            const userId = normalPassword.id

            if (!userId) {
                res.statusCode = 401
                throw new Error('Token deve ser passado nos headers.')
            }

            console.log("normalPassword =", normalPassword)
            console.log("userId =", userId)

            const userData = new UserData()
            const userDataBase = await userData.selectUserById(userId)

            if (!userDataBase) {
                res.statusCode = 500
                throw new Error('Erro no servidor.')
            }

            const id = userDataBase[0].id
            const name = userDataBase[0].name
            const email = userDataBase[0].email

            res.status(200).send({ id, name, email })

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }

    getUserById = async (req: Request, res: Response) => {
        try {
            const idParams = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error('Token deve ser passado nos headers.')
            }
            if (!idParams) {
                res.statusCode = 404
                throw new Error('O id a ser buscado deve ser informado por params.')
            }

            const userData = new UserData()
            const userSearched = await userData.selectUserById(idParams)

            if (!userSearched) {
                res.statusCode = 500
                throw new Error('Erro no servidor.')
            }

            const id = userSearched[0].id
            const name = userSearched[0].name
            const email = userSearched[0].email

            res.status(200).send({ id, name, email })

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }

    createRecipe = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { title, description } = req.body

            if (!title || !description) {
                res.statusCode = 401
                throw new Error('Verifique todoso os campos antes do envio.')
            }

            const authorization = new Authenticator()
            const normalPassword = authorization.verifyToken(token)
            const userId = normalPassword.id
            console.log(normalPassword)

            const userData = new UserData()
            const userSearched = await userData.selectUserById(userId)

            if (!userSearched) {
                res.statusCode = 500
                throw new Error('Erro no servidor.')
            }

            const Iduser = userSearched[0].id

            const generateId = new GenerateId()
            const IdRecipe = generateId.generate()

            const date = new Date()
            const dateNow = date.toLocaleDateString()

            const timeNow = new Date().toLocaleTimeString()

            const new_date = dateNow.split("/")
            const deadlineInReverse = new_date.reverse()
            const deadlineForAmerican = deadlineInReverse.join("-")

            const newRecipe = new Recipes(IdRecipe, title, description, deadlineForAmerican, timeNow, Iduser)

            await userData.insertRecipe(newRecipe)

            res.status(201).send("Receita criada com sucesso!")

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }

    getRecipeByid = async (req: Request, res: Response) => {
        try {
            const idRecipe = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error('Token deve ser passado nos headers.')
            }
            if (!idRecipe) {
                res.statusCode = 401
                throw new Error('O id a ser buscado deve ser informado por params.')
            }
            
            console.log(idRecipe)
            const userData = new UserData()
            const recipeDataBase = await userData.selectRecipeById(idRecipe)

            res.status(200).send(recipeDataBase)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }
}