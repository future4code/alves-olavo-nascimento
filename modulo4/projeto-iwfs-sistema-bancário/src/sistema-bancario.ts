import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";
import { User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("app rodando...")
});

app.get('/users', (req: Request, res: Response) => {
    try {
        res.status(201).send(users)
    } catch (error: any) {

    }
})

app.get('/users/user', (req: Request, res: Response) => {
    try {
        const { cpf, name } = req.body
        console.log(name)
        console.log(cpf)

        if (!cpf || !name) {
            res.statusCode = 401
            throw new Error('Informações não encontradas, revise os campos')
        } if (typeof cpf !== 'number') {
            res.statusCode = 401
            throw new Error('Somente números no campo de cpf')
        } if (typeof name !== 'string') {
            res.statusCode = 401
            throw new Error('Nome de usuário necessario')
        }

        const userCpf: User | undefined = users.find((user) => {
            return user.cpf === cpf 
        })
        if (userCpf) {
            const balance: number = userCpf.balance
            res.status(201).send(`Seu Saldo Total é ${balance.toFixed(2)}`)
        }

    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})


app.post('/users/:cpf/payment', (req: Request, res: Response) => {
    try {
        const cpfParms: number = Number(req.params.cpf)
        const { value, date, description } = req.body
        const usersFilter: User[] = users.filter((user) => user.cpf === cpfParms)
        const usersFind = usersFilter.map((user) => user.spending)
        const usersPush = usersFind.push(
            value,
            date,
            description
        )

        res.status(201).send(usersPush)
    } catch (error: any) {

    }
})

app.post('/users', (req: Request, res: Response) => {
    try {
        const { name, cpf, date } = req.body
        const cpfExisting = users.find((user) => user.cpf === cpf)
        const newDate = date.split('')
        // console.log(newDate)
        const yearBirth = newDate[6] + newDate[7] + newDate[8] + newDate[9]
        // console.log(yearBirth)
        const currentYearOne = new Date()
        // console.log(currentYearOne)
        const currentYearTwo = currentYearOne.getFullYear();
        // console.log(currentYearTwo)
        const age = currentYearTwo - yearBirth
        // console.log(age)

        if (!name || !cpf || !date) {
            res.statusCode = 401
            throw new Error('Dados necessários não informados, revise os campos.')
        } else if (typeof name !== "string") {
            res.statusCode = 401
            throw new Error('O nome requer uma ou mais palavras.')
        } else if (typeof cpf !== "number") {
            res.statusCode = 401
            throw new Error('Somente numeros no campo CPF.')
        } else if (cpfExisting) {
            res.statusCode = 401
            throw new Error('Usuário já cadastrado.')
        } else if (age <= 17) {
            res.statusCode = 401
            throw new Error('Apenas usuários maior de 18 anos podem criar uma conta.')
        } else if (name && cpf && date) {
            users.push({
                name,
                cpf,
                date,
                balance: 0,
                spending: []
            })
            res.status(201).send(users)
        }
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})


