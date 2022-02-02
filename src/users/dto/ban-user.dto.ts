import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: '123456789', description: 'User id' })
  readonly userId: number;

  @ApiProperty({ example: 'rule violation', description: 'Ban reason' })
  readonly banReason: string;
}
