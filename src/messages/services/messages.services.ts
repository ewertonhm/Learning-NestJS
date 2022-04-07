import { MessagesRepository } from "../repositories/messages.repository";

export class MessagesServices {
    messagesRepo: MessagesRepository

    constructor() {
        // Service is creating its own dependencies
        // DONT DO THIS ON REAL APPS!!!!
        this.messagesRepo = new MessagesRepository();
    }
}