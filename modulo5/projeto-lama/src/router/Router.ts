import { UserController } from "../controller/UserController"
import { ShowController } from "../controller/ShowController"
import { UserBusiness } from "../business/UserBusiness"
import { Authenticator } from "../service/Authenticator"
import { ShowDataBase } from "../dataBase/ShowDataBase"
import { UserDataBase } from "../dataBase/UserDataBase"
import { ShowBusiness } from "../business/ShowBusiness"
import { HashManager } from "../service/HashManager"
import { GenerateId } from "../service/GenerateId"
import { Router } from "express"
import { TicketController } from "../controller/TicketController"
import { TicketBusiness } from "../business/TicketBusiness"
import { TicketDataBase } from "../dataBase/TicketDataBase"

export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new HashManager,
        new GenerateId,
        new UserDataBase,
        new Authenticator
    )
)

const showController = new ShowController(
    new ShowBusiness(
        new GenerateId,
        new UserDataBase,
        new ShowDataBase,
        new Authenticator,
        new TicketDataBase
    )
)

const ticketController = new TicketController(
    new TicketBusiness(
        new TicketDataBase,
        new Authenticator,
        new ShowDataBase,
        new UserDataBase,
        new GenerateId
    )
)

userRouter.get("/show", showController.getShows)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.post("/show", showController.creatShow)
userRouter.post("/ticket/id/:id", ticketController.ticket)

userRouter.delete("/ticket/id/:id", ticketController.deleteTicket)