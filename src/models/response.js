export default class Response {
    constructor(message = "", status = 200) {
        this.message = message;
        this.status = status;
    }

    send(response) {
        response.status(this.status).send(this.message);
    }
}