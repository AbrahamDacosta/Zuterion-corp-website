import { createClient } from 'next-sanity'

export const sanity = createClient({
  projectId: 'o35qtwx7',         // ✅ Le tien (à retrouver sur sanity.io/manage)
  dataset: 'production',         // ✅ Ou le dataset que tu as créé
  useCdn: true,
  apiVersion: '2023-01-01',
})
