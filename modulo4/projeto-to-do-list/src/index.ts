import { Request, Response } from "express"
import app from "./app";
import { User } from "./data";
import { creatUser } from "./functions-of-requisitions/creatUser";
import { editUserId } from "./functions-of-requisitions/editUserId";
import { getUserId } from "./functions-of-requisitions/getUserId";


app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.statusCode = 401
            throw new Error('Verifique se todos os campos estão preechidos e tente novamente.')
        }

        await creatUser(name, nickname, email)
        res.status(201).send("O usuário criado com sucesso!");
    } catch (error: any) {
        console.log(error)
        console.log({ message: error.message })
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const idParams: string = req.params.id
        const user: User[] = await getUserId(idParams)

        if (!user) {
            res.statusCode = 500
            throw new Error('Erro no servidor, tente mais tarde.')
        }

        res.status(200).send(user);
    } catch (error: any) {
        console.log(error)
        console.log({ message: error.message })
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const idParams: string = req.params.id
        const { name, nickname } = req.body
        if(!name && !nickname){
            res.statusCode = 401
            throw new Error('E necessário inserir ao menos um campo.')
        }

        await editUserId(idParams, name, nickname)
        res.status(200).send('Usuário atualizado com sucesso.');
    } catch (error: any) {
        console.log(error)
        console.log({ message: error.message })
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})