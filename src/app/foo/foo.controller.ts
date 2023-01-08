import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { ApiTags } from '@nestjs/swagger';

import { Foo } from 'src/app/foo/foo.entity';
import { FooService } from 'src/app/foo/foo.service';
import { FooDto } from 'src/app/foo/foo.dto';

@ApiTags('foo')
@Controller('foos')
export class FooController {
  constructor(
    private readonly fooService: FooService,
    private readonly i18n: I18nService,
  ) {}

  @Get()
  async findAll(): Promise<Foo[]> {
    return this.fooService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Foo | null> {
    const foo: Foo | null = await this.fooService.findOne(id);

    if (!foo) {
      throw new NotFoundException(await this.i18n.t('app.Foo not found'));
    }

    return foo;
  }

  @Post()
  async insert(@Body() fooDto: FooDto): Promise<Foo> {
    return this.fooService.insert(fooDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<void> {
    await this.fooService.delete(id);
  }
}
