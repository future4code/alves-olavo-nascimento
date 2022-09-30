import { UserController } from "../controller/UserController"
import { ShowController } from "../controller/ShowController"
import { UserBusisness } from "../business/UserBusiness"
import { Authenticator } from "../service/Authenticator"
import { ShowDataBase } from "../dataBase/ShowDataBase"
import { UserDataBase } from "../dataBase/UserDataBase"
import { ShowBusiness } from "../business/ShowBusiness"
import { HashManager } from "../service/HashManager"
import { GenerateId } from "../service/GenerateId"
import { Router } from "express"

export const userRouter = Router()

const userController = new UserController(
    new UserBusisness(
        new HashManager,
        new GenerateId,
        new UserDataBase,
        new Authenticator
    )
)
const showController = new ShowController(
    new ShowBusiness(
        new HashManager,
        new GenerateId,
        new UserDataBase,
        new ShowDataBase,
        new Authenticator
    )
)


userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.post("/show", showController.creatShow)
userRouter.get("/show", showController.getShows)