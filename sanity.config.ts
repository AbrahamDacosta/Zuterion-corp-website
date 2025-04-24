import { defineConfig } from 'sanity'
import { StructureBuilder, deskTool } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schemas'
import { Iframe } from 'sanity-plugin-iframe-pane'

export default defineConfig({
  name: 'default',
  title: 'Zuterion Blog',

  projectId: 'o35qtwx7',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        if (schemaType === 'post') {
          return S.document().views([
            S.view.form(),
            S.view
              .component(Iframe)
              .title('Aperçu')
              .options({
                url: (doc) =>
                  doc?.slug?.current
                    ? `http://localhost:3000/blog/${doc.slug.current}`
                    : 'http://localhost:3000',
              }),
          ])
        }

        return S.document()
      },
      structure: (S: StructureBuilder) =>
      S.list()
        .title('Contenu')
        .items([
          S.listItem()
            .title('Articles')
            .schemaType('post')
            .child(S.documentTypeList('post').title('Articles')),

          S.listItem()
            .title('Catégories')
            .schemaType('category')
            .child(S.documentTypeList('category').title('Catégories')),

          S.listItem()
            .title('💬 Modération commentaires')
            .child(
              S.documentTypeList('comment')
                .title('Commentaires à modérer')
                .filter('!defined(approved) || approved == false')
            ),

          S.divider(),

          S.listItem()
            .title('Tous les commentaires')
            .schemaType('comment')
            .child(S.documentTypeList('comment').title('Commentaires')),
        ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  // Fac. : permet l'édition live même sans API token
  studio: {
    components: {},
  },
})
