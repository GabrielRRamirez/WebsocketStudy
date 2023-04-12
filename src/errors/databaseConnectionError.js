import {ErroBase} from "./erroBase.js";

export class DatabaseConnectionError extends ErroBase {
    constructor(message = "") {
        super(`Error on database connection stage:\n ${message}`);
    }
}