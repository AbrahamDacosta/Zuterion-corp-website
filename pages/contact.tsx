import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";
import Head from "next/head";

export default function ContactPage() {
    <><Head>
        <title>Zuterion Corp | Contact</title>
        <meta name="description" content="Agence digitale innovante spécialisée en développement Web, mobile, blockchain et design UX/UI. Basée en Côte d’Ivoire." />

        {/* Open Graph pour réseaux sociaux */}
        <meta property="og:title" content="Zuterion Corp | Développement & Design Digital" />
        <meta property="og:description" content="Agence digitale innovante spécialisée en développement Web, mobile, blockchain et design UX/UI." />
        <meta property="og:image" content="/og-zuterion.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zuterion-corp.onrender.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zuterion Corp | Développement & Design Digital" />
        <meta name="twitter:description" content="Agence digitale innovante spécialisée en développement Web, mobile, blockchain et design UX/UI." />
        <meta name="twitter:image" content="/og-zuterion.jpg" />
    </Head><main className="min-h-screen bg-white text-black font-sans overflow-hidden"></main></>


  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_t28u6dm", // service ID
        "__ejs-test-mail-service__", // template ID
        form,
        "apwz9XhYVazT0_Shs" // public key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Mail size={40} className="mx-auto text-blue-600 mb-2" />
            <h1 className="text-4xl font-bold">Contactez-nous</h1>
            <p className="text-gray-600 mt-2">Une question ? Un projet ? Parlons-en !</p>
          </motion.div>
        </div>

        {success && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded mb-6 flex items-center gap-2">
            <CheckCircle size={20} />
            <p>Message envoyé avec succès !</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nom</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full mt-1 px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full mt-1 px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required className="w-full mt-1 px-4 py-2 border rounded-md" />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer"} <Send size={18} />
          </motion.button>
        </form>
      </div>
    </main>
  );
}
