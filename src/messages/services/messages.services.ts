import { MessagesRepository } from "../repositories/messages.repository";

export class MessagesServices {
    messagesRepo: MessagesRepository

    constructor() {
        // Service is creating its own dependencies
        // FIX IT ASAP!!!!
        this.messagesRepo = new MessagesRepository();
    }

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }
    async findAll() {
        return this.messagesRepo.findAll();
    }
    async create(content: string) {
        return this.messagesRepo.create(content);
    }
}