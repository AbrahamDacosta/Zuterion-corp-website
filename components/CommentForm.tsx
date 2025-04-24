'use client' // facultatif si tu es en app router

import { useState } from 'react'

type Props = {
  postId: string
}

export default function CommentForm({ postId }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(false)
    setError(false)

    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, postId }),
      })

      if (res.ok) {
        setSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error('Erreur lors de l’envoi')
      }
    } catch (err) {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      {success && <p className="text-green-600">✅ Commentaire envoyé, en attente de validation.</p>}
      {error && <p className="text-red-600">❌ Une erreur est survenue. Réessayez.</p>}

      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Votre email (optionnel)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        rows={4}
        required
      />
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900"
      >
        Envoyer le commentaire
      </button>
    </form>
  )
}
