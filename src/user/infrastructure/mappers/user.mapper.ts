import { User } from 'src/user/domain/user.domain'
import { UserEntity } from '../entities/user.entity'


export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const domainEntity = new User()
    domainEntity.firstName = raw.firstName
    domainEntity.lastName = raw.lastName

    return domainEntity
  }

  static toPersistence(domainEntity: User): UserEntity {
    const persistenceEntity = new UserEntity()
    persistenceEntity.firstName = domainEntity.firstName
    persistenceEntity.lastName = domainEntity.lastName

    return persistenceEntity
  }

  static async toDomain2(entity: UserEntity): Promise<User> {
    const domainEntity: User = {
        firstName: entity.firstName,
        lastName: entity.lastName
    }
    return domainEntity
  }

  static async toPersistence2(entity: User): Promise<UserEntity> {
    const persistenceEntity : UserEntity = {
        firstName: entity.firstName,
        lastName: entity.firstName
    }

    return persistenceEntity
  }
}
