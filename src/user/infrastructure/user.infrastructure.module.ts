import { Module } from '@nestjs/common'
import { UsersPersistence } from './persistence/user.persistence'
import { UserRepository } from './repositories/user.repository'

@Module({
  imports: [],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersPersistence,
    },
  ],
  exports: [UserRepository],
})
export class UserPersistenceModule {}
