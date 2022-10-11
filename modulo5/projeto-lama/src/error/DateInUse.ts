import { BaseError } from "./BaseError"

export class DateInUse extends BaseError {
    constructor() {
        super('Já existe show agendado nessa data, tente outra.', 409)
    }
}