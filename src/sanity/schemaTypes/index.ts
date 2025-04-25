import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import categoryType from './categoryType'
import {postType} from './postType'
import authorType from './authorType' // ✅



export const schemaTypes = [
  postType,
  categoryType,
  authorType,
  blockContentType,
]
