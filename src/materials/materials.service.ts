import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateMaterialDto } from './dto/create-material.dto';
import { EditMaterialDto } from './dto/edit-material.dto';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private materialsRepository: Repository<Material>,
  ) {}
  async findAll(): Promise<Material[]> {
    return this.materialsRepository.find();
  }

  async create(record: CreateMaterialDto): Promise<Material> {
    return this.materialsRepository.save(record);
  }

  async edit(record: EditMaterialDto, id: string): Promise<UpdateResult> {
    return this.materialsRepository.update(id, record);
  }
}
