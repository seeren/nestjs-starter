import { Module } from '@nestjs/common';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { FooModule } from 'src/app/foo/foo.module';

@Module({
  imports: [SharedModule, CoreModule, AuthModule, FooModule],
})
export class AppModule {}
