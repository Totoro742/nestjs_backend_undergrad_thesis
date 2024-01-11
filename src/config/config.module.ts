import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import configuration from './typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
})
export class AppConfigModule {}
