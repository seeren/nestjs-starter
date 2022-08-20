import { Module } from '@nestjs/common';

import { SharedModule } from 'src/app/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
