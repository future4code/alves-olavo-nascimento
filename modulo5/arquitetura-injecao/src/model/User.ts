export enum Role {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: Role = Role.NORMAL
    ) { }
    public getId = () => {
        return this.id
    }
    public getName = () => {
        return this.name
    }
    public getEmail = () => {
        return this.email
    }
    public getPassword = () => {
        return this.password
    }
    public getRole = () => {
        return this.role
    }
    public toUserDb = () => {
        return this.role
    }


}

export interface ISignupImputDTO {
    name: string,
    email: string,
    password: string
}


export interface IUserDb {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface IUserOutputDbDTO {
    id: string,
    name: string,
    email: string,
    password: string
    role: Role
}
export interface ILoginInputDTO {
    email: string,
    password: string
}
export interface IdeleteUserByIdInputDTO {
    token: string,
    idForDelelte: string
}
