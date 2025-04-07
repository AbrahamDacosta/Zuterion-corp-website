// components/NewsletterForm.tsx
import React from 'react';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setLoading(false);
      setMessage(data.message);
      if (res.ok) setEmail('');
    } catch (error) {
      setLoading(false);
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl text-center max-w-md mx-auto shadow-lg my-10">
      <h3 className="text-xl font-semibold mb-2">Abonne-toi à notre newsletter</h3>
      <p className="text-gray-600 text-sm mb-4">
        Reçois nos actus, projets et offres directement par email 📬
      </p>
      <form onSubmit={subscribe} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Ton adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Envoi en cours...' : "Je m’abonne"}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
