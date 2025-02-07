import { User } from 'src/user/domain/user.domain'
import { UserEntity } from '../entities/user.entity'


export class UserMapper {
  static async toDomain(raw: UserEntity): Promise<User> {
    const domainEntity: User = {
        firstName: raw.firstName,
        lastName: raw.lastName
    }
    return domainEntity
  }

  static async toPersistence(data: User): Promise<UserEntity> {
    const persistenceEntity : UserEntity = {
        firstName: data.firstName,
        lastName: data.lastName
    }

    return persistenceEntity
  }
}
