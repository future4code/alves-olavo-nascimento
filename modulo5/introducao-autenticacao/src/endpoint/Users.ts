import { Request, Response } from "express";
import { UserData } from "../data/insertUser";
import generateId from "../services/generateId";
import { generateToken } from "../services/generateToken";


export class Users {
  async createUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body

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

      const user = new UserData()

      const verifyEmailExist = await user.selectUserByEmail(email)
      console.log(verifyEmailExist)

      if (verifyEmailExist.length) {
        res.statusCode = 401
        throw new Error('Erro, o email informado já existe.')
      }

      await user.insertUser(id, email, password)

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
      const passwordExist = await user.selectUserByPassword(password)

      const id = emailExist[0].id

      if (!emailExist.length || !passwordExist.length) {
        res.statusCode = 401
        throw new Error('As credencias estão incorretas.')
      }

      res.status(200).send({ "id": id })

    } catch (error: any) {

      res.status(res.statusCode || 500).send({ error: error.message })

    }
  }
}