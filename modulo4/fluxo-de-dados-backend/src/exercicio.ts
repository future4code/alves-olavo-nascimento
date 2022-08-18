import express, { Request, Response } from 'express'
import cors from 'cors'
// Exercício 2
import { Produto, produtos } from './data'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("App rodando...")
})

// Exercício 1
app.get("/test", (req: Request, res: Response) => {

    res.status(200).send("Criei meu primeiro endpoint")
})

// Exercício 3
// Exercício 7
app.post("/produtos", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name) {
            res.statusCode = 401
            throw new Error("o campo name deve conter uma ou mais palavras e não números.")
        } else if (!price) {
            res.statusCode = 401
            throw new Error("Não e possível fazer envio de campos vazios2.")
        } else if (price <= 0) {
            res.statusCode = 401
            throw new Error("O valor do produto tem que ser superior a 0.")
        }

        produtos.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })
        res.status(200).send(produtos)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercício 4
app.get("/produtos", (req: Request, res: Response) => {
    res.status(200).send(produtos)
})

// Exercício 5
// Exercício 8
app.put("/produtos/:id", (req: Request, res: Response) => {
    try {
        const ProdutoId = req.params.id
        const { price } = req.body

        if (!price) {
            res.statusCode = 401
            throw new Error("Não e possível fazer o envio com o campo vazio")
        } else if (price <= 0) {
            res.statusCode = 401
            throw new Error("O valor do produto tem que ser superior a 0")
        }

        const produtoFiltrado = produtos.find((prod) => {
            return prod.id === ProdutoId
        })
        if (!produtoFiltrado) {
            res.statusCode = 404
            throw new Error('Produto não encontrado')
        }

        produtoFiltrado.price = price

        res.status(200).send(produtoFiltrado)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercício 6
app.delete("/produtos/:id", (req: Request, res: Response) => {
    try {
        const ProdutoId = req.params.id
        if (!ProdutoId) {
            res.statusCode = 401
            throw new Error("Não e possível fazer envio de campos vazios.")
        }

        const produtoFiltrado = produtos.findIndex((prod) => prod.id === ProdutoId)

        if (!produtoFiltrado) {
            res.statusCode = 404
            throw new Error('Produto não encontrado')
        }
        produtos.splice(produtoFiltrado, 1)
        res.status(200).send(produtos)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})



