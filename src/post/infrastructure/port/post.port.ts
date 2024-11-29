import { Post } from 'src/post/domain/post.domain';
import { User } from 'src/user/domain/user.domain'

export abstract class PostPortRepository {
  abstract create(data: Post): Promise<Post>
}
