import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'some@email.com', description: 'User email' })
  @IsString({ message: 'Email should be a string' })
  @IsEmail({}, { message: 'Incorrect email value' })
  readonly email: string;

  @ApiProperty({ example: '123456789', description: 'User password' })
  @Length(4, 16, {
    message:
      'Password must be more than 4 characters and no more than 16 characters',
  })
  readonly password: string;
}
