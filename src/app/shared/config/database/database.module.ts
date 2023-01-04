import type { DataSourceOptions } from 'typeorm';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import databaseConfig from 'src/config/database.config';

@Module({
  imports: [
    ConfigModule.forFeature(databaseConfig),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get<DataSourceOptions>('database'),
      inject: [ConfigService],
      extraProviders: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
