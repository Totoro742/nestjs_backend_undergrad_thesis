import { User } from '../../users/entities/user.entity';
import { Wall } from '../entities/wall.entity';

export class CreateBlueprintDto {
  canvas: {
    height: number;
    width: number;
    cellSize: number;
    canvasLen: number;
    gridDensity: number;
  };
  walls: Wall[];
  imageData: string;
  user: User;
}
