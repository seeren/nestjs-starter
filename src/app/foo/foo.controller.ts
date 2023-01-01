import { Controller, Get, Param } from '@nestjs/common';
import { Foo } from './foo.entity';
import { FooService } from './foo.service';

@Controller('foo')
export class FooController {
  constructor(private fooService: FooService) {}

  @Get()
  async findAll(): Promise<Foo[]> {
    return await this.fooService.findAll();
  }

  @Get('insert')
  async insert() {
    return await this.fooService.insert();
  }

  @Get('delete/:id')
  async delete(@Param('id') id: number) {
    return await this.fooService.delete(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Foo> {
    return await this.fooService.findOne(id);
  }
}
