import { UserBaseDataBase } from "../dataBase/UserBaseDataBase";
import { EmailAlreadyExists } from "../error/EmailAlreadyExists";
import { InvalidEmailFormat } from "../error/InvalidEmailFormat";
import { MissingInformation } from "../error/MissingInformation";
import { NumberOfCharactersLess } from "../error/NumberOfCharactersLess";
import { RequiredStringType } from "../error/RequiredStringType";
import { ISignupInputDTO, ISignupOutputDTO, Role, User } from "../model/User";
import { Authenticator, IdTokenPayload } from "../service/Authenticator";
import { GenerateId } from "../service/GenerateId";
import { HashManager } from "../service/HashManager"

export class UserBusisness {
    constructor(
        private hashManager: HashManager,
        private generateId: GenerateId,
        private userBaseDataBase: UserBaseDataBase,
        private authenticator: Authenticator
    ) { }

    public signup = async (input: ISignupInputDTO) => {

        const { name, email, password } = input

        if (!name || !email || !password) {
            throw new MissingInformation()
        }
        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            throw new RequiredStringType()
        }
        if (name.length < 3 || password.length < 6) {
            throw new NumberOfCharactersLess()
        }
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new InvalidEmailFormat()
        }

        const emailExist = await this.userBaseDataBase.selectByEmail(email)

        if (emailExist) {
            throw new EmailAlreadyExists()
        }

        const passwordHash = await this.hashManager.hash(password)

        const idUser = this.generateId.generateId()

        const newUser = new User(idUser, name, email, passwordHash, Role.NORMAL)

        await this.userBaseDataBase.insertUser(newUser)

        const payload: IdTokenPayload = {
            id: newUser.getId(),
            role: newUser.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: ISignupOutputDTO = {
            token,
            message: `Parabéns ${newUser.getName()}, você criou sua conta.`
        }

        return response
    }
}