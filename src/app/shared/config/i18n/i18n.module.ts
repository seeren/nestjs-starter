import { Module } from '@nestjs/common';
import {
  AcceptLanguageResolver,
  I18nModule as I18nNestModule,
  I18nYamlLoader,
  QueryResolver,
} from 'nestjs-i18n';

@Module({
  imports: [
    I18nNestModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: 'src/translations',
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
      loader: I18nYamlLoader,
    }),
  ],
})
export class I18nModule {}
