import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Foo {
  /**
   * Identifier
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * A random value
   */
  @Column()
  random: number;
}
