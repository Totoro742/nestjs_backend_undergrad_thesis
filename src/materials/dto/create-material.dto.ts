import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  factor: number;

  @IsUUID()
  userId: number;
}
