import { Iframe } from 'sanity-plugin-iframe-pane'

// 👇 Pas besoin de StructureBuilder

export const defaultDocumentNode = (S, { schemaType }) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .title('Aperçu')
        .options({
          url: (doc) => {
            const slug = doc?.slug?.current;
            return slug
              ? `http://localhost:3000/blog/${slug}`
              : 'http://localhost:3000';
          },
        }),
    ]);
  }

  return S.document();
}

export const structure = (S) =>
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
    ])
