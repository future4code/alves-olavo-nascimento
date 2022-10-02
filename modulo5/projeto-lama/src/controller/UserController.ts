import { ILoginInputDTO, ISignupInputDTO } from "../model/User"
import { UserBusisness } from "../business/UserBusiness"
import { Request, Response } from "express"

export class UserController {
    constructor(
        private userBusiness: UserBusisness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

}