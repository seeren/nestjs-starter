import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { Config } from './config';

import { DatabaseModule } from './database/database.module';
import { I18nModule } from './i18n/i18n.module';

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'developement';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: [`.env`, `.env.local`, `.env.${NODE_ENV}.local`],
      load: [Config],
      isGlobal: false,
    }),
    DatabaseModule,
    I18nModule,
  ],
})
export class ConfigModule {}
