import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import configuration from 'src/config/configuration';
import { DatabaseModule } from 'src/app/shared/config/database/database.module';
import { I18nModule } from 'src/app/shared/config/i18n/i18n.module';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: [
        `.env`,
        `.env.local`,
        `.env.${
          process.env.NODE_ENV === 'production'
            ? process.env.NODE_ENV
            : 'developement'
        }.local`,
      ],
      load: [configuration],
      isGlobal: false,
    }),
    DatabaseModule,
    I18nModule,
  ],
})
export class ConfigModule {}
