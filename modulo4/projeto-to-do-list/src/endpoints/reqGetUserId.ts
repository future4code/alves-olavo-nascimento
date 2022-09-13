import { Request, Response } from "express"
import getUserId from "../data/getUserId"

type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

const reqGetUserId = async (req: Request, res: Response): Promise<any> => {
    try {
        const idParams: string = req.params.id
        const user: User[] = await getUserId(idParams)

        if (!user) {
            res.statusCode = 500
            throw new Error('Erro no servidor, tente mais tarde.')
        }

        res.status(200).send(user);
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}

export default reqGetUserId