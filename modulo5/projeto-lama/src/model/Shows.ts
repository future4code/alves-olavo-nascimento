export class Shows {
    constructor(
        private id: string,
        private band: string,
        private startsAt: string,
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
    public getStartsAt(): string {
        return this.startsAt;
    }
    public setStartsAt(value: string) {
        this.startsAt = value;
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