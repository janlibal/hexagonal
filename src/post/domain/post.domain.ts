import { Exclude, Expose } from 'class-transformer'

export class Post {
  @Expose()
  title: string

  @Exclude({ toPlainOnly: true })
  content: string | null
}
