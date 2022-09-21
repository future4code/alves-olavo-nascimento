import express from 'express'
import UserBusiness from '../business/UserBusiness'
import UserController from '../controller/UserController'
import { UserDataBase } from '../dataBase.ts/UserDataBase'
import { Authenticator } from '../services/Authenticator'
import { GenerateId } from '../services/GenerateId'
import { HashManager } from '../services/HashManager'

export const userRouter = express.Router()



const userController = new UserController(
    new UserBusiness(
        new UserDataBase,
        new GenerateId,
        new HashManager,
        new Authenticator
    )
)


userRouter.get("/all", userController.getAllUsers)

userRouter.post("/signup", userController.signup)

userRouter.post("/login", userController.login)

userRouter.delete("/remove", userController.deleteUserById)


