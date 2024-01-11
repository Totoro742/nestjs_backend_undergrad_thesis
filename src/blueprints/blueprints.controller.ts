import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { BlueprintsService } from './blueprints.service';
import { CreateBlueprintDto } from './dto/create-blueprint.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('blueprints')
export class BlueprintsController {
  constructor(private readonly blueprintsService: BlueprintsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createBlueprintDto: CreateBlueprintDto, @Request() req) {
    return this.blueprintsService.create(createBlueprintDto, req.user);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.blueprintsService.findAll(req.user);
  }

  @UseGuards(AuthGuard)
  @Get(':name')
  findOne(@Param('name') name: string, @Request() req) {
    console.log(name)
    return this.blueprintsService.findOne(decodeURI(name), req.user);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blueprintsService.remove(id);
  }
}
