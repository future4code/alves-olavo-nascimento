import { Request, Response } from "express";
import { creatUser } from "../data/creatUser";
import getAllUsers from "../data/getAllUsers";

const reqCreatUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.statusCode = 401
            throw new Error('Verifique se todos os campos estão preechidos e tente novamente.')
        }

        const allUsers = await getAllUsers()
        allUsers.filter((all: { name: any; nickname: any; email: any; }) => {
            if (all.name === name) {
                res.statusCode = 401
                throw new Error('Este nome esta em uso.')
            } else if (all.nickname === nickname) {
                res.statusCode = 401
                throw new Error('Este nickname esta em uso.')
            } else if (all.email === email) {
                res.statusCode = 401
                throw new Error('E-mail já cadastrado, tente outro.')
            }
        })

        await creatUser(name, nickname, email)
        res.status(201).send("O usuário criado com sucesso!");
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}

export default reqCreatUser