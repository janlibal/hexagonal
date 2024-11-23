import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'

export class User {

  @ApiProperty({
    type: String,
    example: 'joe.doe@example.com',
  })
  @Expose()
  firstName: string | null

  @Exclude({ toPlainOnly: true })
  lastName: string

}
