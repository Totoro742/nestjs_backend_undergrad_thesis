import { Body, Controller, Post } from '@nestjs/common';
import { InternalService } from './internal.service';

@Controller('internal')
export class InternalController {
  constructor(private readonly internalService: InternalService) {}
  @Post()
  sendBlueprint(@Body() body) {
    return this.internalService.sendBlueprint(body);
  }
}
