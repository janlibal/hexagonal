import { User } from "src/user/domain/user.domain";
import { UserEntity } from "../emtities/user.entity";

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const domainEntity = new User();
    domainEntity.firstName = raw.firstName;
    domainEntity.lastName = raw.lastName;
    
    return domainEntity;
  }

  static toPersistence(domainEntity: User): UserEntity {
    const persistenceEntity = new UserEntity();
    persistenceEntity.firstName = domainEntity.firstName;
    persistenceEntity.lastName = domainEntity.lastName;
    
    return persistenceEntity;
  }
}