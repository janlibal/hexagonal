import { Injectable } from '@nestjs/common'
import { User } from 'src/user/domain/user.domain'
import { UserMapper } from '../mappers/user.mapper'
import { UserRepository } from '../repositories/user.repository'

@Injectable()
export class UsersPersistence implements UserRepository {
  async create(data: User): Promise<User> {
    const persistenceModel = await UserMapper.toPersistence(data)

    const prisma = {
      firstName: persistenceModel.firstName,
      lastName: persistenceModel.lastName,
    }

    return UserMapper.toDomain(prisma)
  }
}
