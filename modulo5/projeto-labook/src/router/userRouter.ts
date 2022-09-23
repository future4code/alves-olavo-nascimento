import { Router } from "express";
import { UserBaseDataBase } from "../baseData/UserBaseDataBase";
import { UseBusiness } from "../business/UseBusiness";
import { Usercontroller } from "../controller/UserController";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export const userRouter = Router()

const userController = new Usercontroller(
    new UseBusiness(
        new GenerateId,
        new UserBaseDataBase,
        new HashManager,
        new Authenticator
    )
)

userRouter.get('/post', userController.allPosts)
userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.post('/post', userController.post)
