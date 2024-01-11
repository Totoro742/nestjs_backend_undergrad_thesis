import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Blueprint } from '../../blueprints/entities/blueprint.entity';
import { Simulation } from '../../simulations/entities/simulation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Blueprint, (blueprint) => blueprint.user)
  blueprints: Blueprint[];

  @OneToMany(() => Simulation, (simulation) => simulation.user)
  simulations: Simulation[];
}
