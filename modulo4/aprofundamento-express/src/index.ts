
// Documentação. se e que pode chamar isso de documentação. 😅 
// https://documenter.getpostman.com/view/21555844/VUqmuJd7

// questão 1

import express, { Request, response, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("app rodando...")
});

app.get("/ping", (req: Request, res: Response) => {
    res.send("🏓 pong  🏓")
})

// ==========================================
// exercicio 2

type tarefa = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// ==========================================
// exercicio 3

let tarefas: tarefa[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "comer",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "trocar fralda",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fazer exercício",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "fazer mercado",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "manter a sanidade",
        "completed": false
    }
]
// ==========================================
// exercicio 4

app.get('/tarefas-concluidas', (req: Request, res: Response) => {
    const result = tarefas.filter((tare => {
        return tare.completed === true
    }))
    res.send(result)
})

// ==========================================
// exercicio 5

app.post('/criar-tarefa', (req: Request, res: Response) => {
    tarefas.push({
        userId: req.body.userId,
        id: Date.now(),
        title: req.body.title,
        completed: req.body.completed
    })
    res.status(201).send(tarefas)
})

// ==========================================
// exercicio 6

app.put('/muda-status/:id', (req: Request, res: Response) => {
    // const status = req.body.completed

    // res.status(201).send(tarefas4)

})
//essa não foi
// ==========================================
// exercicio 7

app.delete('/tarefas/:tarefaId/:userId', (req: Request, res: Response) => {
    const tarefaId = Number(req.params.id)
    const userId = Number(req.params.userId)

    let newList = tarefas.filter((tare) => {
        return tare.id !== tarefaId && tare.userId !== userId
    })

    tarefas = newList
    res.status(200).send()
})

// ==========================================
// teste

app.get('/tarefas', (req: Request, res: Response) => {
    res.status(200).send(tarefas)
})

// ==========================================
// exercicio 8

app.get('/tarefas/:tarefaId/:userId', (req: Request, res: Response) => {
    const tarefaId = Number(req.params.id)
    const userId = Number(req.params.userId)

    const newList = tarefas.filter((tare) => {
        return tare.userId === userId && tare.id === tarefaId

    })

    res.status(200).send(newList)

})
//essa não foi