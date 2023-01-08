import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Foo } from 'src/app/foo/foo.entity';
import { FooDto } from 'src/app/foo/foo.dto';

@Injectable()
export class FooService {
  constructor(
    @InjectRepository(Foo)
    private fooRepository: Repository<Foo>,
  ) {}

  findAll(): Promise<Foo[]> {
    return this.fooRepository.find();
  }

  findOne(id: number): Promise<Foo | null> {
    return this.fooRepository.findOneBy({ id });
  }

  async insert(fooDto: FooDto): Promise<Foo> {
    return this.fooRepository.save(fooDto);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.fooRepository.delete(id);
  }
}
