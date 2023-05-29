import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import BotManager from '@cool-land/bot';

@Module({
  controllers: [BotController],
  providers: [
    BotService,
    {
      provide: 'BotManager',
      useClass: BotManager,
    },
  ],
})
export class BotModule {}
