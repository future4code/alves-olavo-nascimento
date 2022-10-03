import { BaseError } from "./BaseError";

export class ShowNotFound extends BaseError {
    constructor() {
        super('Show não encontrado.', 404)
    }
}