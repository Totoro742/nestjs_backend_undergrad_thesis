import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { EditMaterialDto } from './dto/edit-material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialService: MaterialsService) {}

  @Get()
  findAll() {
    return this.materialService.findAll();
  }

  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialService.create(createMaterialDto);
  }

  @Put('/:id')
  edit(@Body() editMaterialDto: EditMaterialDto, @Param('uuid') uuid: string) {
    return this.materialService.edit(editMaterialDto, uuid);
  }
}
