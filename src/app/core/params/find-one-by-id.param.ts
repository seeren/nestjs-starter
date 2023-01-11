import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, MaxLength, MinLength } from 'class-validator';

export class FindOneByIdParams {
  @IsNumberString()
  @MinLength(1)
  @MaxLength(3)
  @ApiProperty()
  id: number;
}
