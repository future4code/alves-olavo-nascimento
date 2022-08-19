import express, { Request, Response } from 'express';
import cors from 'cors'
import { posts } from './exercicio-6';


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("servidor rodando")
})

app.get("/posts/:postId", (req: Request, res: Response) => {
    const idUser = posts.filter((post) => {
        return post.userId ===  post.userId
    })
    res.end(idUser)
})

// incompleta.