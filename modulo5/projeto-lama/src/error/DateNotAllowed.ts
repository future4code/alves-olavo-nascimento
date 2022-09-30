import { BaseError } from "./BaseError";

export class DateNotAllowed extends BaseError {
    constructor() {
        super('Somente datas apartir de 05-12-2022', 401)
    }
}