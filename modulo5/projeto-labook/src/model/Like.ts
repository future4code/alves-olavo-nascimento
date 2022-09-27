export class Like {
    constructor(
        private id: string,
        private postId: string,
        private userId: string
    ) { }
    public getId = () => {
        return this.id
    }
    public getUserId = () => {
        return this.userId
    }
    public getPostId = () => {
        return this.postId
    }
}

export interface ILikePostImputDTO {
    token: string,
    idPostLiked: string
}
export interface IUnlikePostImputDTO {
    token: string,
    idPostUnliked: string
}
export interface IInsertLikeDataBaseDTO {
    id: string,
    post_id: string,
    user_id: string
}
export interface ISelectLikeDataBaseDTO {
    id: string,
    post_id: string,
    user_id: string
}
export interface IVerifyLikeInDataBaseDTO {
    idUser: string,
    idPostLiked: string
}
export interface IVerifyLikeOutDataBaseDTO {
    idUser: string,
    idPostUnlike: string
}