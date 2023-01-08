import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env',
        '.env.local',
        `.env.${
          process.env.NODE_ENV === 'production'
            ? process.env.NODE_ENV
            : 'developement'
        }.local`,
      ],
      load: [configuration],
      isGlobal: false,
    }),
  ],
})
export class ConfigurationsModule {}
