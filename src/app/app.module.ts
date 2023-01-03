import { Module } from '@nestjs/common';

import { CoreModule } from 'src/app/core/core.module';
import { AppController } from 'src/app/app.controller';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { FooModule } from 'src/app/foo/foo.module';

@Module({
  imports: [SharedModule, CoreModule, AuthModule, FooModule],
  controllers: [AppController],
})
export class AppModule {}
