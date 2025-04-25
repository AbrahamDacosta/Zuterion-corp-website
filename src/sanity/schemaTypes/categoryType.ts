import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'
import type { ComponentType } from 'react'

export default defineType({
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  icon: TagIcon as any, // ✅ SOLUTION STABLE
  fields: [
    defineField({
      name: 'title',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})
