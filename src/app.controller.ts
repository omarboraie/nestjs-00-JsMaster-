import { Body, Controller, Get , Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  getUser(): string{
    return this.appService.getUser();
  }

  @Post('/welcome')
  welcome(@Body("name") name: string): string{
    return this.appService.welcome(name);
  }
}
