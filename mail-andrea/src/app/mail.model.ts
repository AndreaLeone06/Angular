export class Email {
    destinatario: string;
    object: string;
    body: string;
    constructor(destinatario: string, object: string, body: string) {
        this.destinatario = destinatario;
        this.object = object;
        this.body = body;
    }
}