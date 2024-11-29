import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './dto/create.post.dto'
import { PostPortRepository } from './infrastructure/port/post.port'
import { Post } from './domain/post.domain'


@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostPortRepository) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    // Do not remove comment below.
    // <creating-property />

    return this.postRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      title: createPostDto.title,
      content: createPostDto.content,
    })
  }
}
