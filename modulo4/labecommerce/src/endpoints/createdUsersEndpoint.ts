import { Request, Response } from "express"
import createdUsert from "../data/createdUser"

const createdUserEndpiont = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, password } = req.body
        if(!name|| !email|| !password){
            res.statusCode = 401
            throw new Error('Todos os campos devem estar preenchidos.')
        }
        
        await createdUsert(name, email, password)

        res.status(201).send('Usuário criado com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}



export default createdUserEndpiont