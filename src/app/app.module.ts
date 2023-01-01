import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [SharedModule, CoreModule, AuthModule, FooModule],
  controllers: [AppController],
})
export class AppModule {}
