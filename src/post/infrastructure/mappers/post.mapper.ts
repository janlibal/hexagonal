import { Post } from "src/post/domain/post.domain"
import { PostEntity } from "../entities/post.entity"
import { CreatePostDto } from "src/post/dto/create.post.dto"

export class PostMapper {
  static toDomain(raw: PostEntity): Post {
    const domainEntity = new Post()
    domainEntity.title = raw.title
    domainEntity.content = raw.content

    return domainEntity
  }

  static toPersistence(data: Post): PostEntity {
    const persistenceEntity = new PostEntity()
    persistenceEntity.title = data.title
    persistenceEntity.content = data.content

    return persistenceEntity
  }

}
