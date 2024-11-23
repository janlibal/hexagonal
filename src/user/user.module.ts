import { Module } from '@nestjs/common'
import { UserPersistenceModule } from './infrastructure/user.infrastructure.module'
import { UsersController } from './user.controller'
import { UsersService } from './user.service'

@Module({
  imports: [
    // import modules, etc.
    UserPersistenceModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, UserPersistenceModule],
})
export class UsersModule {}
