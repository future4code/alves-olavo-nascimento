import { Request, Response } from "express"
import { UserBusisness } from "../business/UserBusiness"
import { ISignupInputDTO } from "../model/User"

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
            res.status(error.status || 500).send({ message: error.message })
        }
    }
}