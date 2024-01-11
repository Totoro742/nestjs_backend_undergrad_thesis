import { Module } from '@nestjs/common';
import { BlueprintsService } from './blueprints.service';
import { BlueprintsController } from './blueprints.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blueprint } from './entities/blueprint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blueprint])],
  controllers: [BlueprintsController],
  providers: [BlueprintsService],
})
export class BlueprintsModule {}
