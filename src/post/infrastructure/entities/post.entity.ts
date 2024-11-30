import { Exclude } from 'class-transformer'
import { EntityRelationalHelper } from '../../../utils/relation.entity.helper'


export class PostEntity { //extends EntityRelationalHelper {
  @Exclude()
  title: string
  @Exclude()
  content: string | null
}
