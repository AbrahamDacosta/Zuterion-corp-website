import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const sanity = createClient({
  projectId: 'o35qtwx7',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})

const builder = imageUrlBuilder(sanity)

export function urlFor(source: any) {
  return builder.image(source)
}
