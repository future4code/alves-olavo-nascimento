import { BaseError } from "./BaseError"

export class ThereAreNoReservations extends BaseError {
    constructor() {
        super('Você ainda não fez reserva nesse show.', 404)
    }
}