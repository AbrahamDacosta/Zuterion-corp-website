import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function TechServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Code2 size={40} className="mx-auto text-blue-600 mb-2" />
            <h1 className="text-4xl font-bold">Services Tech</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Développement, design, blockchain, maintenance – nos solutions digitales sur mesure.
            </p>
          </motion.div>
        </div>

        <div className="space-y-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold mb-2">💻 Développement Web</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Site vitrine, institutionnel, e-commerce</li>
              <li>Full custom (React, Next.js, Laravel…)</li>
              <li>CMS (WordPress, Webflow…)</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-semibold mb-2">📱 Développement Mobile</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>iOS, Android, Flutter, React Native</li>
              <li>PWA, maintenance d’apps existantes</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-2">🧠 UI/UX Design</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Audit UX, wireframes, prototypes</li>
              <li>Design complet desktop/mobile</li>
              <li>Design System & tests utilisateurs</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-2">🔗 Blockchain & Web3</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Smart contracts, NFT, wallets</li>
              <li>Marketplace décentralisée</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <h2 className="text-2xl font-semibold mb-2">🚀 MVP & Product Design</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Définition roadmap produit</li>
              <li>MVP rapide pour startup</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <h2 className="text-2xl font-semibold mb-2">🔧 Maintenance & Support</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Hébergement, monitoring, performance</li>
              <li>Suivi technique & évolutions</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
