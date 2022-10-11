import { BaseError } from "./BaseError";

export class AlreadyBought extends BaseError {
    constructor() {
        super('Só e possível a compra de um ingresso por usuário', 401)
    }
}