import { User } from 'src/user/domain/user.domain'

export abstract class UserPortRepository {
  abstract create(data: User): Promise<User>
}
