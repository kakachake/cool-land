import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  ParseIntPipe,
  Header,
} from '@nestjs/common';
import { BotService } from './bot.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import BotFactory from '@cool-land/bot';
import * as QRCode from 'qrcode';

@Controller('bot')
export class BotController {
  @Inject('BotManager')
  private readonly botManager: BotFactory;

  constructor(private readonly botService: BotService) {}

  @Post('create')
  async createBot() {
    return this.botManager.createBot().then((pid) => {
      console.log(pid);
      return `pid: ${pid} created`;
    });
  }

  @Post('start/:pid')
  startBot(@Param('pid', ParseIntPipe) pid: number) {
    this.botManager.startBot(pid);
  }

  @Get('all')
  getAllBot() {
    return this.botManager.botPool;
  }

  @Get('get/:pid')
  getBot(@Param('pid', ParseIntPipe) pid: number) {
    return this.botManager.getBot(pid);
  }

  @Get('getQrcode/:pid')
  @Header('Content-Type', 'image/png')
  getQrcode(@Param('pid', ParseIntPipe) pid: number) {
    const qrCode = this.botManager.getBot(pid)?.qrCode;
    if (!qrCode) {
      return null;
    }
    return QRCode.toDataURL(qrCode);
  }

  @Post()
  create(@Body() createBotDto: CreateBotDto) {
    return this.botService.create(createBotDto);
  }

  @Get()
  findAll() {
    return this.botService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBotDto: UpdateBotDto) {
    return this.botService.update(+id, updateBotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botService.remove(+id);
  }
}
