import { Controller, Get, Param } from '@nestjs/common';
import { Foo } from 'src/app/foo/foo.entity';
import { FooService } from 'src/app/foo/foo.service';

@Controller('foo')
export class FooController {
  constructor(private fooService: FooService) {}

  @Get()
  async findAll(): Promise<Foo[]> {
    return this.fooService.findAll();
  }

  @Get('insert')
  async insert() {
    return this.fooService.insert();
  }

  @Get('delete/:id')
  async delete(@Param('id') id: number) {
    return this.fooService.delete(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Foo> {
    return this.fooService.findOne(id);
  }
}
