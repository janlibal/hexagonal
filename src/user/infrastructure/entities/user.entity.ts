import { Exclude } from 'class-transformer'
import { EntityRelationalHelper } from '../../../utils/relation.entity.helper'

export class UserEntity {
  @Exclude()
  firstName: string | null
  @Exclude()
  lastName: string | null
}


/*export class UserEntity extends EntityRelationalHelper {
  @Exclude()
  firstName: string | null
  @Exclude()
  lastName: string | null
}*/
