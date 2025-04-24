export default {
    name: 'comment',
    title: 'Commentaire',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Nom',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        rows: 4,
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'post',
        title: 'Article associé',
        type: 'reference',
        to: [{ type: 'post' }],
      },
      {
        name: 'approved',
        title: 'Approuvé',
        type: 'boolean',
        initialValue: false, // ✅ seulement ici
      },
      {
        name: 'submittedAt',
        title: 'Soumis le',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
     // 👇 Aperçu personnalisé pour le studio
  preview: {
    select: {
      name: 'name',
      message: 'message',
      approved: 'approved',
      submittedAt: 'submittedAt',
    },
    prepare({ name, message, approved, submittedAt }) {
      return {
        title: `${approved ? '✅ Approuvé' : '❌ En attente'} — ${name}`,
        subtitle: `${message?.slice(0, 40)}… • ${new Date(submittedAt).toLocaleDateString()}`,
      }
    },
  },
  }
  
  