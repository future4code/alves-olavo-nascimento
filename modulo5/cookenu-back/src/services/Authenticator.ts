import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Role } from '../model/UserBase'

dotenv.config()

export interface IdTokenPayload {
    id: string,
    role: Role
}

export class Authenticator {
    generateToken = (payload: IdTokenPayload): string => {
        console.log('entrei no generateToken')
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN as string
            }
        )
        return token
    }
    
    verifyToken = (token: string): IdTokenPayload => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
        console.log('entrei no verifyToken')

        return payload as IdTokenPayload
    }
}


