import { Console } from 'console'
import * as jwt from 'jsonwebtoken'
import generateId from './generateId'
import dotenv from "dotenv"

dotenv.config()

const expiresIn = '1min'


export const generateToken = (id: string): string => {
    const token = jwt.sign(
        {
            id: id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
    return token
}
