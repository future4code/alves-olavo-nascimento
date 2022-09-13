import { Request, Response } from "express";
import { editUserId } from "../data/editUserId";

const reqEditUserId = async (req: Request, res: Response): Promise<any> => {
    try {
        const idParams: string = req.params.id
        const { name, nickname } = req.body

        if (!name || !nickname) {
            res.statusCode = 401
            throw new Error('Confira se todos os campos estão preenchidos.')
        }

        await editUserId(idParams, name, nickname)
        res.status(200).send('Usuário atualizado com sucesso.');
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}

export default reqEditUserId