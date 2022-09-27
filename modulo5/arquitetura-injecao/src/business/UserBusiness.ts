import { UserDataBase } from "../dataBase.ts/UserDataBase"
import { IdeleteUserByIdInputDTO, ILoginInputDTO, ISignupImputDTO, Role, User } from "../model/User"
import { Authenticator, IdTokenPayload } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"
import { HashManager } from "../services/HashManager"

export default class UserBusiness {
    constructor(
        private userDataBase: UserDataBase,
        private generateId: GenerateId,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public signup = async (imput: ISignupImputDTO) => {

        const name = imput.name
        const email = imput.email
        const password = imput.password

        if (!name || !email || !password) {
            throw new Error('Todos os campos devem estar preeenchidos.')
        }

        const emailExist = await this.userDataBase.selectUserByEmail(email)

        if (emailExist) {
            throw new Error('Email já cadastrado.')
        }

        const id = this.generateId.generateId()

        const hashPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        await this.userDataBase.insertUser(user)

        const payload: IdTokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Usuário criado!",
            token
        }


        return response
    }

    public login = async (imput: ILoginInputDTO) => {

        const email = imput.email
        const password = imput.password

        if (!email || !password) {
            throw new Error('Todos os campos devem estar preeenchidos.')
        }

        const userFound = await this.userDataBase.selectUserByEmail(email)

        if (!userFound) {
            throw new Error('Usuário não cadastrado.')
        }

        const hashPassword = await this.hashManager.compare(password, userFound.password)

        if (hashPassword === false || userFound.email !== email) {
            throw new Error('Loguin ou senha incorretos.')
        }

        const payload: IdTokenPayload = {
            id: userFound.id,
            role: userFound.role
        }

        const token = this.authenticator.generateToken(payload)

        return token

    }

    public getAllUsers = async (tokenHeadres: string) => {
        if (!tokenHeadres) {
            throw new Error('Necessário informar o token.')
        }

        const payload = this.authenticator.verifyToken(tokenHeadres)

        const userFound = await this.userDataBase.selectUserById(payload.id)

        if (userFound === undefined) {
            throw new Error('Usuário não encontrado22.')
        }

        const allUsers = await this.userDataBase.selecAllUsers()

        return allUsers

    }
    public deleteUserById = async (imput: IdeleteUserByIdInputDTO) => {
        console.log('entri em deleteUserById business')

        const token = imput.token
        const idForDelelte = imput.idForDelelte

        if (!token) {
            throw new Error('Necessário informar o token no header.')
        } else
            if (!idForDelelte) {
                throw new Error('Informe o id do Usuário que deseja deletar.')
            }

        const payload = this.authenticator.verifyToken(token)

        if (payload.role !== Role.ADMIN) {
            throw new Error('Você precisa ser um ADMIN para remover um usuário.')
        }

        const userFound = await this.userDataBase.selectUserById(payload.id)

        if (userFound === undefined) {
            throw new Error('O usuário informado não existe.')
        }

        await this.userDataBase.removeUserById(idForDelelte)
    }
}