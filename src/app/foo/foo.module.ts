import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from 'src/app/shared/shared.module';
import { FooController } from './foo.controller';
import { Foo } from './foo.entity';
import { FooService } from './foo.service';

@Module({
  imports: [SharedModule, ConfigModule, TypeOrmModule.forFeature([Foo])],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
