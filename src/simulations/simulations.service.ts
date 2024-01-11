import { Injectable } from '@nestjs/common';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Simulation } from './entities/simulation.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class SimulationsService {
  constructor(
    @InjectRepository(Simulation)
    private simulationsRepository: Repository<Simulation>,
  ) {}

  async create(createSimulationDto: CreateSimulationDto, user: User) {
    createSimulationDto.user = user;
    console.log(createSimulationDto);
    const simulation = this.simulationsRepository.create(createSimulationDto);
    return await this.simulationsRepository.save(simulation);
  }

  findAll(userId: string) {
    return this.simulationsRepository
      .createQueryBuilder('simulation')
      .where('simulation.userId = :userId', { userId: userId })
      .getMany();
  }

  async remove(id: string) {
    return this.simulationsRepository.delete({ id: id });
  }
}
