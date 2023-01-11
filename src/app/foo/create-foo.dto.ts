import { Max } from 'class-validator';

export class CreateFooDto {
  /**
   * A random value
   */
  @Max(10)
  random: number;
}
