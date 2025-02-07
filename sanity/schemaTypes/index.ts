import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import product from './product'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,order,blockContentType, categoryType, postType, authorType],
}
