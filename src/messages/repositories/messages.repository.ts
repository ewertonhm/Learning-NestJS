import { readFile, writeFile } from 'fs/promises'

export class MessagesRepository{
    private async readFile() {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async findOne(id: string) {
        const messages = this.readFile();
        return messages[id];
    }
    async findAll() {
        return this.readFile();
    }
    async create(content: string) {
        const messages = this.readFile();
        const id = Math.floor(Math.random() * Math.random() * 999);
        messages[id] =  { id, content };

        await writeFile('messages.json', JSON.stringify(messages));
    }
}