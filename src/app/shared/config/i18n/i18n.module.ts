import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  AcceptLanguageResolver,
  I18nModule as I18nNestModule,
  I18nYamlLoader,
  QueryResolver,
} from 'nestjs-i18n';

import i18nConfig from 'src/config/i18n.config';

@Module({
  imports: [
    ConfigModule,
    I18nNestModule.forRootAsync({
      imports: [ConfigModule.forFeature(i18nConfig)],
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage:
          configService.get<Record<string, string>>('i18n').fallback,
        loaderOptions: {
          path: 'src/translations',
          watch: true,
        },
      }),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
      loader: I18nYamlLoader,
      inject: [ConfigService],
    }),
  ],
})
export class I18nModule {}
