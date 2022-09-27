import { UserDataBase } from "../dataBase.ts/UserDataBase"
import { IdeleteUserByIdInputDTO, ILoginInputDTO, ISignupImputDTO, Role, User } from "../model/User"
import { Authenticator, IdTokenPayload } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"
import { HashManager } from "../services/HashManager"

export default class UserBusiness {
    public signup = async (imput: ISignupImputDTO) => {

        const name = imput.name
        const email = imput.email
        const password = imput.password

        if (!name || !email || !password) {
            throw new Error('Todos os campos devem estar preeenchidos.')
        }

        const userDataBase = new UserDataBase()

        const emailExist = await userDataBase.selectUserByEmail(email)

        if (emailExist) {
            throw new Error('Email já cadastrado.')
        }

        const generateId = new GenerateId()
        const id = generateId.generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        await userDataBase.insertUser(user)

        const payload: IdTokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

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

        const userDataBase = new UserDataBase()
        const userFound = await userDataBase.selectUserByEmail(email)

        if (!userFound) {
            throw new Error('Usuário não cadastrado.')
        }

        const hashManager = new HashManager()
        const hashPassword = await hashManager.compare(password, userFound.password)

        if (hashPassword === false || userFound.email !== email) {
            throw new Error('Loguin ou senha incorretos.')
        }

        const payload: IdTokenPayload = {
            id: userFound.id,
            role: userFound.role
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        return token

    }

    public getAllUsers = async (tokenHeadres: string) => {
        if (!tokenHeadres) {
            throw new Error('Necessário informar o token.')
        }

        const authenticator = new Authenticator()
        const payload = authenticator.verifyToken(tokenHeadres)

        const userDataBase = new UserDataBase()
        const userFound = await userDataBase.selectUserById(payload.id)

        if (userFound === undefined) {
            throw new Error('Usuário não encontrado22.')
        }

        const allUsers = await userDataBase.selecAllUsers()

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

        const authenticator = new Authenticator()
        const payload = authenticator.verifyToken(token)

        if (payload.role !== Role.ADMIN) {
            throw new Error('Você precisa ser um ADMIN para remover um usuário.')
        }

        const userDataBase = new UserDataBase()
        const userFound = await userDataBase.selectUserById(payload.id)

        if (userFound === undefined) {
            throw new Error('O usuário informado não existe.')
        }

        await userDataBase.removeUserById(idForDelelte)
    }
}