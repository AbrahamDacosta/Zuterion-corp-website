import React from "react";
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

export default function MarketingServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <LineChart size={40} className="mx-auto text-green-600 mb-2" />
            <h1 className="text-4xl font-bold">Marketing Digital</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Stratégie, SEO, social media, emailing, analytics : on booste votre visibilité et vos performances.
            </p>
          </motion.div>
        </div>

        <div className="space-y-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold mb-2">📈 Stratégie Digitale</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Conseil global & roadmap digitale</li>
              <li>Analyse concurrentielle & positionnement</li>
              <li>Stratégie de marque</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-semibold mb-2">🎨 Branding & Identité Visuelle</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Création de logo</li>
              <li>Charte graphique</li>
              <li>Ton de voix, storytelling</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-2">🔍 SEO</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Audit technique</li>
              <li>Optimisation on-page & contenus</li>
              <li>Backlinks & netlinking</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-2">🎯 SEA (Google/Bing Ads)</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Campagnes search, display</li>
              <li>Remarketing, A/B testing</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <h2 className="text-2xl font-semibold mb-2">📱 Social Media Marketing</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Stratégie & création de contenu</li>
              <li>Community management</li>
              <li>Campagnes sponsorisées (Meta, TikTok...)</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <h2 className="text-2xl font-semibold mb-2">✉️ Emailing & CRM</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Campagnes email marketing</li>
              <li>Automatisations & workflows</li>
              <li>Intégrations (Hubspot, Mailchimp...)</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <h2 className="text-2xl font-semibold mb-2">🚀 Growth Hacking</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Acquisition rapide & ciblée</li>
              <li>Scraping, automatisation marketing</li>
              <li>Landing pages optimisées</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <h2 className="text-2xl font-semibold mb-2">📊 Analytics & Performance</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Google Analytics / GA4</li>
              <li>Tracking, reporting</li>
              <li>Analyse de parcours utilisateur</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}