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
import { ApiTags, ApiNotFoundResponse } from '@nestjs/swagger';

import { Foo } from 'src/app/foo/foo.entity';
import { FooService } from 'src/app/foo/foo.service';
import { CreateFooDto } from 'src/app/foo/create-foo.dto';
import { NotFoundHttpException } from 'src/app/core/exceptions/http/not-found-http.exception';

@ApiTags('Foo')
@Controller('foos')
export class FooController {
  constructor(
    private readonly fooService: FooService,
    private readonly i18n: I18nService,
  ) {}

  /**
   * Retrieve all Foo
   */
  @Get()
  async findAll(): Promise<Foo[]> {
    return this.fooService.findAll();
  }

  /**
   * Create a Foo
   */
  @Post()
  async insert(@Body() fooDto: CreateFooDto): Promise<Foo> {
    return this.fooService.insert(fooDto);
  }

  /**
   * Retrieve Foo by identifier
   */
  @Get(':id')
  @ApiNotFoundResponse({ type: NotFoundHttpException })
  async findOne(@Param('id') id: number): Promise<Foo | null> {
    const foo: Foo | null = await this.fooService.findOne(id);

    if (!foo) {
      throw new NotFoundException(await this.i18n.t('app.Foo not found'));
    }

    return foo;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<void> {
    await this.fooService.delete(id);
  }
}
