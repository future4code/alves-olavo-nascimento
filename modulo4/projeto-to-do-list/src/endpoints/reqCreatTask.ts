import { Request, Response } from "express"
import { creatTask } from "../data/creatTask"

const reqCreatTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { title, description, limitdate, user_id } = req.body

        if (!title || !description || !limitdate || !user_id) {
            req.statusCode = 401
            throw new Error('Existem campos vazios.')
        }

        await creatTask(title, description, limitdate, user_id)
        res.status(200).send('Tarefa criada com sucesso');
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}

export default reqCreatTask