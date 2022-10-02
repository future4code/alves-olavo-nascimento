export class Ticket {
    constructor(
        private id: string,
        private showId: string,
        private userId: string
    ) { }

    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    public getShowId(): string {
        return this.showId;
    }
    public setShowId(value: string) {
        this.showId = value;
    }
    public getUserId(): string {
        return this.userId;
    }
    public setUserId(value: string) {
        this.userId = value;
    }
}

export interface ITicketInputDTO {
    token: string,
    idShow: string
}

export interface IInputDataBaseDTO {
    id: string,
    show_id: string,
    user_id: string
}

export interface IOutputTicketDTO {
    message: string
}

export interface IIdsTicketDTO {
    idShow: string,
    idUser: string
}