export class ErroBase extends Error {
    constructor(message = "server internal error has occurred", status = 500) {
        super(message);
        
        this.message = message;
        this.status = status;
    }

    send(response) {
        response.status(this.status).send(this.message);
    }
}