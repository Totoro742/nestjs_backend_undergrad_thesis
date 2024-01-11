import { PartialType } from '@nestjs/mapped-types';
import { CreateBlueprintDto } from './create-blueprint.dto';

export class UpdateBlueprintDto extends PartialType(CreateBlueprintDto) {}
