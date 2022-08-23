import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";
import { User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("App rodando...")
});

// Exercício 3
// a) por path params, acho que a forma mais simples.
app.get('/users/name', (req: Request, res: Response) => {
    try {
        const nameQuery: string = req.query.name as string
        const nameQueryToLower = nameQuery.toLowerCase()
        const resultFind = users.find((user) => user.name === nameQueryToLower.charAt(0).toUpperCase() + nameQueryToLower.substr(1))
        if (!resultFind) {
            res.statusCode = 404
            throw new Error('Usuário não encontrado.')
        }
        res.status(200).send(resultFind)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

// Exercício 1
// a)  método get
// b)  /users
app.get('/users', (req: Request, res: Response) => {
    try {
        if (!users) {
            res.statusCode = 500
            throw new Error('Erro no servidor tente novamente mais tarde.')
        }

        res.status(200).send(users)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

// Exercício 2
// a) por path params, acho que a forma mais simples.
// b) apenas coloquei uma consdição, caso não seja atendida, informa os valores 
// esperados.
app.get('/users/:type', (req: Request, res: Response) => {
    try {
        const type = req.params.type
        if (type !== "normal" && type !== "admin") {
            res.statusCode = 401
            throw new Error('Valores esperados ADMIN ou NORMAL.')
        }
        const usersFiltrado: User[] = users.filter((user) => user.type === type.toUpperCase())
        if (usersFiltrado.length === 0) {
            res.statusCode = 401
            throw new Error('Não encontrado.')
        }
        res.status(200).send(usersFiltrado)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})


// Exercício 4
// a) não mudou nada.
// b) não, porque fica estranho sendo que batendo o olho o PUT deveria editar e não criar.
// app.post('/users', (req: Request, res: Response) => {
app.put('/users', (req: Request, res: Response) => {
    try {
        const name = req.body.name.toLowerCase();
        const { email, type, age } = req.body
        if (!name || !email || !type || !age) {
            res.statusCode = 401
            throw new Error('Falta informações do usuário')
        }
        users.push({
            id: Date.now(),
            name: name.charAt(0).toUpperCase() + name.substr(1),
            email,
            type: type.toUpperCase(),
            age
        })

        res.status(200).send(users)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

// Exercício 5
app.put('/users/user', (req: Request, res: Response) => {
    try {
        const nameParams: string = req.body.name
        const nameParamsToLower: string = nameParams.toLowerCase()
        if (!nameParams) {
            res.statusCode = 401
            throw new Error('Não e possivel enviar o campo vazio.')
        }
        const lastUser: User = users[users.length - 1]
        lastUser.name = nameParamsToLower.charAt(0).toUpperCase() + nameParamsToLower.substr(1)

        res.status(200).send()
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})