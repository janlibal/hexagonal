import { Injectable } from '@nestjs/common'

import { UserPortRepository } from '../port/user.port'
import { User } from 'src/user/domain/user.domain'
import { UserMapper } from '../mappers/user.mapper'

@Injectable()
export class UsersAdapterRepository implements UserPortRepository {
  async create(data: User): Promise<User> {
    const persistenceModel = await UserMapper.toPersistence(data)

    const prisma = {
      firstName: persistenceModel.firstName,
      lastName: persistenceModel.lastName,
    }

    return UserMapper.toDomain(prisma)
  }
}
