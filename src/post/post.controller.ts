import { Controller, Post as p, Body, HttpStatus, HttpCode } from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create.post.dto'
import { Post } from './domain/post.domain'


@Controller({
  path: 'post',
  version: '1',
})
export class PostController {
  constructor(private readonly postService: PostService) {}

  @p()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postProfileDto: CreatePostDto): Promise<Post> {
    return this.postService.create(postProfileDto)
  }
}
