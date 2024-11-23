import { Injectable } from '@nestjs/common'

import { User } from './domain/user.domain'
import { CreateUserDto } from './dto/create.user.dto'
import { UserPortRepository } from './infrastructure/port/user.port'

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserPortRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Do not remove comment below.
    // <creating-property />

    return this.usersRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
    })
  }
}
