import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wall } from '../../blueprints/entities/wall.entity';

@Entity()
export class Material {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  type: number;

  @OneToMany(() => Wall, (wall) => wall.material)
  walls: Wall[];
}
