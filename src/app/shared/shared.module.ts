import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/app/shared/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [],
})
export class SharedModule {}
