import { BaseError } from "./BaseError";

export class NumberOfCharactersLess extends BaseError {
    constructor() {
        super('Mínimo 3 caracteres para name e 6 para password', 401)
    }
}