import { User } from '../../users/entities/user.entity';

export class CreateSimulationDto {
  imageData: string;
  user: User;
  name: string;
}

