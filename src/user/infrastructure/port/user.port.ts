import { User } from 'src/user/domain/user.domain'
import { CreateUserDto } from 'src/user/dto/create.user.dto';

export abstract class UserPortRepository {
  abstract create(data: CreateUserDto): Promise<User>
}
