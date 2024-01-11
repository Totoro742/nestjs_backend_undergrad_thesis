import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Wall } from './wall.entity';

@Entity()
export class Blueprint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('simple-json')
  canvas: {
    height: number;
    width: number;
    cellSize: number;
    canvasLen: number;
    gridDensity: number;
  };

  @OneToMany(() => Wall, (wall) => wall.blueprint, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  walls: Wall[];

  @Column()
  imageData: string;

  @ManyToOne(() => User, (user) => user.blueprints)
  user: User;
}
