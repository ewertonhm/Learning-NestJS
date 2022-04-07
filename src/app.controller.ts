import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/hi')
    getHiRoute() {
        return 'hi there!';
    }
    
    @Get('/bye')
    getByeRoute() {
        return ' bye there!';
    }
}