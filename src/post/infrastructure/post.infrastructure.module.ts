import { Module } from '@nestjs/common'
import { PostAdapterRepository } from './adapter/post.adapter'
import { PostPortRepository } from './port/post.port'

@Module({
  imports: [],
  providers: [
    {
      provide: PostPortRepository,
      useClass: PostAdapterRepository,
    },
  ],
  exports: [PostPortRepository],
})
export class PostPersistenceModule {}
 