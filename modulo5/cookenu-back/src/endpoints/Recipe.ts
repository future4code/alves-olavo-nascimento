import { Request, Response } from "express";
import { RecipeData } from "../data/RecipeData";
import { UserData } from "../data/UserData"
import { RecipesBase } from "../model/RecipesBase"
import { Authenticator } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"

export class Recipe {
    createRecipe = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { title, description } = req.body

            if (!title || !description) {
                res.statusCode = 401
                throw new Error('Verifique todoso os campos antes do envio.')
            }

            const authorization = new Authenticator()
            const normalPassword = authorization.verifyToken(token)
            const userId = normalPassword.id
            console.log(normalPassword)

            const userData = new UserData()
            const userSearched = await userData.selectUserById(userId)

            if (!userSearched) {
                res.statusCode = 500
                throw new Error('Erro no servidor.')
            }

            const Iduser = userSearched[0].id

            const generateId = new GenerateId()
            const IdRecipe = generateId.generate()

            const date = new Date()
            const dateNow = date.toLocaleDateString()

            const timeNow = new Date().toLocaleTimeString()

            const new_date = dateNow.split("/")
            const deadlineInReverse = new_date.reverse()
            const deadlineForAmerican = deadlineInReverse.join("-")

            const newRecipe = new RecipesBase(IdRecipe, title, description, deadlineForAmerican, timeNow, Iduser)

            const recipeData = new RecipeData()
            await recipeData.insertRecipe(newRecipe)

            res.status(201).send("Receita criada com sucesso!")

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }

    getRecipeByid = async (req: Request, res: Response) => {
        try {
            const idRecipe = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error('Token deve ser passado nos headers.')
            }
            if (!idRecipe) {
                res.statusCode = 401
                throw new Error('O id a ser buscado deve ser informado por params.')
            }

            console.log(idRecipe)
            const recipeData = new RecipeData()
            const recipeDataBase = await recipeData.selectRecipeById(idRecipe)

            res.status(200).send(recipeDataBase)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ error: error.message })
        }
    }
}