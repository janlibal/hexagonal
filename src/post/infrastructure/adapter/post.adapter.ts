import { Injectable } from '@nestjs/common'
import { PostPortRepository } from '../port/post.port'
import { Post } from 'src/post/domain/post.domain'
import { PostMapper } from '../mappers/post.mapper'


@Injectable()
export class PostAdapterRepository implements PostPortRepository {
  async create(data: Post): Promise<Post> {
    const persistenceModel = PostMapper.toPersistence(data)

    const repository = {
      title: persistenceModel.title,
      content: persistenceModel.content,
    }

    return PostMapper.toDomain(repository)
  }
}
