// components/ContactQuickForm.tsx
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface ContactQuickFormProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export default function ContactQuickForm({ isOpen, onClose, projectName }: ContactQuickFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: `Je suis intéressé par la démo de ${projectName}` });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_t28u6dm',
      'template_vs7ws8t',
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      'apwz9XhYVazT0_Shs'
    )
    
    .then(() => {
      setSent(true);
      setSending(false);
      setFormData({ name: '', email: '', message: `Je suis intéressé par la démo de ${projectName}` });
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2500);
    })
    .catch(() => {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
      setSending(false);
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
      <div className="fixed inset-0 bg-black/70" />

        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg p-6 z-10">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-xl font-semibold mb-4">Demander une démo</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {sending ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            {sent && <p className="text-green-600 text-sm">✅ Message envoyé avec succès !</p>}
          </form>
        </div>
      </div>
    </Dialog>
    
  );
}
