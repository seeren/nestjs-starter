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
import {
  ApiTags,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

import { Foo } from 'src/app/foo/foo.entity';
import { FooService } from 'src/app/foo/foo.service';
import { CreateFooDto } from 'src/app/foo/create-foo.dto';
import { NotFoundHttpException } from 'src/app/core/exceptions/http/not-found-http.exception';
import { FindOneByIdParams } from 'src/app/core/params/find-one-by-id.param';
import { BadRequestHttpException } from 'src/app/core/exceptions/http/bad-request-http.exception';

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
  @ApiBadRequestResponse({ type: BadRequestHttpException })
  async insert(@Body() fooDto: CreateFooDto): Promise<number> {
    const insertResult = await this.fooService.insert(fooDto);

    return insertResult.raw.insertId;
  }

  /**
   * Retrieve Foo by identifier
   */
  @Get(':id')
  @ApiNotFoundResponse({ type: NotFoundHttpException })
  @ApiBadRequestResponse({ type: BadRequestHttpException })
  async findOne(@Param() params: FindOneByIdParams): Promise<Foo> {
    const foo: Foo = await this.fooService.findOne(params.id);

    if (!foo) {
      throw new NotFoundException(await this.i18n.t('app.Foo not found'));
    }

    return foo;
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNotFoundResponse({ type: NotFoundHttpException })
  @ApiBadRequestResponse({ type: BadRequestHttpException })
  async delete(@Param() params: FindOneByIdParams): Promise<void> {
    const deleteResult = await this.fooService.delete(params.id);

    if (!deleteResult.affected) {
      throw new NotFoundException(await this.i18n.t('app.Foo not found'));
    }
  }
}
