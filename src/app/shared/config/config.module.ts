import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { Config } from './config';

import { DatabaseModule } from './database/database.module';
import { I18nModule } from './i18n/i18n.module';

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
    I18nModule,
  ],
})
export class ConfigModule {}
