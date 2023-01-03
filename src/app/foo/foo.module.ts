import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule } from 'src/app/shared/shared.module';
import { FooController } from 'src/app/foo/foo.controller';
import { Foo } from 'src/app/foo/foo.entity';
import { FooService } from 'src/app/foo/foo.service';

@Module({
  imports: [SharedModule, ConfigModule, TypeOrmModule.forFeature([Foo])],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
