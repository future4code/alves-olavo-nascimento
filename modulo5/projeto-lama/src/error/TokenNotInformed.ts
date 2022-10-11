import { BaseError } from "./BaseError"

export class TokenNotInformed extends BaseError {
    constructor() {
        super('Token não informado', 401)
    }
}