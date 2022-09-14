import * as jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { User_Roles } from '../model/BaseUser'

dotenv.config()

export interface ITokenPaLoad {
    id: string,
    role: User_Roles
}

export class Authenticator {

    generateToken = (payload: ITokenPaLoad): string => {

        const token = jwt.sign(
            {
                payload
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXP as string
            }
        )

        return token
    }

    verifyToken = (token: string) => {

        const payload: ITokenPaLoad = jwt.verify(token, process.env.JWT_KEY as string) as any

        return payload
    }
}