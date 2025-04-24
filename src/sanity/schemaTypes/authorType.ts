// src/sanity/schemas/author.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Auteur',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
  ],
})
