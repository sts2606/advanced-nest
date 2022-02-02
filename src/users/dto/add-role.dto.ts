import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'USER', description: 'User role' })
  @IsString({ message: 'Role should be a string' })
  readonly value: string;

  @ApiProperty({ example: '123456789', description: 'User id' })
  @IsNumber({}, { message: 'userId should be a number' })
  readonly userId: number;
}
