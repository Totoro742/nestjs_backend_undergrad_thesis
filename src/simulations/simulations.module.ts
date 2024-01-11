import { Module } from '@nestjs/common';
import { SimulationsService } from './simulations.service';
import { SimulationsController } from './simulations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Simulation } from './entities/simulation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Simulation])],

  controllers: [SimulationsController],
  providers: [SimulationsService],
})
export class SimulationsModule {}
