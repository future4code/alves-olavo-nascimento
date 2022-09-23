export class Post {
    constructor(
        private id: string,
        private constent: string,
        private idUser: string
    ) { }

    public getId = () => {
        return this.id
    }
    public getContent = () => {
        return this.constent
    }
    public getIdUser = () => {
        return this.idUser
    }
}

export interface IPostImputDataBaseDTO {
    id: string,
    content: string,
    user_id: string
}
export interface IPostOutputDataBaseDTO {
    id: string,
    content: string,
    user_id: string
}