import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export interface IdTOkenPayload {
    id: string
}

export class Authenticator {
    generateToken = (normalPassword: IdTOkenPayload): string => {
        const token = jwt.sign(
            {
                normalPassword
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXP as string
            }
        )
        return token
    }

    verifyToken = (token: string) => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string)

        return payload as IdTOkenPayload
    }
}

