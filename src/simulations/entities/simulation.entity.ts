import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Simulation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  imageData: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.simulations)
  user: User;
}
