export enum Role {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private emai: string,
        private password: string,
        private role: Role = Role.NORMAL
    ) { }

    public getId = () => {
        return this.id
    }
    public getName = () => {
        return this.name
    }
    public getEMail = () => {
        return this.emai
    }
    public getPassword = () => {
        return this.password
    }
    public getRole = () => {
        return this.role
    }

}

export interface IUserSignupInputDTO {
    name: string,
    email: string,
    password: string
}
export interface IUserLoginInputDTO {
    email: string,
    password: string
}
export interface IUserPostInputDTO {
    token: string,
    content: string
}
export interface IUserSignupOuputDTO {
    message: string
    token: string
}
export interface IUserOuputDataBaseDTO {
    id: string
    name: string
    email: string
    password: string
    role: Role
}
export interface IUserImputDataBaseDTO {
    id: string
    name: string
    email: string
    password: string
    role: Role
}
