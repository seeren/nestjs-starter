import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import type { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get<DataSourceOptions>('database'),
      inject: [ConfigService],
      extraProviders: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
