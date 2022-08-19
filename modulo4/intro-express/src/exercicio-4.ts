import express, { Request, Response } from 'express';
import cors from 'cors'
import { users } from './exercicio-3';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("servidor rodando")
})

// get users

app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})