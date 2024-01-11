import { Injectable, UseGuards } from '@nestjs/common';
import { CreateBlueprintDto } from './dto/create-blueprint.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blueprint } from './entities/blueprint.entity';
import { Repository } from 'typeorm';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../users/entities/user.entity';

@Injectable()
export class BlueprintsService {
  constructor(
    @InjectRepository(Blueprint)
    private readonly blueprintsRepository: Repository<Blueprint>,
  ) {}

  create(createBlueprintDto: CreateBlueprintDto, user: User) {
    createBlueprintDto.user = user;
    return this.blueprintsRepository.save(createBlueprintDto);
  }

  findAll(user: any) {
    return this.blueprintsRepository
      .createQueryBuilder('blueprint')
      .leftJoinAndSelect('blueprint.walls', 'walls')
      .leftJoinAndSelect('walls.material', 'material')
      .where('blueprint.userId = :uid', { uid: user.id })
      .getMany();
  }

  @UseGuards(AuthGuard)
  findOne(name: string, user: any) {
    return this.blueprintsRepository
      .createQueryBuilder('blueprint')
      .where('blueprint.name = :name', { name: name })
      .where('blueprint.userId = :uid', { uid: user.id })
      .getOne();
  }

  @UseGuards(AuthGuard)
  remove(id: string) {
    return this.blueprintsRepository.delete(id);
  }
}
