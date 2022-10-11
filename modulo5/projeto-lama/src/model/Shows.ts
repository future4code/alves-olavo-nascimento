export class Shows {
    constructor(
        private id: string,
        private band: string,
        private startsAt: Date,
        private ticket: number = 5000
    ) { }

    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    public getBand(): string {
        return this.band;
    }
    public setBand(value: string) {
        this.band = value;
    }
    public getStartsAt(): Date {
        return this.startsAt;
    }
    public setStartsAt(value: Date) {
        this.startsAt = value;
    }
    public getTicket(): number {
        return this.ticket;
    }
    public setTicket(value: number) {
        this.ticket = value;
    }
}

export interface ICreatShowInputDTO {
    token: string,
    band: string,
    startsAt: string
}

export interface ICreatShowOutputDTO {
    message: string
}

export interface IGetShowsinputDTO {
    token: string
}

export interface IShowsInputDataBaseDTO {
    id: string,
    band: string,
    starts_at: Date
}

export interface IShowsOutputDataBaseDTO {
    id: string,
    band: string,
    starts_at: Date
}