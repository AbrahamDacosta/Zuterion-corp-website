export default {
    name: 'post',
    title: 'Article',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titre',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'excerpt',
        title: 'Extrait',
        type: 'text',
        rows: 3,
      },
      {
        name: 'coverImage',
        title: 'Image de couverture',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'content',
        title: 'Contenu',
        type: 'text', // ou "markdown" si plugin markdown est installé
        rows: 20,
      },
      {
        name: 'category',
        title: 'Catégorie',
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'publishedAt',
        title: 'Date de publication',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'title',
        slug: 'slug',
        image:'image',
        publishedAt: 'publishedAt',
      },
      prepare({ title, slug, publishedAt }) {
        return {
          title,
          subtitle: `${slug?.current} – ${new Date(publishedAt).toLocaleDateString()}`,
        }
      },
    },
  }
  