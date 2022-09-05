import { Request, Response } from "express"
import createdUsert from "../data/queries/createdUser"
import getAllUsers from "../data/queries/getAllUsers"

const createdUserEndpiont = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.statusCode = 401
            throw new Error('Todos os campos devem estar preenchidos.')
        }

        const allusers = await getAllUsers()

        allusers.filter((user: any) => {
            if (user.email === email) {
                res.statusCode = 401
                throw new Error('Email já cadastrado.')
            }
            if (user.name === name) {
                res.statusCode = 401
                throw new Error('Nome já cadastrado.')
            }
        })

        await createdUsert(name, email, password)

        res.status(201).send('Usuário criado com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}



export default createdUserEndpiont