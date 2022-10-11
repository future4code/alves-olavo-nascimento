import { Role } from '../../src/model/User'
import {IdTokenPayload} from '../../src/service/Authenticator'

export class AuthenticatorMock {
    public generateToken = (payload: IdTokenPayload): string => {
        switch (payload.role) {
            case Role.ADMIN:
                return "token-mock-admin"
            default:
                return "token-mock-normal"
        }
    }

    public verifyToken = (token: string): IdTokenPayload | null => {
        switch (token) {
            case "token-mock-admin":
                const adminPayload: IdTokenPayload = {
                    id: "id-mock",
                    role: Role.ADMIN
                }

                return adminPayload

            case "token-mock-normal":
                const normalPayload: IdTokenPayload = {
                    id: "id-mock",
                    role: Role.NORMAL
                }

                return normalPayload
               
            default:
                return null
        }
    }

}
