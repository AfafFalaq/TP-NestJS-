import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get(':name')
  getHelloByName(@Param('name') name: string): string {
    if (!name) {
      throw new BadRequestException('Name is required');
    }
    return this.helloService.getHelloByName(name);
  }
}
