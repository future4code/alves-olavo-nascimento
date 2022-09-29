import { Router } from "express"
import { UserBusisness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserBaseDataBase } from "../dataBase/UserBaseDataBase"
import { Authenticator } from "../service/Authenticator"
import { GenerateId } from "../service/GenerateId"
import { HashManager } from "../service/HashManager"

export const userRouter = Router()

const userController = new UserController(
    new UserBusisness(
        new HashManager,
        new GenerateId,
        new UserBaseDataBase,
        new Authenticator
    )
)


userRouter.post("/signup", userController.signup)