import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../services/messages.service';

@Controller('/messages')
export class MessagesController {
  messagesService: MessagesService
  
  constructor(){
    // Controller is creating its own dependencies
    // FIX IT ASAP!!!!
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found!');
    }

    return message;

  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
