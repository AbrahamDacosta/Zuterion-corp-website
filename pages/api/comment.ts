import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@sanity/client'

// Configuration Sanity
const sanity = createClient({
  projectId: 'o35qtwx7',
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // ← à définir dans .env.local
  useCdn: false,
  apiVersion: '2023-01-01',
})

// Slack webhook (déjà fourni)
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Méthode non autorisée' })

  const { name, email, message, postId } = req.body

  if (!name || !message || !postId) {
    return res.status(400).json({ message: 'Champs requis manquants.' })
  }

  try {
    // Création du commentaire dans Sanity
    await sanity.create({
      _type: 'comment',
      name,
      email,
      message,
      post: {
        _type: 'reference',
        _ref: postId,
      },
      approved: false,
    })

    // Envoi vers Slack
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `💬 *Nouveau commentaire reçu !*\n👤 *${name}*\n📮 Post ID : \`${postId}\`\n📝 Message :\n>${message}`,
      }),
    })

    return res.status(200).json({ message: 'Commentaire soumis, en attente de modération.' })
  } catch (error) {
    console.error('Erreur d’enregistrement :', error)
    return res.status(500).json({ message: 'Erreur serveur.' })
  }
}
