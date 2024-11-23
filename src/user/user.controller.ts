import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common'
import { User } from './domain/user.domain'
import { CreateUserDto } from './dto/create.user.dto'
import { UsersService } from './user.service'

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProfileDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createProfileDto)
  }
}
