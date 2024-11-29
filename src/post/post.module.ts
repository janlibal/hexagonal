import { Module } from '@nestjs/common'
import { PostPersistenceModule } from './infrastructure/post.infrastructure.module';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [
    // import modules, etc.
    PostPersistenceModule,
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService, PostPersistenceModule],
})
export class PostModule {}
