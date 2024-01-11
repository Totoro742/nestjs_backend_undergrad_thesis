import * as process from 'process';
import { Material } from '../materials/entities/material.entity';
import { config as envConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { Blueprint } from '../blueprints/entities/blueprint.entity';
import { Wall } from '../blueprints/entities/wall.entity';
import { Simulation } from '../simulations/entities/simulation.entity';

envConfig({ path: '.env' });

const config = {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: [Material, User, Blueprint, Wall, Simulation],
  logging: true
};

export default registerAs('typeorm', () => config);