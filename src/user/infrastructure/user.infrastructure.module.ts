import { Module } from '@nestjs/common'
import { UsersAdapterRepository } from './adapter/user.adapter'
import { UserPortRepository } from './port/user.port'

@Module({
  imports: [],
  providers: [
    {
      provide: UserPortRepository,
      useClass: UsersAdapterRepository,
    },
  ],
  exports: [UserPortRepository],
})
export class UserPersistenceModule {}
