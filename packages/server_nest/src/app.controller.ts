import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import BotFactory from '@cool-land/bot';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
