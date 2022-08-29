import { Request, Response } from "express";
import { getTaskId } from "../data/getTaskId";

export type Task = {
    id: string,
    title: string,
    description: string,
    status: string,
    limitdate: string,
    user_id: string,
    nickname: string
}

const reqGetTaskId = async (req: Request, res: Response): Promise<any> => {
    try {
        const idTask: string = req.params.id
        const task: Task[] = await getTaskId(idTask)

        if (!task) {
            res.statusCode = 500
            throw new Error('Erro no servidor, tente mais tarde.')
        }
        const formattedTask: Task[] = task.map((tas) => {
            const taskDataAmerican = tas.limitdate
            const dateWithoutSlash = taskDataAmerican.split("/") 
            const dateInReverse = dateWithoutSlash.reverse()
            const dateBrazilianFormat = dateInReverse.join("/")
            const updatedDate: Task = {
                id: tas.id,
                title: tas.title,
                description: tas.description,
                status: tas.status,
                limitdate: dateBrazilianFormat,
                user_id: tas.user_id,
                nickname: tas.nickname
            }
            return updatedDate
        })

        res.status(200).send(formattedTask);
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}

export default reqGetTaskId