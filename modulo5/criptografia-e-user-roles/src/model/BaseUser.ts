export enum User_Roles {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class BaseUser {
    constructor(
        private id: string,
        private email: string,
        private password: string,
        private role: User_Roles = User_Roles.NORMAL
    ) { }

    public getId = () => {
        return this.id
    }
    public getEmail = () => {
        return this.email
    }
    public getPassword = () => {
        return this.password
    }
    public getUser_Roles = () => {
        return this.role
    }
}