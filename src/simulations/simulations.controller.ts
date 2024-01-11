import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { SimulationsService } from './simulations.service';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('simulations')
export class SimulationsController {
  constructor(private readonly simulationsService: SimulationsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSimulationDto: CreateSimulationDto, @Request() req) {
    return this.simulationsService.create(createSimulationDto, req.user);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req) {
    console.log(req.user)
    return this.simulationsService.findAll(req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSimulationDto: UpdateSimulationDto) {
    return this.simulationsService.update(+id, updateSimulationDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {


    return this.simulationsService.remove(id);
  }
}
