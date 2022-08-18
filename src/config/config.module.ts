import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { Config } from './config';

import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: [
        `${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}.env`,
      ],
      load: [Config],
      isGlobal: false,
    }),
    DatabaseModule,
  ],
})
export class ConfigModule {}
