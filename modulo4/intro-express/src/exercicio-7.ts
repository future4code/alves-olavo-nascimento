import express, { Request, Response } from 'express';
import cors from 'cors'
import { posts } from './exercicio-6';


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("servidor rodando")
})

// get posts

app.get("/posts", (req: Request, res: Response) => {
    console.log('posts', posts)
    res.send(posts)
})