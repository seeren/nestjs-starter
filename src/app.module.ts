import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { ConfigModule } from './config/config.module';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoreModule, ConfigModule, SharedModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
