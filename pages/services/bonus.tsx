import React from "react";
import { motion } from "framer-motion";
import { Puzzle } from "lucide-react";

export default function BonusServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Puzzle size={40} className="mx-auto text-purple-600 mb-2" />
            <h1 className="text-4xl font-bold">Services Bonus</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Nos petits plus pour vous accompagner au-delà du développement : no-code, formation, accessibilité, design de présentation et plus.
            </p>
          </motion.div>
        </div>

        <div className="space-y-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold mb-2">🎓 Formation & Coaching Digital</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Accompagnement sur outils, méthodes et mindset</li>
              <li>Coaching tech & produit</li>
              <li>Sessions individuelles ou en équipe</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-semibold mb-2">⚙️ No-code / Low-code</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bubble, Webflow, Airtable, Notion...</li>
              <li>Prototypes ou MVP rapides</li>
              <li>Outils connectés à vos APIs</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-2">✍️ UX Writing / Copywriting</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Ton de voix cohérent</li>
              <li>Textes orientés conversion</li>
              <li>Structure narrative adaptée au produit</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-2">♿ Accessibilité Web</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Audit RGAA / WCAG</li>
              <li>Optimisation des interfaces et contrastes</li>
              <li>Tests utilisateurs concernés</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <h2 className="text-2xl font-semibold mb-2">📊 Design de Présentation</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pitch deck pour investisseurs</li>
              <li>Slides pour formations et démonstrations</li>
              <li>Design épuré, typographie cohérente</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
