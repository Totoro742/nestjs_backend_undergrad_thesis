import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from './config/config.module';
import { MaterialsModule } from './materials/materials.module';
import { InternalModule } from './internal/internal.module';
import { AuthModule } from './auth/auth.module';
import { BlueprintsModule } from './blueprints/blueprints.module';
import { SimulationsModule } from './simulations/simulations.module';

@Module({
  imports: [
    AuthModule,
    InternalModule,
    MaterialsModule,
    AppConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('typeorm'),
      inject: [ConfigService],
    }),
    BlueprintsModule,
    SimulationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
