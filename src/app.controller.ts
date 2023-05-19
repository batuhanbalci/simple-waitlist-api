import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  joinWaitlist(@Body() dto: UserDto) {
    return this.appService.joinWaitlist(dto);
  }
}
