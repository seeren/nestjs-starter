import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

import { Foo } from 'src/app/foo/foo.entity';
import { CreateFooDto } from 'src/app/foo/create-foo.dto';

@Injectable()
export class FooService {
  constructor(
    @InjectRepository(Foo)
    private fooRepository: Repository<Foo>,
  ) {}

  findAll(): Promise<Foo[]> {
    return this.fooRepository.find();
  }

  findOne(id: number): Promise<Foo> {
    return this.fooRepository.findOneBy({ id });
  }

  async insert(fooDto: CreateFooDto): Promise<InsertResult> {
    return this.fooRepository.insert(fooDto);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.fooRepository.delete(id);
  }
}
