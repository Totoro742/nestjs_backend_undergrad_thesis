import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Material } from '../../materials/entities/material.entity';
import { Blueprint } from './blueprint.entity';

@Entity()
export class Wall {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  x: number;

  @Column()
  y: number;

  @Column()
  y2: number;

  @Column()
  x2: number;

  @ManyToOne(() => Material, (material) => material.walls)
  material: Material;

  @ManyToOne(() => Blueprint, (blueprint) => blueprint.walls, {
    onDelete: 'CASCADE'
  })
  blueprint: Blueprint;
}
