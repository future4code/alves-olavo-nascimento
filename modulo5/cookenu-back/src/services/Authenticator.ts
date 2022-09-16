import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export interface IdTokenPayload {
    id: string
}

export class Authenticator {
    generateToken = (idUser: IdTokenPayload): string => {
        console.log('entrei no generateToken')
        const token = jwt.sign(
            idUser,
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


