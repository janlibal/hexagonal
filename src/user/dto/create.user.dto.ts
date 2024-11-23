import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: 'Joe', type: String })
  readonly firstName: string | null

  @ApiProperty({ example: 'Doe', type: String })
  readonly lastName: string
}
