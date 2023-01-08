import { Module } from '@nestjs/common';

import { ConfigurationsModule } from 'src/app/shared/configurations/configurations.module';
import { DatabasesModule } from './databases/databases.module';
import { TranslationsModule } from './translations/translations.module';

@Module({
  imports: [ConfigurationsModule, DatabasesModule, TranslationsModule],
})
export class SharedModule {}
