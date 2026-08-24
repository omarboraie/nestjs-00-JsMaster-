import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(): string{
    return "Helllo ";
  }

  welcome(name: string): string{
    return `Welcome to ${name}!`;
  }
}
