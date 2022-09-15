import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export interface IdTokenPayload {
    id: string
}

export class Authenticator {
    generateToken = (normalPassword: IdTokenPayload): string => {
        const token = jwt.sign(
            {
                normalPassword
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN as string
            }
        )
        return token
    }

    verifyToken = (token: string): IdTokenPayload => {
        const payload: IdTokenPayload = jwt.verify(token, process.env.JWT_KEY as string) as any

        return payload
    }
}

