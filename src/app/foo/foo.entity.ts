import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Foo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  random: number;
}
