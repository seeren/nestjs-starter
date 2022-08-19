import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SharedModule, CoreModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
